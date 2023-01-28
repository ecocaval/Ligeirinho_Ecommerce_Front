import { ThreeDots } from "react-loader-spinner"

export default function ThreeDotsLoader() {
    return (
        <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="white"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    )
}