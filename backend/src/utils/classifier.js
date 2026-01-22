export function classifyPrompt(prompt) {
  const text = prompt.toLowerCase();

  if (text.includes('natal')) return 'natal';
  if (text.includes('pastel')) return 'pastel';
  if (text.includes('minimal')) return 'minimalista';
  if (text.includes('vendas') || text.includes('ecommerce')) return 'vendas';
  if (text.includes('festival') || text.includes('música')) return 'festival';

  return 'geral';
}