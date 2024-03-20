type QuotaEndpoints = {
  login: () => string
  getQuotaInformation: (typeInformation: string) => string
  askQuestion: () => string
  getCustomerHistory: () => string
}

type ChatEndpoints = {
  login: () => string
  text2text: (chatbotId: string) => string
  getChats: () => string
  getChat: (chatbotId: string) => string
}

type EndpointsType = {
  quota: QuotaEndpoints
  chat: ChatEndpoints
}

const baseUrl = {
  prod: {
    quota: 'http://spectro-alb-1277171287.us-east-1.elb.amazonaws.com:80',
    chat: 'http://spectro-alb-1277171287.us-east-1.elb.amazonaws.com:81/api',
  },
}

const endpoints: { prod: EndpointsType } = {
  prod: {
    quota: {
      login: () => `${baseUrl.prod.quota}/oauth/v1/login`,
      askQuestion: () => `${baseUrl.prod.quota}/chatbox/v1/question`,
      getQuotaInformation: (typeInformation: string) =>
        `${baseUrl.prod.quota}/sales-fulfillment/v1/${typeInformation}`,
      getCustomerHistory: () => `${baseUrl.prod.quota}/order/v1/forgotten`,
    },
    chat: {
      login: () => `${baseUrl.prod.chat}/auth/login`,
      text2text: (chatbotId) =>
        `${baseUrl.prod.chat}/interact/text2text/${chatbotId}`,
      getChats: () => `${baseUrl.prod.chat}/chatbot`,
      getChat: (chatbotId) => `${baseUrl.prod.chat}/chatbot/${chatbotId}`,
    },
  },
}

export const endpoint = (env = 'prod') => {
  return endpoints[env] as EndpointsType
}
