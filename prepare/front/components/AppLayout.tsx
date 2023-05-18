import {ReactNode} from "react";

type LayoutProps = {
    children: ReactNode;
}

const AppLayout = ({children}: LayoutProps) => {
    return (
        <div>
            <div>공통메뉴</div>
            <div>{children}</div>
        </div>
    )
}

export default AppLayout;