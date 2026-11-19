(() => {
  const portrait = document.querySelector('.portrait-container');
  if (!portrait) return;
  const trigger = portrait.querySelector('.portrait-trigger');
  const show = () => portrait.removeAttribute('data-tooltip-dismissed');
  const dismiss = () => portrait.setAttribute('data-tooltip-dismissed', '');

  portrait.addEventListener('pointerenter', show);
  portrait.addEventListener('focusin', show);
  trigger.addEventListener('click', () => {
    show();
    trigger.focus();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') dismiss();
  });
  document.addEventListener('pointerdown', (event) => {
    if (!portrait.contains(event.target)) dismiss();
  });
})();
