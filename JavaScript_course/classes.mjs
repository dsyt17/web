class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }

  upvote() {
    this.votesQty += 1;
  }
  static mergeComments(first, second) {
    return `${first}, ${second}`;
  }
}

const comment = new Comment("Shiiit");

// console.log(comment.toString());

// console.log(
//   comment.hasOwnProperty("text"),
//   comment.hasOwnProperty("votesQty"),
//   comment.hasOwnProperty("upvote"),
//   comment.hasOwnProperty()
// );

// console.log(Comment.mergeComments("asas", "sasas"));

class NumbersArray extends Array {
  sum() {
    return this.reduce((el, acc) => (acc += el), 0);
  }
}

const myArray = new NumbersArray(1, 2, 3);

// console.log(myArray);
// console.log(myArray.sum());

export default Comment;
