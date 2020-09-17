import React from 'react'
import Button from "@material-ui/core/Button";
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import LabelIcon from '@material-ui/icons/Label';
import EditIcon from '@material-ui/icons/Edit';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import UnarchiveIcon from '@material-ui/icons/Unarchive';

export default function Note(props) {
    const {title,content,color,id,onDelete,onEdit,onArchive,onLabel,onColor,onUnArchive,onDeleteArchive} = props;
    // blue red green white
    const colors = ["#F9F918","#0F79F1","#C25D2D", "#1DDD80","#FFFFFF"];
    // alert(`alerting in note ${color} ${content} ${title}`);
   
    return (
        <div className="note" style={{backgroundColor: colors[color], borderRadius:2}}>
        <h1>{`${title} ${id}`}</h1>
        <br/>
        <p>{content}</p>
        {
            onDelete &&
            <Button onClick={()=>onDelete(id)}>
                <DeleteOutlineIcon className="deleteIcon"/>
            </Button>
        }
        {
            onDeleteArchive &&
            <Button onClick={()=>onDeleteArchive(id)}>
                <DeleteOutlineIcon className="deleteIcon"/>
            </Button>
        }
        {
            onArchive &&
            <Button onClick={()=>onArchive(id)}>
                <ArchiveIcon className="archiveIcon"/>
            </Button>
        }
        {
            onUnArchive &&
            <Button onClick={()=>onUnArchive(id)}>
                <UnarchiveIcon className="unArchiveIcon"/>
            </Button>
        }
        {
            onLabel &&
            <Button onClick={()=>onLabel(id)}>
                <LabelIcon className="labelIcon"/>
            </Button>
        }
        {
            onEdit &&
            <Button onClick={()=>onEdit(id)}>
                <EditIcon className="editIcon"/>
            </Button>
        }
        {
            onColor &&
            <Button onClick={()=>onColor(id)}>
                <ColorLensIcon className="colorIcon"/>
            </Button>
        }
        </div>
    )
}
