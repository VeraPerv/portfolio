const breakpoint = window.matchMedia('(min-width: 1280px)');
const projectsList = document.querySelector('.projects-list');

const handleCardToggle = (event) => {
  const button = event.target.closest('.card__button');
  const projectsItem = event.target.closest('.projects-list__item');

  if (button && !breakpoint.matches) {
    const card = button.closest('.card');
    const spec = card.querySelector('.card__specification');
    if (spec) {
      spec.classList.toggle('card__specification--open');
    }
    return;
  }

  if (projectsItem && breakpoint.matches) {
    document.querySelectorAll('.projects-list__item--open').forEach((openCard) => {
      openCard.classList.remove('projects-list__item--open');
    });

    if (!projectsItem.classList.contains('projects-list__item--open')) {
      projectsItem.classList.add('projects-list__item--open');
    }
  }
};

const removeOpenClass = () => {
  document.querySelectorAll('.card__specification--open').forEach((spec) => {
    spec.classList.remove('card__specification--open');
  });
};

breakpoint.addEventListener('change', () => {
  if (breakpoint.matches) {
    removeOpenClass();
  }
});

document.addEventListener('keydown', (event) => {
  if (!breakpoint.matches && (event.key === 'Escape' || event.code === 'Escape')) {
    removeOpenClass();
  }
});

projectsList.addEventListener('click', (event) => handleCardToggle(event));

const setupScrollButton = () => {
  const buttonScroll = document.querySelector('.button-scroll');
  if (!buttonScroll) {
    return;
  }

  buttonScroll.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
};

document.addEventListener('DOMContentLoaded', setupScrollButton);
