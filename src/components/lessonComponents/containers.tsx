import { Box } from "@mui/material";

export default function LNeckContainer (
    {children} : 
    {children : React.ReactNode}
) {
    return (
        <Box sx={{
            display:"flex",
            flexDirection : "row"
        }}>
            {children}
        </Box>
    )
}