import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { ActionButtons, Searcher } from '../components/searchAnswer'
import { SavedQuestions } from '../components/searchAnswer/SavedQuestions'
import { SearcherProvider, useModalContext } from '../contexts'
import { Header } from '../designSystem/components'
import { colors } from '../designSystem/definitions'
import ModalTutorial from '../components/modal/ModalTutorial'

export const SearchAnswerScreen = () => {
  const { modal, handleOpenModal, handleCloseModal } = useModalContext() ?? {}

  const uservalidate = true
  useEffect(() => {
    if (uservalidate) {
      handleOpenModal('SearchAnswerScreen')
    }
  }, [])
  return (
    <SearcherProvider>
      {modal !== 'close' ? (
        <ModalTutorial
          isVisible={true}
          requestClose={() => handleCloseModal()}
        />
      ) : null}
      <View style={styles.containerSearchView}>
        <Header title="Frequently Asked Questions" />
        <ActionButtons />
        <Searcher />
        <SavedQuestions />
      </View>
    </SearcherProvider>
  )
}

const styles = StyleSheet.create({
  containerSearchView: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.primary.base,
    gap: 8,
  },
})
