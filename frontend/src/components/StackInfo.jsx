import { Button } from '@mui/material'
import { enqueueSnackbar, useSnackbar } from 'notistack'
import { AiOutlineClose } from 'react-icons/ai'
const StackInfo = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    const hanleSnack = () => {
        enqueueSnackbar({
            message: 'Info Stack',
            action: (key) =>
            (
                <Button onClick={() => closeSnackbar(key)} className='text-3xl bg-black-600'><AiOutlineClose /></Button>
            ),
        });
    }
    return (
        <Button onClick={hanleSnack}>
            ShowSnackBar
        </Button>
    )
}

export default StackInfo