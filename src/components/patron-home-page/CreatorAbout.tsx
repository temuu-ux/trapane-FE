const CreatorAbout = () => {
  return (
    <div className=" bg-neutral-800 h-fit w-[390px] py-[20px] px-[16px] text-white flex flex-col">
      {" "}
      <img
        className="mb-[10px]"
        src="https://lh6.googleusercontent.com/m4eVn6-cMuGwv5R6BljkIWP6h2Q9Co0PETZjDvGaNwEmBIcHTguTQ7nbTqYOgi-Q1gI=w2400"
        alt=""
      />
      <p className="font-bold text-xl">
        I'm Flo and I would love to make digital art with you!
      </p>
      <p>
        Can't get enough of Procreate drawing tutorials? You'll find more than
        150 exclusive Procreate tutorials ranging from beginner levels to more
        advanced levels when you join as a Master Student patron.
        <span className="text-orange-100">
          Beginner Level Tutorials Intermediate Level Tutorials Advanced Level
          Tutorials Learn to Sketch Classes Flo's Fundamentals Classes
        </span>
      </p>
      <p> What can you expect when becoming a Patron?</p>
      <div>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
      <li>
        Tutorial Videos: I share a new exclusive video tutorial each week, these
        range from beginner tutorials to more advanced tutorials.
      </li>
      <li>
        No Secrets! I will show you my entire process and every brush I use, I
        don't have any secrets for you and you may ask me anything.
      </li>
      <li>
        Exclusive Brushes: Get access to a folder with loads of special Flo
        Procreate brushes, some of the brushes are only available through
        Patreon
      </li>
      <div className="flex"> </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default CreatorAbout;
