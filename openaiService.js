require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const summarizePdf = async (text) => {
  try {
    const openaiapi = new OpenAIApi(
      new Configuration({
        apiKey: process.env.API_KEY,
      })
    );

    const response = await openaiapi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Ви - досвідчений узагальнювач тексту." },
        {
          role: "user",
          content: `Будь ласка, узагальніть наступний текст: ${text}`,
        },
      ],
      max_tokens: 100,
      temperature: 0.5,
    });

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Помилка під час узагальнення тексту:", error);
    throw error;
  }
};

module.exports = { summarizePdf };
