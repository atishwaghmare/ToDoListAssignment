import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"

let HomeToDo = () => {
    return (
        <div style={{display:'flex'}}>
            <div
                style={{
                    width: '30%',
                    height: '100vh',
                    backgroundColor: '#e6ffe6',
                    color: '#ecf0f1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                }}
            >
                {/* Profile Picture */}
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        marginBottom: '20px',
                    }}
                >
                    <img
                        src="https://via.placeholder.com/100"
                        alt="Profile"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>

                {/* User Name */}
                <h2 style={{ fontSize: '20px', margin: '10px 0' }}>John Doe</h2>

                {/* Add Task Button */}
                <button
                    // onClick={handleAddTask}
                    style={{
                        marginTop: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#3498db',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Add Task
                </button>
            </div>
            <div>

            </div>
            <div style={{
                display:'flex',
                flexDirection:'column',
                 width: '1%',
                    height: '100vh',
                    backgroundColor: '#ffffff',
            }}>

            </div>
            <div style={{
                display:'flex',
                flexDirection:'column',
                 width: '69%',
                    height: '100vh',
                    backgroundColor: '#e6ffe6',
            }}>
               
               <div> <TaskInput /></div>
               <div style={{height:'2vh',
                    width:'100%',
                    backgroundColor: '#ffffff'
               }}></div>
                <div><TaskList /></div>
            </div>
        </div>
    )
}

export default HomeToDo