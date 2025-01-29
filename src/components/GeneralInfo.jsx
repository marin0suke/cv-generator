
const GeneralInfo = ({ data, onUpdate }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate({ ...data, [name]: value });
    };

    return (
        <div>
            <h2>General Information</h2>
            <form>
                <input 
                    type="text"
                    name="name"
                    value={data.name}
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input 
                    type="email"
                    name="email"
                    value={data.email}
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="phone"
                    value={data.phone}
                    placeholder="Phone"
                    onChange={handleChange}
                />
            </form>
        </div>
    );
};

export default GeneralInfo;