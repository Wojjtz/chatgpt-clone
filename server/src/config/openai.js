const { Configuration, OpenAIApi } = require('openai')
require("dotenv").config()

module.exports = class openai{

	static configuration(){
		const configuration = new Configuration({
			apiKey: process.env.OPEN_AI_KEY,
		})

		return new OpenAIApi(configuration)
	}

	static textCompletion ({prompt}) {
    return 	{
			model:"text-davinci-003",
			prompt:`${prompt}`,
			temperature:0,
			max_tokens: 3500,
			top_p:1,
			frequency_penalty: 0.5,
			presence_penalty: 0
		}
  }
}
/*const {Configuration, OpenAIApi} = require("openai");

module.exports = class openai {
    static configuration() {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        return new OpenAIApi(configuration)
    }

    static textCompletion({ prompt }) {
        return {
            model: "gpt-3.5-turbo",
            messages: [`${prompt}`],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,

        }
    }
}*/
