import { SetStateAction } from "react";
import { Dispatch } from "react";

export type Story = {
    objectID: string;
    url: string;
    title: string;
}

export type StoryCardProps = {
    data: Story[],
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
    ActivSearch: string,
    setActivSearch: Dispatch<SetStateAction<string>>
}