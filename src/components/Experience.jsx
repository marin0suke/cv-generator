
const Experience = ({ data, onUpdate }) => {
    const handleChange = (index, field, value) => {
        const updatedExperience = data.map((item, i) => 
            i === index ? { ...item, [field]: value } : item
        );  
        onUpdate(updatedExperience);
    };

    const addExperience = () => {
        onUpdate([ ...data, { company: '', position: '', responsibilities: '', startDate: '', endDate: '' }]);
    };

    const removeExperience = (index) => {
        onUpdate(data.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Practical Experience</h2>
            {data.map((item, index) => (
                <div key={index}>
                    <input 
                        type="text"
                        placeholder="Company Name"
                        value={item.company}
                        onChange={(e) => handleChange(index, 'company', e.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="Position"
                        value={item.position}
                        onChange={(e) => handleChange(index, 'position', e.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="Main Responsibilities"
                        value={item.responsibilities}
                        onChange={(e) => handleChange(index, 'responsibilities', e.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="Start Date"
                        value={item.startDate}
                        onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="End Date"
                        value={item.endDate}
                        onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                    />
                    <button type="button" onClick={() => removeExperience(index)}>Remove</button>
                </div>
            ))}
            <button type="button" onClick={addExperience}>Add Experience</button>
        </div>
    );
};

export default Experience;