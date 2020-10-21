import delay from './delay';

const authors = [
  {
    id: 'Test Author1',
    firstName: 'Test',
    lastName: 'Author1'
  },
  {
    id: 'Test Author2',
    firstName: 'Test',
    lastName: 'Author2'
  },
  {
    id: 'Test Author3',
    firstName: 'Test',
    lastName: 'Author3'
  }
];

const generateId = (author) => {
  return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

class AuthorApi {
  static getAllAuthors() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], authors));
      }, delay);
    });
  }
}

export default AuthorApi;
