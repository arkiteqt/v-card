
export const createButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  border = true,
  icon
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  if(!icon)
    btn.innerText = label;

  const elementClasses = ['btn'];
  if(border){
    elementClasses.push('btn-border')
  }

  elementClasses.push('ripple')

  btn.className = elementClasses.join(' ');

  btn.style.backgroundColor = backgroundColor;
  if(icon)
    btn.insertAdjacentHTML('beforeend', `<i class="rsicon rsicon-${icon}"></i>`);

  return btn;
};
