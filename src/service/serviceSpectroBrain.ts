import axios from 'axios';

export const textSendButton = async (user_message) => {
    const userMessage = { text: user_message };
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjMjIzMWQ5NWNjZDM5ZjY3NGQyYTE5In0sImlhdCI6MTY5MTcxNjY4MCwiZXhwIjoxNjkyMDc2NjgwfQ.4Sc-UFgqatpFY8iiglaPgSaRJJQ4Vrh8ug4FGf9QNx4';
    let idChatbot = '64d5988118949ec223fe970a';
    
    if (!token) {
        console.error("Error: No token available");
        return Promise.reject("No token available");
    }
    const base_url = `http://192.168.12.203:4000/api/interact/text2text/${idChatbot}`;
    
    if (!userMessage?.text.trim()) {
        console.log("Error: Empty message");
        return Promise.reject("Empty message");
    }

    try {
        const response = await axios.post(base_url, userMessage, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
            },
        });
        
        if (response.data) {
            console.log(response.data);
            return response.data.gptResponse;
        } else {
            console.log("Error: interaction data is not present");
            return Promise.reject("interaction data is not present");
        }
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.log('Data:', error.response.data);
            console.log('Status:', error.response.status);
            console.log('Headers:', error.response.headers);
        } else {
            console.log('Error:', error.message);
        }
        return Promise.reject(error);
    }
};

export const voiceSendButton = async (voice_uri) => {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjMjIzMWQ5NWNjZDM5ZjY3NGQyYTE5In0sImlhdCI6MTY5MTcxNjY4MCwiZXhwIjoxNjkyMDc2NjgwfQ.4Sc-UFgqatpFY8iiglaPgSaRJJQ4Vrh8ug4FGf9QNx4';
    let idChatbot = '64d5988118949ec223fe970a';
    const base_url = `http://192.168.12.203:4000/api/interact/voice2voice/${idChatbot}`;

    if (!token) {
        console.error("Error: No token available");
        return Promise.reject("No token available");
    }

    if (!voice_uri) {
        console.log("Error: Empty URI");
        return Promise.reject("Empty URI");
    }

    // Create a new FormData instance
    const formData = new FormData();
    const file = {
        uri: voice_uri,
        type: 'audio/m4a',
        name: 'voice.m4a'
    };
    formData.append('file', file as any);
    try {
        const response = await axios.post(base_url, formData, {
            headers: {
                'Authorization': token,
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.data) {
            console.log(response.data);
            // return whatever your API sends back
            return response.data;
        } else {
            console.log("Error: interaction data is not present");
            return Promise.reject("interaction data is not present");
        }
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.log('Data:', error.response.data);
            console.log('Status:', error.response.status);
            console.log('Headers:', error.response.headers);
        } else {
            console.log('Error:', error.message);
        }
        return Promise.reject(error);
    }
};
