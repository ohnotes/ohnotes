import { get } from 'axios';
import { Container } from './styles';
import Close from '../../assets/close.svg';
import Info from '../../assets/info.svg';
import { error, success } from '../../utils/notify';

export default props => {
    const handleCopyUser = () => {
        navigator.permissions.query({ name: "clipboard-write" }).then(r => {
            if (r.state == "granted" || r.state == "prompt") {
                navigator.clipboard.writeText(localStorage.getItem("user"));
            
            }

            return success("User ID copied to clipboard.");
        });
    }

    const handleClearHistory = () => {
        if (confirm("Are you sure you want CLEAR ALL HISTORY?")) {
            localStorage.removeItem("history");

            return success("History cleared.");
        }
    }

    const handleClearNotes = () => {
        if (confirm("Are you sure you want to CLEAR ALL NOTES?")) {
            get("/deleteall")
                .then(() => success("Succesfully cleared all notes."))
                .catch(e => e.response.status === 404
                            ? error("You don't have any note created.")
                            : error("Failed to clear notes, try again."))
        }
    }
    
    const handleWipe = () => {
        if (confirm("Are you sure you want WIPE ALL DATA? Includes user and notes data.")) {
            get("/wipe")
                .then(() => {
                    localStorage.clear();
                    window.location.reload();

                })

                .catch(() => error("Failed to wipe data."));
        }
    }

    return (
        <Container data-aos="fade-in">
            <section>
                <img src={ Close }
                    width="24"
                    id="close"
                    onClick={ () => props.open(false) }
                />
                <h1>Settings</h1>
                <h2>Interface</h2>
                <section>
                    <span>
                        Language
                        <img src={ Info } width="20" title="Change interface language." />
                    </span>
                    <select disabled title="Coming soon!">
                        <option value="en">English</option>
                        <option value="pt">Portuguese</option>
                    </select>
                </section>
                <h2>User</h2>
                <section>
                    <span>
                        User ID
                        <img src={ Info } width="20" title="Copy user unique identification." />
                    </span>
                    <input
                        type="button"
                        value="Copy"
                        style={{ 'color': '#51ed57' }}
                        onClick={ () => handleCopyUser() }
                    />
                </section>
                <section>
                    <span>
                        Clear history
                        <img src={ Info } width="20" title="Clear all access history." />
                    </span>
                    <input
                        type="button"
                        value="Clear"
                        style={{ 'color': '#e0344b' }}
                        onClick={ () => handleClearHistory() }
                    />
                </section>
                <section>
                    <span>
                        Clear notes
                        <img
                            src={ Info }
                            width="20"
                            title="Clear all notes created from your user (including on database)."
                        />
                    </span>
                    <input
                        type="button"
                        value="Clear"
                        style={{ 'color': '#e0344b' }}
                        onClick={ () => handleClearNotes() }
                    />
                </section>
                <section>
                    <span>
                        Wipe data
                        <img
                            src={ Info }
                            width="20"
                            title="Wipe all your data, including created notes and user information, creating a new information."
                        />
                    </span>
                    <input
                        type="button"
                        value="Wipe"
                        style={{ 'color': '#e0344b' }}
                        onClick={ () => handleWipe() }
                    />
                </section>
            </section>
        </Container>
    );
}
