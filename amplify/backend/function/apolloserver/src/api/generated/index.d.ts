/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as prisma from "./../../node_modules/.prisma/client/index"
import { Context as ctx } from "./../context"


declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CategoryWhereUniqueInput: { // input type
    id?: string | null; // String
    name?: string | null; // String
  }
  PodcastWhereUniqueInput: { // input type
    id?: string | null; // String
    name?: string | null; // String
  }
  createPodcastInput: { // input type
    categories?: Array<string | null> | null; // [String]
    imageUrl?: string | null; // String
    info?: string | null; // String
    name: string; // String!
    podcastLink: string; // String!
  }
  createProfileInput: { // input type
    bio?: string | null; // String
    profilePic?: string | null; // String
  }
  createUserInput: { // input type
    email: string; // String!
    name: string; // String!
    password: string; // String!
    password2: string; // String!
  }
  loginInput: { // input type
    email: string; // String!
    password: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token?: string | null; // String
    user?: NexusGenRootTypes['User'] | null; // User
  }
  Category: prisma.Category;
  Mutation: {};
  Podcast: prisma.Podcast;
  Profile: prisma.Profile;
  Query: {};
  User: prisma.User;
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  Category: { // field return type
    id: string; // String!
    name: string; // String!
    podcasts: NexusGenRootTypes['Podcast'][]; // [Podcast!]!
  }
  Mutation: { // field return type
    createPodcast: NexusGenRootTypes['Podcast'] | null; // Podcast
    createUser: NexusGenRootTypes['User'] | null; // User
    login: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    upsertProfile: NexusGenRootTypes['Profile'] | null; // Profile
  }
  Podcast: { // field return type
    categories: NexusGenRootTypes['Category'][]; // [Category!]!
    id: string; // String!
    imageUrl: string | null; // String
    info: string | null; // String
    name: string; // String!
    owner: NexusGenRootTypes['User']; // User!
    podcastLink: string; // String!
  }
  Profile: { // field return type
    bio: string | null; // String
    id: string; // String!
    profilePic: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Query: { // field return type
    getAllPodcasts: Array<NexusGenRootTypes['Podcast'] | null> | null; // [Podcast]
  }
  User: { // field return type
    email: string; // String!
    id: string; // String!
    name: string; // String!
    profile: NexusGenRootTypes['Profile'] | null; // Profile
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  Category: { // field return type name
    id: 'String'
    name: 'String'
    podcasts: 'Podcast'
  }
  Mutation: { // field return type name
    createPodcast: 'Podcast'
    createUser: 'User'
    login: 'AuthPayload'
    upsertProfile: 'Profile'
  }
  Podcast: { // field return type name
    categories: 'Category'
    id: 'String'
    imageUrl: 'String'
    info: 'String'
    name: 'String'
    owner: 'User'
    podcastLink: 'String'
  }
  Profile: { // field return type name
    bio: 'String'
    id: 'String'
    profilePic: 'String'
    user: 'User'
  }
  Query: { // field return type name
    getAllPodcasts: 'Podcast'
  }
  User: { // field return type name
    email: 'String'
    id: 'String'
    name: 'String'
    profile: 'Profile'
  }
}

export interface NexusGenArgTypes {
  Category: {
    podcasts: { // args
      cursor?: NexusGenInputs['PodcastWhereUniqueInput'] | null; // PodcastWhereUniqueInput
      skip?: number | null; // Int
      take?: number | null; // Int
    }
  }
  Mutation: {
    createPodcast: { // args
      input?: NexusGenInputs['createPodcastInput'] | null; // createPodcastInput
    }
    createUser: { // args
      input?: NexusGenInputs['createUserInput'] | null; // createUserInput
    }
    login: { // args
      input?: NexusGenInputs['loginInput'] | null; // loginInput
    }
    upsertProfile: { // args
      input?: NexusGenInputs['createProfileInput'] | null; // createProfileInput
    }
  }
  Podcast: {
    categories: { // args
      cursor?: NexusGenInputs['CategoryWhereUniqueInput'] | null; // CategoryWhereUniqueInput
      skip?: number | null; // Int
      take?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: ctx;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}