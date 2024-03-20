import AsyncStorage from '@react-native-async-storage/async-storage'

const users = [
  {
    user_name: 'BRHATH',
    name: 'Britteny',
    last_name: 'Hathaway',
  },
  {
    user_name: 'DICALI',
    name: 'Dimitri',
    last_name: 'Calimopulos',
  },
  {
    user_name: 'GUYEPE',
    name: 'Gustavo',
    last_name: 'Yepes',
  },
  {
    user_name: 'JUSAND',
    name: 'Justin',
    last_name: 'Sandlin',
  },
  {
    user_name: 'MAERWI',
    name: 'Mark',
    last_name: 'Erwin',
  },
  {
    user_name: 'ROMART',
    name: 'Ronald',
    last_name: 'Martin',
  },
]


export const initialMessage = `I'm here to help turbocharge your sales with some smart AI magic. We'll dive into your sales data and cook up personalized tips just for you. Ready to smash those quotas and reach new heights? Let's get this show on the road!`


const rawMessages = {
  message1:
    '"Explore and Interact with Our Chatbots: Browse through our diverse range of chatbots here. Click on any chatbot to start an interactive conversation tailored to your needs and inquiries. Each chatbot is designed to assist you in different areas, providing a unique and engaging experience."',
  message2:
    'Your Performance Dashboard: Track your sales and quota achievements here. This screen displays your daily, weekly, monthly, and annual sales performance. Additionally, get a summarized view of your sales trends over the last three months, helping you stay on top of your goals and progress.',
  message3:
    'Get Answers to Common Questions: Have a question? Our Q&A Chatbot is here to help. Ask any frequently asked questions, like  How do I humidify a humidor? or other queries, and get instant, helpful responses. This feature is designed to provide quick and reliable answers to your most common concerns.',
  message4:
    'Track Customer Engagement: This screen provides a list of customers who have not made a purchase in the last 60 days. Use this information to re-engage with inactive customers, understand their needs, and strategize on how to enhance their interaction with your services or products.',
}

export const rawMessages1 = {
  ChatsScreen:
    '"Explore and Interact with Our Chatbots: Browse through our diverse range of chatbots here. Click on any chatbot to start an interactive conversation tailored to your needs and inquiries. Each chatbot is designed to assist you in different areas, providing a unique and engaging experience."',
  ScreenCharts:
    'Your Performance Dashboard: Track your sales and quota achievements here. This screen displays your daily, weekly, monthly, and annual sales performance. Additionally, get a summarized view of your sales trends over the last three months, helping you stay on top of your goals and progress.',
  SearchAnswerScreen:
    'Get Answers to Common Questions: Have a question? Our Q&A Chatbot is here to help. Ask any frequently asked questions, like  How do I humidify a humidor? or other queries, and get instant, helpful responses. This feature is designed to provide quick and reliable answers to your most common concerns.',
    CustomersHistoryScreen:
    'Track Customer Engagement: This screen provides a list of customers who have not made a purchase in the last 60 days. Use this information to re-engage with inactive customers, understand their needs, and strategize on how to enhance their interaction with your services or products.',
}

export const getPersonalizedMessages = async () => {
  const username = await AsyncStorage.getItem('username')
  // Find the user object from the users array using the username
  const user = users.find((u) => u.user_name === username)

  // If the user is found, replace the {} with the user's name in each message
  if (user) {
    const fullName = `${user.name}`
    const personalizedMessages = {}
    for (const key in rawMessages) {
      personalizedMessages[key] = rawMessages[key].replace('{}', fullName)
    }
    return personalizedMessages
  } else {
    console.log('User not found!')
    return rawMessages // Return the raw messages without replacement
  }
}

export const messages = getPersonalizedMessages()

// export const messages = {
//     message1:'Hello {}, welcome, I am your sales assistant, I am here to motivate you and help you achieve your sales goals!',
//     message2:'{}, as your sales assistant I am here to help motivate you and encourage you to beat and surpass your goals.  You will have your monthly quota loaded along with tips and tricks that will help you make sales.',
//     message3:'My job is to make meeting and surpassing your numbers fun, exciting and simple.  So let’s get started and make you some $$.',
// }
