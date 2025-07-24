 
export async function askLLM(prompt) {
  const res = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'mistral:instruct',
      prompt,
      stream: false
    })
  });

  const json = await res.json();
  return json.response || '⚠️ No response from LLM.';
}



