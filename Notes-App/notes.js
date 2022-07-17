const { default: chalk } = require('chalk')
const fs = require('fs')

const addNotes =(title,body)=>
{
    const notes = loadNotes()
    const duplicate = notes.find((note)=>note.title == title)
    if(!duplicate)
    {
        notes.push({
            "title":title,
            "body":body
        })
        fs.writeFileSync('notes.json',JSON.stringify(notes))    
        console.log(chalk.green("Note Added"))
    }
    else
    {
        console.log(chalk.red("Note Already there"))
    }
}

const loadNotes = ()=>
{
    try
    {
        const data = fs.readFileSync('notes.json')
        const parsedData = JSON.parse(data.toString())
        return parsedData
    }
    catch(e)
    {
        return []
    }
}

const removeNote = (title)=>
{
    const notes = loadNotes()

    const duplicate = notes.filter((note)=>note.title !== title)
    if(notes.length == duplicate.length)
    {
        console.log(chalk.red("No Note Removed"))
    }
    else
    {
        console.log(chalk.green("Note Removed"))
        fs.writeFileSync('notes.json',JSON.stringify(duplicate))    
    }
    
}

const listNotes = ()=>
{
    console.log(chalk.green.inverse("Your Notes"));
    const notes = loadNotes()
    notes.forEach((note)=>console.log(note.title))  
}

const readNote = (title)=>{
    const notes = loadNotes()
    const duplicate = notes.find((note)=>note.title == title)
    if(duplicate)
    {
        console.log(chalk.green("Note found"))
        console.log(chalk.blue("Title is : ")+duplicate.title)
        console.log(chalk.blue("Body  is : ")+duplicate.body)
    }
    else
    {
        console.log(chalk.red("Note not found"))
    }
}

module.exports = {
    addNotes:addNotes,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}