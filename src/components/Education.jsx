
const Education = ({ data, onUpdate }) => {
    const handleChange = (index, field, value) => {
        const updatedEducation = data.map((item, i) => 
            i === index ? { ... item, [field]: value} : item
        );
        onUpdate(updatedEducation);
    }

    const addEducation = () => {
        const lastEntry = data[data.length - 1];

        if (!lastEntry.school && !lastEntry.degree && !lastEntry.date) {
            alert("Please fill out the existing education entry before adding another.");
            return;
        }

        onUpdate([...data, { school: '', degree: '', date: ''}]);
    };

    const removeEducation = (index) => {
        if (data.length === 1) return; // prevents deleting the original empty form. 

        onUpdate(data.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Education</h2>
            {data.map((item, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="School Name"
                        value={item.school}
                        onChange={(e) => handleChange(index,'school', e.target.value)}
                    />
                     <input
                        type="text"
                        placeholder="Degree"
                        value={item.degree}
                        onChange={(e) => handleChange(index,'degree', e.target.value)}
                    />
                     <input
                        type="text"
                        placeholder="Date"
                        value={item.date}
                        onChange={(e) => handleChange(index,'date', e.target.value)}
                    />
                    <button type="button" onClick={() => removeEducation(index)}>Remove</button>
                </div>
            ))}
            <button type="button" onClick={addEducation}>Add Education</button>
        </div>
    );
};

export default Education;