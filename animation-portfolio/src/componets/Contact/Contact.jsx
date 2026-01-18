import contact from "../../assets/contact.png";
import "./Contact.css"

const Contact = () => {
  return (
    <div id="contact">
        <div className="leftcontact">
            <img src={contact} />
        </div>
        <div className="rightcontact">
            <form >
                <input name="Username" type="text" placeholder="name" />
                <input name="Email" type="email" placeholder="email" />
                <textarea name="message" id="textarea" placeholder="message me"></textarea>
                <input type="submit" id="btn" value="Submit" />
            </form>
        </div>
    </div>
  )
}

export default Contact
