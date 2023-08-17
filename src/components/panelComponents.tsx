import { Box, Button, ButtonGroup } from "@mui/material";

interface paginationButtonsProps {
    nextFunction : (event : React.MouseEvent<HTMLButtonElement>) => void
    backFunction : (event : React.MouseEvent<HTMLButtonElement>) => void
}

export function PaginationButtons({nextFunction,backFunction}:paginationButtonsProps) {
    return (
        <Box>
            <ButtonGroup>
                <Button
                onClick={nextFunction}
                >Anterior</Button>
                <Button
                onClick={backFunction}
                >Siguiente</Button>
            </ButtonGroup>
        </Box> 
    )
}