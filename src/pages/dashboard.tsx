import {Flex, SimpleGrid, Box, Text, theme} from "@chakra-ui/react"
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
})

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
}

const series = [
    {name: "series1", data: [31, 120, 10, 28, 61, 18, 109]}
]

export default function Desboard(){
    return(
        <Flex direction="column" h="100vh">
            <Header/>

            <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
                <Sidebar/>

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box 
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                    >
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                        <Chart options={options} series={series} type="area" height={160}/>
                    </Box>
                    <Box 
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                    >
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}