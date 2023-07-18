const addNewItemHandleClick = (addSection, listSection, contactSection) => {
  addSection.style.display = 'flex';
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
};

const contactFormHandleClick = (contactSection, addSection, listSection) => {
  contactSection.style.display = 'flex';
  addSection.style.display = 'none';
  listSection.style.display = 'none';
};

const listItemHandleClick = (contactSection, addSection, listSection) => {
  listSection.style.display = 'block';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
};

export { contactFormHandleClick, addNewItemHandleClick, listItemHandleClick };