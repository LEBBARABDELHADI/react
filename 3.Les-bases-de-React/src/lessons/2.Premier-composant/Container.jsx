export default function Container() {
  return (
    <div>
      <h1>Premier Composant</h1>
      <p className="toto">
        {/* {" "} */}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis tempora
        ducimus veritatis magni voluptatibus error dolore aut necessitatibus
        commodi aliquid, asperiores sint cum dolorem eaque fugit ullam beatae.
        Ad, illum!
      </p>

      <input type="s" />
      <br />
      <span>
        <input
          type="checkbox"
          name="interest"
          value="sports"
          id="sports"
        ></input>
        <label> sports</label>
        <br />
        <input type="checkbox" name="interest" value="music" id="music"></input>
        <label htmlFor="music"> music</label>
      </span>
      <br />
      <input type="submit" value="Submit"></input>
      <input type="file" name="file_upload"></input>
      <br />
      <button className="btn" onClick={(e) => handleClicke(e, 22)}>
        clicked
      </button>
    </div>
  );
  function handleClicke(e, id) {
    console.log("clicked ", e, id);
  }
}
