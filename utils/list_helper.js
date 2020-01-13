const dummy = (blogs) => {
    return 1;
  };

const totalLikes = (blogs) => {
    let sum =  blogs.reduce((acc, val)=>{
        return {likes: acc.likes + val.likes};
    });
    return sum.likes;
}
  
  module.exports = {
    dummy,
    totalLikes
  }