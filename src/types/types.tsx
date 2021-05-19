import { User, UserCredential } from "firebase/auth";
import React from "react";

type firebaseAuthFunc = (email: string, password : string) => Promise<any>;

export interface ProgressBarProps {
    file : File;
    setFile : React.Dispatch<React.SetStateAction<File|null>>;
    setTitle : React.Dispatch<React.SetStateAction<string>>;
    setSubmitReady : React.Dispatch<React.SetStateAction<boolean>>;
    user : string;
    title : string;
}

export interface likesType {
    [key: string]: boolean;
}

export interface imageProp {
    alt : string;
    url : string;
    likes : likesType;
    uploadedBy : string;
    title : string;
}


export interface modalImageProps {
    id : string;
    url : string;
    author : string;
    likes : likesType;
    title : string;
}

export interface imageGridProps {
    setSelectedImg : React.Dispatch<React.SetStateAction<modalImageProps | null>>
}



export interface modalProps {
    selectedImg : modalImageProps;
    setSelectedImg : React.Dispatch<React.SetStateAction<modalImageProps | null>>;
} 

export interface AuthProviderProps {
    children: React.ReactNode
}

export interface authContext {
    currentUser : User | null;
    signUp : (email: string, password: string) => Promise<UserCredential>;
    logIn : (email: string, password: string) => Promise<UserCredential>;
    logOut : () => Promise<void>;
    resetPassword : (email: string) => Promise<void>;
    updatePass : (user: User, newPassword: string) => Promise<void>;
}