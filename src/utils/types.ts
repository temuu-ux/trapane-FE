export interface PatronType {
  name: string;
  email: string;
  password: string;
  profilePic: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface CreatorType {
  name: string;
  username: string;
  email: string;
  password: string;
  profilePic: string;
  coverPic: string;
  bio: string;
  createdAt: Date;
  updatedAt: Date;
  category: string;
}
export interface CategoryType {
  name: string;
  desc: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface CommentType {
  patronId: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  likes: number;
}
export interface PostType {
  _id: string;
  creatorId: string;
  title: string;
  bodyText: string;
  imageURL: string;
  videoURL: string;
  likes: string[];
  contentType: "text" | "image" | "video";
  createdAt: Date;
  updatedAt: Date;
  comments: {
    patronId: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
    likes: number;
  }[];
}
export interface PostRecieveType {
  _id: string;
  creatorId: string;
  title: string;
  bodyText: string;
  imageURL: string;
  videoURL: string;
  likes: string[];
  contentType: "text" | "image" | "video";
  createdAt: Date;
  updatedAt: Date;
  comments: {
    patronId: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
    likes: number;
  }[];
}
export interface SubscriptionType {
  patronId: string;
  creatorId: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
  status: "active" | "inactive" | "cancelled";
  paymentMethod: "card" | "qpay";
}
export interface TierType {
  creatorId: string;
  title: string;
  desc: string;
  imageURL: string;
  price: number;
}
export interface PageDataType {
  creator: {
    _id: string;
    username: string;
    name: string;
    email: string;
    password: string;
    profilePic: string;
    coverPic: string;
    bio: string;
    createdAt: Date;
    updatedAt: Date;
    category: string;
  };
  posts: {
    _id: string;
    creatorId: string;
    title: string;
    bodyText: string;
    imageURL: string;
    createdAt: Date;
    updatedAt: Date;
    videoURL: string;
    likes: string[];
    comments: {
      _id: string;
      patronId: string;
      text: string;
      createdAt: Date;
      updatedAt: Date;
      likes: number;
    }[];
    contentType: "text" | "image" | "video";
  }[];
  subscriptions: boolean;
  tiers: {
    _id: string;
    creatorId: string;
    title: string;
    desc: string;
    imageURL: string;
    price: number;
  }[];
  subscriptionCount: number;
}
export interface TierWithIdType extends TierType {
  _id: string;
}