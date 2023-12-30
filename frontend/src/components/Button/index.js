export const ButtonR = () => {
	return <button class="btn btn-border ripple"><i class="rsicon rsicon-add"></i></button>
}


export const createButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  btn.className = ['btn','btn-border'].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
