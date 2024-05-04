import React, {useState} from "react";
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './Create.css'

const Create = (props) => {
	const[isExpanded, setExpanded] = useState(false)
	const [note, setNote] = useState({
		title:"",
		content:""
	})
	function handleClick(event){
		const {name, value} = event.target;
		// console.log("name is "+name);
		// console.log("value is "+ value);
		setNote(function(para) {
				return{
					...para,
					[name]: value
			}
		})
		// console.log(note)
	}

	function submitNote(event){
		props.onAdd(note);
		// event.preventDefualt();

	}
	function expand(){
		setExpanded(true)
	}

	function submitNote(event){
		props.onAdd(note);
		event.preventDefault();
	}
	return(
		<div className="main-div">
		<form className="form-div">
			{isExpanded && <input
			type="text"
			value = {note.title} 
			id="" 
			name="title"
			onChange={handleClick} 
			placeholder="Title" 
			required
			class= 'input-div'
			/>}
			
			<textarea
			onClick={expand}
				type="text" 
				id="" 
				name="content"
				value ={note.content}
				onChange={handleClick} 
				placeholder="Write a note"
				row={isExpanded ? 3 :1} 
				required
				className="text-div"
			/>
			<Zoom in={isExpanded}>
				<Fab onClick={submitNote}>
					<AddIcon/>
				</Fab>
			</Zoom>
		</form>
		</div>
	)
    
}

export default Create