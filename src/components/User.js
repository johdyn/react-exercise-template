export default function User({ title, firstName, lastName, gender, picture }) {
  return (
    <div className={gender === "male" ? "maleUserBox" : "femaleUserBox"}>
      <section className="user-class">
        <h3>
          {title} {firstName} {lastName}
        </h3>
        <img src={picture} />
      </section>
    </div>
  );
}
