import AsyncStorage from '@react-native-async-storage/async-storage'
import type { FC, PropsWithChildren } from 'react'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { endpoint, fetchToAskQuestion } from '../service'
import { PossibleSearchingState, PossibleTab, SearchType } from '../typings'

export interface SearcherContextType {
  search: (question: string) => void
  saveSearch: (search: SearchType) => void
  removeSearch: (searchId: string) => void
  currentSearch: SearchType | null
  savedSearches: SearchType[]
  currentSearches: SearchType[]
  loading: boolean
  searchingState: PossibleSearchingState
  currentTab: PossibleTab
  setCurrentTab: React.Dispatch<React.SetStateAction<PossibleTab>>
}

const SearcherContext = createContext({} as SearcherContextType)

export const useSearcherContext = () => useContext(SearcherContext)

export const SearcherProvider: FC<PropsWithChildren> = ({ children }) => {
  const { Provider } = SearcherContext

  const [searchingState, setSearchingState] =
    useState<PossibleSearchingState>('empty')
  const [currentSearch, setCurrentSearch] = useState<SearchType | null>(null)
  const [savedSearches, setSavedSearches] = useState<SearchType[]>([])
  const [currentSearches, setCurrentSearches] = useState<SearchType[]>([])
  const [loading, setLoading] = useState(false)
  const [currentTab, setCurrentTab] = useState<PossibleTab>('new')

  const search = async (question: string) => {
    const url = endpoint().quota.askQuestion()

    setLoading(true)
    setSearchingState('loading')
    const askResult = await fetchToAskQuestion({ url, question })
    setLoading(false)

    if (askResult.resolveType === 'withError') {
      setSearchingState('error')
      return
    }

    const search = {
      id: `${Math.random()}`,
      answer: askResult.data.gptResponse.trimStart(),
      createdAt: new Date(),
      question,
    }

    setCurrentSearch(search)
    setSearchingState('updated')
    setCurrentSearches(curr => [search, ...curr])
  }

  const saveSearch = (search: SearchType) => {
    setSavedSearches(curr => {
      const updatedSavedSearches = curr.concat(search)
      AsyncStorage.setItem(
        'savedSearches',
        JSON.stringify(updatedSavedSearches)
      )

      return updatedSavedSearches
    })
  }

  const removeSearch = (searchId: string) => {
    setSavedSearches(curr => curr.filter(({ id }) => searchId !== id))
  }

  useEffect(() => {
    AsyncStorage.getItem('savedSearches').then(data => {
      try {
        const savedSearchesInLocal = JSON.parse(data ?? '[]')

        if (Array.isArray(savedSearchesInLocal)) {
          setSavedSearches(savedSearchesInLocal)
        }
      } catch (error) {
        console.log(error)
      }
    })
  }, [])

  const context: SearcherContextType = {
    currentSearch,
    search,
    saveSearch,
    savedSearches,
    loading,
    currentTab,
    setCurrentTab,
    currentSearches,
    searchingState,
    removeSearch,
  }

  return <Provider value={context}>{children}</Provider>
}
