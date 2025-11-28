import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { GEMINI_SYSTEM_INSTRUCTION } from '../constants';

// Initialize the client
// NOTE: In a real production app, ensure API keys are secured via a backend proxy if possible.
// For this portfolio demo, we assume the environment variable is available during build/runtime.
const apiKey = process.env.API_KEY || ''; 

let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
} else {
  console.warn("Gemini API Key is missing. The chat feature will not function correctly.");
}

/**
 * Creates a new chat session with the portfolio context loaded.
 */
export const createPortfolioChat = (): Chat | null => {
  if (!ai) return null;

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: GEMINI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });
    return chat;
  } catch (error) {
    console.error("Failed to create chat session:", error);
    return null;
  }
};

/**
 * Sends a message to the chat model and yields chunks for streaming.
 */
export async function* sendMessageStream(chat: Chat, message: string): AsyncGenerator<string, void, unknown> {
  try {
    const resultStream = await chat.sendMessageStream({ message });
    
    for await (const chunk of resultStream) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    yield "I'm sorry, I'm having trouble connecting to my brain right now. Please try again later.";
  }
}