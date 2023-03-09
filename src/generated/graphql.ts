/* eslint-disable @typescript-eslint/no-explicit-any */
import * as SchemaTypes from '../types/alkemio-schema';

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  CID: any;
  DID: string;
  DateTime: Date;
  JSON: string;
  LifecycleDefinition: any;
  Markdown: any;
  MessageID: any;
  NameID: string;
  UUID: string;
  UUID_NAMEID: string;
  UUID_NAMEID_EMAIL: string;
  Upload: import('graphql-upload').FileUpload;
};

export type Apm = {
  /** Endpoint where events are sent. */
  endpoint: Scalars['String'];
  /** Flag indicating if real user monitoring is enabled. */
  rumEnabled: Scalars['Boolean'];
};

export type ActivityCreatedSubscriptionResult = {
  /** The newly created activity */
  activity: ActivityLogEntry;
};

export enum ActivityEventType {
  CalloutPublished = 'CALLOUT_PUBLISHED',
  CanvasCreated = 'CANVAS_CREATED',
  CardComment = 'CARD_COMMENT',
  CardCreated = 'CARD_CREATED',
  ChallengeCreated = 'CHALLENGE_CREATED',
  DiscussionComment = 'DISCUSSION_COMMENT',
  MemberJoined = 'MEMBER_JOINED',
  OpportunityCreated = 'OPPORTUNITY_CREATED',
  UpdateSent = 'UPDATE_SENT',
}

export type ActivityLogEntry = {
  /** The id of the Collaboration entity within which the Activity was generated. */
  collaborationID: Scalars['UUID'];
  /** The timestamp for the Activity. */
  createdDate: Scalars['DateTime'];
  /** The text details for this Activity. */
  description: Scalars['String'];
  id: Scalars['UUID'];
  /** The user that triggered this Activity. */
  triggeredBy: User;
  /** The event type for this Activity. */
  type: ActivityEventType;
};

export type ActivityLogEntryCalloutCanvasCreated = ActivityLogEntry & {
  /** The Callout in which the Canvas was created. */
  callout: Callout;
  /** The Canvas that was created. */
  canvas: Canvas;
  /** The id of the Collaboration entity within which the Activity was generated. */
  collaborationID: Scalars['UUID'];
  /** The timestamp for the Activity. */
  createdDate: Scalars['DateTime'];
  /** The text details for this Activity. */
  description: Scalars['String'];
  id: Scalars['UUID'];
  /** The user that triggered this Activity. */
  triggeredBy: User;
  /** The event type for this Activity. */
  type: ActivityEventType;
};

export type ActivityLogEntryCalloutCardComment = ActivityLogEntry & {
  /** The Callout in which the Card was commented. */
  callout: Callout;
  /** The Card that was commented on. */
  card: Aspect;
  /** The id of the Collaboration entity within which the Activity was generated. */
  collaborationID: Scalars['UUID'];
  /** The timestamp for the Activity. */
  createdDate: Scalars['DateTime'];
  /** The text details for this Activity. */
  description: Scalars['String'];
  id: Scalars['UUID'];
  /** The user that triggered this Activity. */
  triggeredBy: User;
  /** The event type for this Activity. */
  type: ActivityEventType;
};

export type ActivityLogEntryCalloutCardCreated = ActivityLogEntry & {
  /** The Callout in which the Card was created. */
  callout: Callout;
  /** The Card that was created. */
  card: Aspect;
  /** The id of the Collaboration entity within which the Activity was generated. */
  collaborationID: Scalars['UUID'];
  /** The timestamp for the Activity. */
  createdDate: Scalars['DateTime'];
  /** The text details for this Activity. */
  description: Scalars['String'];
  id: Scalars['UUID'];
  /** The user that triggered this Activity. */
  triggeredBy: User;
  /** The event type for this Activity. */
  type: ActivityEventType;
};

export type ActivityLogEntryCalloutDiscussionComment = ActivityLogEntry & {
  /** The Callout in which the comment was added. */
  callout: Callout;
  /** The id of the Collaboration entity within which the Activity was generated. */
  collaborationID: Scalars['UUID'];
  /** The timestamp for the Activity. */
  createdDate: Scalars['DateTime'];
  /** The text details for this Activity. */
  description: Scalars['String'];
  id: Scalars['UUID'];
  /** The user that triggered this Activity. */
  triggeredBy: User;
  /** The event type for this Activity. */
  type: ActivityEventType;
};

export type ActivityLogEntryCalloutPublished = ActivityLogEntry & {
  /** The Callout that was published. */
  callout: Callout;
  /** The id of the Collaboration entity within which the Activity was generated. */
  collaborationID: Scalars['UUID'];
  /** The timestamp for the Activity. */
  createdDate: Scalars['DateTime'];
  /** The text details for this Activity. */
  description: Scalars['String'];
  id: Scalars['UUID'];
  /** The user that triggered this Activity. */
  triggeredBy: User;
  /** The event type for this Activity. */
  type: ActivityEventType;
};

export type ActivityLogEntryChallengeCreated = ActivityLogEntry & {
  /** The Challenge that was created. */
  challenge: Challenge;
  /** The id of the Collaboration entity within which the Activity was generated. */
  collaborationID: Scalars['UUID'];
  /** The timestamp for the Activity. */
  createdDate: Scalars['DateTime'];
  /** The text details for this Activity. */
  description: Scalars['String'];
  id: Scalars['UUID'];
  /** The user that triggered this Activity. */
  triggeredBy: User;
  /** The event type for this Activity. */
  type: ActivityEventType;
};

export type ActivityLogEntryMemberJoined = ActivityLogEntry & {
  /** The id of the Collaboration entity within which the Activity was generated. */
  collaborationID: Scalars['UUID'];
  /** The community that was joined. */
  community: Community;
  /** The type of the the Community. */
  communityType: Scalars['String'];
  /** The timestamp for the Activity. */
  createdDate: Scalars['DateTime'];
  /** The text details for this Activity. */
  description: Scalars['String'];
  id: Scalars['UUID'];
  /** The user that triggered this Activity. */
  triggeredBy: User;
  /** The event type for this Activity. */
  type: ActivityEventType;
  /** The User that joined the Community. */
  user: User;
};

export type ActivityLogEntryOpportunityCreated = ActivityLogEntry & {
  /** The id of the Collaboration entity within which the Activity was generated. */
  collaborationID: Scalars['UUID'];
  /** The timestamp for the Activity. */
  createdDate: Scalars['DateTime'];
  /** The text details for this Activity. */
  description: Scalars['String'];
  id: Scalars['UUID'];
  /** The Opportunity that was created. */
  opportunity: Opportunity;
  /** The user that triggered this Activity. */
  triggeredBy: User;
  /** The event type for this Activity. */
  type: ActivityEventType;
};

export type ActivityLogEntryUpdateSent = ActivityLogEntry & {
  /** The id of the Collaboration entity within which the Activity was generated. */
  collaborationID: Scalars['UUID'];
  /** The timestamp for the Activity. */
  createdDate: Scalars['DateTime'];
  /** The text details for this Activity. */
  description: Scalars['String'];
  id: Scalars['UUID'];
  /** The Message that been sent to this Community. */
  message: Scalars['String'];
  /** The user that triggered this Activity. */
  triggeredBy: User;
  /** The event type for this Activity. */
  type: ActivityEventType;
  /** The Updates for this Community. */
  updates: Updates;
};

export type ActivityLogInput = {
  /** Display the activityLog results for the specified Collaboration. */
  collaborationID: Scalars['UUID'];
  /** The number of ActivityLog entries to return; if omitted return all. */
  limit?: InputMaybe<Scalars['Float']>;
};

export type Actor = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** A description of this actor */
  description?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** The change / effort required of this actor */
  impact?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** A value derived by this actor */
  value?: Maybe<Scalars['String']>;
};

export type ActorGroup = {
  /** The set of actors in this actor group */
  actors?: Maybe<Array<Actor>>;
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** A description of this group of actors */
  description?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  name: Scalars['String'];
};

export type Agent = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The Credentials held by this Agent. */
  credentials?: Maybe<Array<Credential>>;
  /** The Decentralized Identifier (DID) for this Agent. */
  did?: Maybe<Scalars['DID']>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** The Verfied Credentials for this Agent. */
  verifiedCredentials?: Maybe<Array<VerifiedCredential>>;
};

export type AgentBeginVerifiedCredentialOfferOutput = {
  /** The token containing the information about issuer, callback endpoint and the credentials offered */
  jwt: Scalars['String'];
  /** The QR Code Image to be offered on the client for scanning by a mobile wallet */
  qrCodeImg: Scalars['String'];
};

export type AgentBeginVerifiedCredentialRequestOutput = {
  /** The token containing the information about issuer, callback endpoint and the credentials offered */
  jwt: Scalars['String'];
  /** The QR Code Image to be offered on the client for scanning by a mobile wallet */
  qrCodeImg: Scalars['String'];
};

export type Application = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  createdDate: Scalars['DateTime'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  lifecycle: Lifecycle;
  /** The Questions for this application. */
  questions: Array<Question>;
  updatedDate: Scalars['DateTime'];
  /** The User for this Application. */
  user: User;
};

export type ApplicationEventInput = {
  applicationID: Scalars['UUID'];
  eventName: Scalars['String'];
};

export type ApplicationForRoleResult = {
  /** ID for the Challenge being applied to, if any. Or the Challenge containing the Opportunity being applied to. */
  challengeID?: Maybe<Scalars['UUID']>;
  /** ID for the community */
  communityID: Scalars['UUID'];
  /** Date of creation */
  createdDate: Scalars['DateTime'];
  /** Display name of the community */
  displayName: Scalars['String'];
  /** ID for the ultimate containing Hub */
  hubID: Scalars['UUID'];
  /** ID for the application */
  id: Scalars['UUID'];
  /** ID for the Opportunity being applied to, if any. */
  opportunityID?: Maybe<Scalars['UUID']>;
  /** The current state of the application. */
  state: Scalars['String'];
  /** Date of last update */
  updatedDate: Scalars['DateTime'];
};

export type ApplicationTemplate = {
  /** Application template name. */
  name: Scalars['String'];
  /** Template questions. */
  questions: Array<QuestionTemplate>;
};

export type Aspect = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The banner Visual for this Aspect. */
  banner?: Maybe<Visual>;
  /** The narrow banner visual for this Aspect. */
  bannerNarrow?: Maybe<Visual>;
  /** The parent Callout of the Aspect */
  callout?: Maybe<Callout>;
  /** The comments for this Aspect. */
  comments?: Maybe<Comments>;
  /** The user that created this Aspect */
  createdBy?: Maybe<User>;
  createdDate: Scalars['DateTime'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** A name identifier of the entity, unique within a given scope. */
  nameID: Scalars['NameID'];
  /** The Profile for this Card. */
  profile: Profile;
  /** The aspect type, e.g. knowledge, idea, stakeholder persona etc. */
  type: Scalars['String'];
};

export type AspectCommentsMessageReceived = {
  /** The identifier for the Aspect. */
  aspectID: Scalars['String'];
  /** The message that has been sent. */
  message: Message;
};

export type AspectTemplate = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The default description to show to users filling our a new instance. */
  defaultDescription: Scalars['Markdown'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** The meta information for this Template */
  info: TemplateInfo;
  /** The type for this Aspect. */
  type: Scalars['String'];
};

export type AssignChallengeAdminInput = {
  challengeID: Scalars['UUID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type AssignCommunityLeadOrganizationInput = {
  communityID: Scalars['UUID'];
  organizationID: Scalars['UUID_NAMEID'];
};

export type AssignCommunityLeadUserInput = {
  communityID: Scalars['UUID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type AssignCommunityMemberOrganizationInput = {
  communityID: Scalars['UUID'];
  organizationID: Scalars['UUID_NAMEID'];
};

export type AssignCommunityMemberUserInput = {
  communityID: Scalars['UUID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type AssignGlobalAdminInput = {
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type AssignGlobalCommunityAdminInput = {
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type AssignGlobalHubsAdminInput = {
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type AssignHubAdminInput = {
  hubID: Scalars['UUID_NAMEID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type AssignOpportunityAdminInput = {
  opportunityID: Scalars['UUID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type AssignOrganizationAdminInput = {
  organizationID: Scalars['UUID_NAMEID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type AssignOrganizationAssociateInput = {
  organizationID: Scalars['UUID_NAMEID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type AssignOrganizationOwnerInput = {
  organizationID: Scalars['UUID_NAMEID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type AssignUserGroupMemberInput = {
  groupID: Scalars['UUID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type AuthenticationConfig = {
  /** Alkemio Authentication Providers Config. */
  providers: Array<AuthenticationProviderConfig>;
};

export type AuthenticationProviderConfig = {
  /** Configuration of the authenticaiton provider */
  config: AuthenticationProviderConfigUnion;
  /** Is the authentication provider enabled? */
  enabled: Scalars['Boolean'];
  /** CDN location of an icon of the authentication provider login button. */
  icon: Scalars['String'];
  /** Label of the authentication provider. */
  label: Scalars['String'];
  /** Name of the authentication provider. */
  name: Scalars['String'];
};

export type AuthenticationProviderConfigUnion = OryConfig;

export type Authorization = {
  anonymousReadAccess: Scalars['Boolean'];
  /** The set of credential rules that are contained by this Authorization Policy. */
  credentialRules?: Maybe<Array<AuthorizationPolicyRuleCredential>>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** The privileges granted to the current user based on this Authorization Policy. */
  myPrivileges?: Maybe<Array<AuthorizationPrivilege>>;
  /** The set of privilege rules that are contained by this Authorization Policy. */
  privilegeRules?: Maybe<Array<AuthorizationPolicyRulePrivilege>>;
  /** The set of verified credential rules that are contained by this Authorization Policy. */
  verifiedCredentialRules?: Maybe<
    Array<AuthorizationPolicyRuleVerifiedCredential>
  >;
};

export enum AuthorizationCredential {
  ChallengeAdmin = 'CHALLENGE_ADMIN',
  ChallengeLead = 'CHALLENGE_LEAD',
  ChallengeMember = 'CHALLENGE_MEMBER',
  GlobalAdmin = 'GLOBAL_ADMIN',
  GlobalAdminCommunity = 'GLOBAL_ADMIN_COMMUNITY',
  GlobalAdminHubs = 'GLOBAL_ADMIN_HUBS',
  GlobalRegistered = 'GLOBAL_REGISTERED',
  HubAdmin = 'HUB_ADMIN',
  HubHost = 'HUB_HOST',
  HubMember = 'HUB_MEMBER',
  InnovationPackProvider = 'INNOVATION_PACK_PROVIDER',
  OpportunityAdmin = 'OPPORTUNITY_ADMIN',
  OpportunityLead = 'OPPORTUNITY_LEAD',
  OpportunityMember = 'OPPORTUNITY_MEMBER',
  OrganizationAdmin = 'ORGANIZATION_ADMIN',
  OrganizationAssociate = 'ORGANIZATION_ASSOCIATE',
  OrganizationOwner = 'ORGANIZATION_OWNER',
  UserGroupMember = 'USER_GROUP_MEMBER',
  UserSelfManagement = 'USER_SELF_MANAGEMENT',
}

export type AuthorizationPolicyRuleCredential = {
  criterias: Array<CredentialDefinition>;
  grantedPrivileges: Array<AuthorizationPrivilege>;
  inheritable: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
};

export type AuthorizationPolicyRulePrivilege = {
  grantedPrivileges: Array<AuthorizationPrivilege>;
  name?: Maybe<Scalars['String']>;
  sourcePrivilege: AuthorizationPrivilege;
};

export type AuthorizationPolicyRuleVerifiedCredential = {
  claimRule: Scalars['String'];
  credentialName: Scalars['String'];
  grantedPrivileges: Array<AuthorizationPrivilege>;
};

export enum AuthorizationPrivilege {
  Admin = 'ADMIN',
  AuthorizationReset = 'AUTHORIZATION_RESET',
  CommunityApply = 'COMMUNITY_APPLY',
  CommunityContextReview = 'COMMUNITY_CONTEXT_REVIEW',
  CommunityJoin = 'COMMUNITY_JOIN',
  Contribute = 'CONTRIBUTE',
  Create = 'CREATE',
  CreateAspect = 'CREATE_ASPECT',
  CreateCallout = 'CREATE_CALLOUT',
  CreateCanvas = 'CREATE_CANVAS',
  CreateChallenge = 'CREATE_CHALLENGE',
  CreateComment = 'CREATE_COMMENT',
  CreateDiscussion = 'CREATE_DISCUSSION',
  CreateHub = 'CREATE_HUB',
  CreateOpportunity = 'CREATE_OPPORTUNITY',
  CreateOrganization = 'CREATE_ORGANIZATION',
  CreateRelation = 'CREATE_RELATION',
  Delete = 'DELETE',
  FileDelete = 'FILE_DELETE',
  FileUpload = 'FILE_UPLOAD',
  Grant = 'GRANT',
  GrantGlobalAdmins = 'GRANT_GLOBAL_ADMINS',
  MoveCard = 'MOVE_CARD',
  PlatformAdmin = 'PLATFORM_ADMIN',
  Read = 'READ',
  ReadUsers = 'READ_USERS',
  Update = 'UPDATE',
  UpdateCalloutPublisher = 'UPDATE_CALLOUT_PUBLISHER',
  UpdateCanvas = 'UPDATE_CANVAS',
  UpdateInnovationFlow = 'UPDATE_INNOVATION_FLOW',
}

export type Calendar = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** A single CalendarEvent */
  event?: Maybe<CalendarEvent>;
  /** The list of CalendarEvents for this Calendar. */
  events?: Maybe<Array<CalendarEvent>>;
  /** The ID of the entity */
  id: Scalars['UUID'];
};

export type CalendarEventArgs = {
  ID: Scalars['UUID_NAMEID'];
};

export type CalendarEventsArgs = {
  IDs?: InputMaybe<Array<Scalars['UUID_NAMEID']>>;
  limit?: InputMaybe<Scalars['Float']>;
};

export type CalendarEvent = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The comments for this CalendarEvent. */
  comments?: Maybe<Comments>;
  /** The user that created this CalendarEvent */
  createdBy?: Maybe<User>;
  createdDate: Scalars['DateTime'];
  /** The length of the event in days. */
  durationDays?: Maybe<Scalars['Float']>;
  /** The length of the event in minutes. */
  durationMinutes: Scalars['Float'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** Flag to indicate if this event is for multiple days. */
  multipleDays: Scalars['Boolean'];
  /** A name identifier of the entity, unique within a given scope. */
  nameID: Scalars['NameID'];
  /** The Profile for this Card. */
  profile: Profile;
  /** The start time for this CalendarEvent. */
  startDate?: Maybe<Scalars['DateTime']>;
  /** The event type, e.g. webinar, meetup etc. */
  type: CalendarEventType;
  /** Flag to indicate if this event is for a whole day. */
  wholeDay: Scalars['Boolean'];
};

export type CalendarEventCommentsMessageReceived = {
  /** The identifier for the CalendarEvent. */
  calendarEventID: Scalars['String'];
  /** The message that has been sent. */
  message: Message;
};

export enum CalendarEventType {
  Event = 'EVENT',
  Milestone = 'MILESTONE',
  Other = 'OTHER',
  Training = 'TRAINING',
}

export type Callout = {
  /** The activity for this Callout. */
  activity: Scalars['Float'];
  /** The Aspects associated with this Callout. */
  aspects?: Maybe<Array<Aspect>>;
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The Canvas template associated with this Callout. */
  canvasTemplate?: Maybe<CanvasTemplate>;
  /** The Canvases associated with this Callout. */
  canvases?: Maybe<Array<Canvas>>;
  /** The Aspect template associated with this Callout. */
  cardTemplate?: Maybe<AspectTemplate>;
  /** The Comments object for this Callout. */
  comments?: Maybe<Comments>;
  /** The user that created this Callout */
  createdBy?: Maybe<User>;
  /** The description of this Callout */
  description: Scalars['Markdown'];
  /** The display name. */
  displayName: Scalars['String'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** A name identifier of the entity, unique within a given scope. */
  nameID: Scalars['NameID'];
  /** The user that published this Callout */
  publishedBy?: Maybe<User>;
  /** The timestamp for the publishing of this Callout. */
  publishedDate?: Maybe<Scalars['Float']>;
  /** The sorting order for this Callout. */
  sortOrder: Scalars['Float'];
  /** State of the Callout. */
  state: CalloutState;
  /** The Callout type, e.g. Card, Canvas, Discussion */
  type: CalloutType;
  /** Visibility of the Callout. */
  visibility: CalloutVisibility;
};

export type CalloutAspectsArgs = {
  IDs?: InputMaybe<Array<Scalars['UUID_NAMEID']>>;
  limit?: InputMaybe<Scalars['Float']>;
  shuffle?: InputMaybe<Scalars['Boolean']>;
};

export type CalloutCanvasesArgs = {
  IDs?: InputMaybe<Array<Scalars['UUID_NAMEID']>>;
  limit?: InputMaybe<Scalars['Float']>;
  shuffle?: InputMaybe<Scalars['Boolean']>;
};

export type CalloutAspectCreated = {
  /** The aspect that has been created. */
  aspect: Aspect;
  /** The identifier for the Callout on which the aspect was created. */
  calloutID: Scalars['String'];
};

export type CalloutMessageReceived = {
  /** The identifier for the Callout. */
  calloutID: Scalars['String'];
  /** The identifier for the Comments. */
  commentsID: Scalars['String'];
  /** The message that has been sent. */
  message: Message;
};

export enum CalloutState {
  Archived = 'ARCHIVED',
  Closed = 'CLOSED',
  Open = 'OPEN',
}

export enum CalloutType {
  Canvas = 'CANVAS',
  Card = 'CARD',
  Comments = 'COMMENTS',
}

export enum CalloutVisibility {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
}

export type Canvas = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The checkout out state of this Canvas. */
  checkout?: Maybe<CanvasCheckout>;
  /** The user that created this Canvas */
  createdBy?: Maybe<User>;
  createdDate: Scalars['DateTime'];
  /** The display name. */
  displayName: Scalars['String'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** A name identifier of the entity, unique within a given scope. */
  nameID: Scalars['NameID'];
  /** The preview image for this Canvas. */
  preview?: Maybe<Visual>;
  /** The JSON representation of the Canvas. */
  value: Scalars['JSON'];
};

export type CanvasCheckout = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  lifecycle: Lifecycle;
  /** The id of the user that has checked the entity out. */
  lockedBy: Scalars['UUID'];
  /** The checkout out state of this Canvas. */
  status: CanvasCheckoutStateEnum;
};

export type CanvasCheckoutEventInput = {
  canvasCheckoutID: Scalars['UUID'];
  /** Report an error if this event fails to trigger a transition. */
  errorOnFailedTransition?: InputMaybe<Scalars['Boolean']>;
  eventName: Scalars['String'];
};

export enum CanvasCheckoutStateEnum {
  Available = 'AVAILABLE',
  CheckedOut = 'CHECKED_OUT',
}

export type CanvasContentUpdated = {
  /** The identifier for the Canvas. */
  canvasID: Scalars['String'];
  /** The updated content. */
  value: Scalars['String'];
};

export type CanvasTemplate = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** The meta information for this Template */
  info: TemplateInfo;
  /** The JSON representation of the Canvas. */
  value: Scalars['JSON'];
};

export type Challenge = {
  /** The Agent representing this Challenge. */
  agent?: Maybe<Agent>;
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The set of child Challenges within this challenge. */
  challenges?: Maybe<Array<Challenge>>;
  /** Collaboration object for the base challenge */
  collaboration?: Maybe<Collaboration>;
  /** The community for the challenge. */
  community?: Maybe<Community>;
  /** The context for the challenge. */
  context?: Maybe<Context>;
  /** The display name. */
  displayName: Scalars['String'];
  /** The ID of the containing Hub. */
  hubID: Scalars['String'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** The lifecycle for the Challenge. */
  lifecycle?: Maybe<Lifecycle>;
  /** Metrics about activity within this Challenge. */
  metrics?: Maybe<Array<Nvp>>;
  /** A name identifier of the entity, unique within a given scope. */
  nameID: Scalars['NameID'];
  /** The Opportunities for the challenge. */
  opportunities?: Maybe<Array<Opportunity>>;
  /** The preferences for this Challenge */
  preferences: Array<Preference>;
  /** The set of tags for the challenge */
  tagset?: Maybe<Tagset>;
};

export type ChallengeOpportunitiesArgs = {
  IDs?: InputMaybe<Array<Scalars['UUID']>>;
  limit?: InputMaybe<Scalars['Float']>;
  shuffle?: InputMaybe<Scalars['Boolean']>;
};

export type ChallengeCreated = {
  /** The Challenge that has been created. */
  challenge: Challenge;
  /** The identifier for the Hub on which the Challenge was created. */
  hubID: Scalars['UUID_NAMEID'];
};

export type ChallengeEventInput = {
  ID: Scalars['UUID'];
  eventName: Scalars['String'];
};

export enum ChallengePreferenceType {
  AllowContributorsToCreateCallouts = 'ALLOW_CONTRIBUTORS_TO_CREATE_CALLOUTS',
  AllowContributorsToCreateOpportunities = 'ALLOW_CONTRIBUTORS_TO_CREATE_OPPORTUNITIES',
  AllowHubMembersToContribute = 'ALLOW_HUB_MEMBERS_TO_CONTRIBUTE',
  AllowNonMembersReadAccess = 'ALLOW_NON_MEMBERS_READ_ACCESS',
  MembershipApplyChallengeFromHubMembers = 'MEMBERSHIP_APPLY_CHALLENGE_FROM_HUB_MEMBERS',
  MembershipFeedbackOnChallengeContext = 'MEMBERSHIP_FEEDBACK_ON_CHALLENGE_CONTEXT',
  MembershipJoinChallengeFromHubMembers = 'MEMBERSHIP_JOIN_CHALLENGE_FROM_HUB_MEMBERS',
}

export type ChallengeTemplate = {
  /** Feedback templates. */
  feedback?: Maybe<Array<FeedbackTemplate>>;
  /** Challenge template name. */
  name: Scalars['String'];
};

export type Collaboration = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** List of callouts */
  callouts?: Maybe<Array<Callout>>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** List of relations */
  relations?: Maybe<Array<Relation>>;
};

export type CollaborationCalloutsArgs = {
  IDs?: InputMaybe<Array<Scalars['UUID_NAMEID']>>;
  limit?: InputMaybe<Scalars['Float']>;
  shuffle?: InputMaybe<Scalars['Boolean']>;
  sortByActivity?: InputMaybe<Scalars['Boolean']>;
};

export type Comments = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The number of comments. */
  commentsCount: Scalars['Float'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** Messages in this Comments. */
  messages?: Maybe<Array<Message>>;
};

export type CommentsRemoveMessageInput = {
  /** The Comments the message is being removed from. */
  commentsID: Scalars['UUID'];
  /** The message id that should be removed */
  messageID: Scalars['MessageID'];
};

export type CommentsSendMessageInput = {
  /** The Comments the message is being sent to */
  commentsID: Scalars['UUID'];
  /** The message being sent */
  message: Scalars['String'];
};

export type Communication = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** A particular Discussions active in this Communication. */
  discussion?: Maybe<Discussion>;
  discussionCategories: Array<DiscussionCategory>;
  /** The Discussions active in this Communication. */
  discussions?: Maybe<Array<Discussion>>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** Updates for this Communication. */
  updates?: Maybe<Updates>;
};

export type CommunicationDiscussionArgs = {
  ID: Scalars['String'];
};

export type CommunicationAdminEnsureAccessInput = {
  communityID: Scalars['UUID'];
};

export type CommunicationAdminMembershipInput = {
  communityID: Scalars['UUID'];
};

export type CommunicationAdminMembershipResult = {
  /** Display name of the result */
  displayName: Scalars['String'];
  /** A unique identifier for this comunication room membership result. */
  id: Scalars['String'];
  /** Rooms in this Communication */
  rooms: Array<CommunicationAdminRoomMembershipResult>;
};

export type CommunicationAdminOrphanedUsageResult = {
  /** Rooms in the Communication platform that are not used */
  rooms: Array<CommunicationAdminRoomResult>;
};

export type CommunicationAdminRemoveOrphanedRoomInput = {
  roomID: Scalars['String'];
};

export type CommunicationAdminRoomMembershipResult = {
  /** Display name of the entity */
  displayName: Scalars['String'];
  /** Members of the room that are not members of the Community. */
  extraMembers: Array<Scalars['String']>;
  /** A unique identifier for this membership result. */
  id: Scalars['String'];
  /** The access mode for the room. */
  joinRule: Scalars['String'];
  /** Name of the room */
  members: Array<Scalars['String']>;
  /** Members of the community that are missing from the room */
  missingMembers: Array<Scalars['String']>;
  /** The matrix room ID */
  roomID: Scalars['String'];
};

export type CommunicationAdminRoomResult = {
  /** Display name of the result */
  displayName: Scalars['String'];
  /** The identifier for the orphaned room. */
  id: Scalars['String'];
  /** The members of the orphaned room */
  members: Array<Scalars['String']>;
};

export type CommunicationAdminUpdateRoomsJoinRuleInput = {
  isPublic: Scalars['Boolean'];
};

export type CommunicationCreateDiscussionInput = {
  /** The category for the Discussion */
  category: DiscussionCategory;
  /** The identifier for the Communication entity the Discussion is being created on. */
  communicationID: Scalars['UUID'];
  /** The description for the Discussion */
  description?: InputMaybe<Scalars['String']>;
  /** The title for the Discussion */
  title: Scalars['String'];
};

export type CommunicationDiscussionMessageReceived = {
  /** The identifier for the Discussion on which the message was sent. */
  discussionID: Scalars['String'];
  /** The message that has been sent. */
  message: Message;
};

export type CommunicationRoom = {
  /** The display name of the room */
  displayName: Scalars['String'];
  /** The identifier of the room */
  id: Scalars['String'];
  /** The messages that have been sent to the Room. */
  messages: Array<Message>;
};

export type CommunicationSendMessageToCommunityLeadsInput = {
  /** The Community the message is being sent to */
  communityId: Scalars['UUID'];
  /** The message being sent */
  message: Scalars['String'];
};

export type CommunicationSendMessageToOrganizationInput = {
  /** The message being sent */
  message: Scalars['String'];
  /** The Organization the message is being sent to */
  organizationId: Scalars['UUID'];
};

export type CommunicationSendMessageToUserInput = {
  /** The message being sent */
  message: Scalars['String'];
  /** All Users the message is being sent to */
  receiverIds: Array<Scalars['UUID']>;
};

export type CommunicationUpdateMessageReceived = {
  /** The message that has been sent. */
  message: Message;
  /** The identifier for the Updates on which the message was sent. */
  updatesID: Scalars['String'];
};

export type Community = Groupable & {
  /** The Form used for Applications to this community. */
  applicationForm?: Maybe<Form>;
  /** Application available for this community. */
  applications?: Maybe<Array<Application>>;
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** All member users excluding the current lead users in this Community. */
  availableLeadUsers?: Maybe<PaginatedUsers>;
  /** All available users that are potential Community members. */
  availableMemberUsers?: Maybe<PaginatedUsers>;
  /** The Communications for this Community. */
  communication?: Maybe<Communication>;
  /** The name of the Community */
  displayName: Scalars['String'];
  /** Groups of users related to a Community. */
  groups?: Maybe<Array<UserGroup>>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** All Organizations that are leads in this Community. */
  leadOrganizations?: Maybe<Array<Organization>>;
  /** All users that are leads in this Community. */
  leadUsers?: Maybe<Array<User>>;
  /** All Organizations that are contributing to this Community. */
  memberOrganizations?: Maybe<Array<Organization>>;
  /** All users that are contributing to this Community. */
  memberUsers?: Maybe<Array<User>>;
  /** The policy that defines the roles for this Community. */
  policy?: Maybe<CommunityPolicy>;
};

export type CommunityAvailableLeadUsersArgs = {
  after?: InputMaybe<Scalars['UUID']>;
  before?: InputMaybe<Scalars['UUID']>;
  filter?: InputMaybe<UserFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CommunityAvailableMemberUsersArgs = {
  after?: InputMaybe<Scalars['UUID']>;
  before?: InputMaybe<Scalars['UUID']>;
  filter?: InputMaybe<UserFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CommunityMemberUsersArgs = {
  limit?: InputMaybe<Scalars['Float']>;
};

export type CommunityApplyInput = {
  communityID: Scalars['UUID'];
  questions: Array<CreateNvpInput>;
};

export type CommunityJoinInput = {
  communityID: Scalars['UUID'];
};

export type CommunityPolicy = {
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** The role policy that defines the leads for this Community. */
  lead: CommunityRolePolicy;
  /** The role policy that defines the members for this Community. */
  member: CommunityRolePolicy;
};

export type CommunityRolePolicy = {
  /** The CredentialDefinition that is associated with this role */
  credential: CredentialDefinition;
  /** Maximum number of Organizations in this role */
  maxOrg: Scalars['Float'];
  /** Maximum number of Users in this role */
  maxUser: Scalars['Float'];
  /** Minimun number of Organizations in this role */
  minOrg: Scalars['Float'];
  /** Minimum number of Users in this role */
  minUser: Scalars['Float'];
  /** The CredentialDefinitions associated with this role in parent communities */
  parentCredentials: Array<CredentialDefinition>;
};

export type Config = {
  /** Elastic APM (RUM & performance monitoring) related configuration. */
  apm: Apm;
  /** Authentication configuration. */
  authentication: AuthenticationConfig;
  /** Integration with a 3rd party Geo information service */
  geo: Geo;
  /** Platform related resources. */
  platform: PlatformLocations;
  /** Sentry (client monitoring) related configuration. */
  sentry: Sentry;
  /** Configuration for storage providers, e.g. file */
  storage: StorageConfig;
  /** Alkemio template configuration. */
  template: Template;
};

export type Context = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** A detailed description of the current situation */
  background?: Maybe<Scalars['Markdown']>;
  /** The EcosystemModel for this Context. */
  ecosystemModel?: Maybe<EcosystemModel>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** What is the potential impact? */
  impact?: Maybe<Scalars['Markdown']>;
  /** Location of this entity */
  location?: Maybe<Location>;
  /** The Recommendations for this Context. */
  recommendations?: Maybe<Array<Reference>>;
  /** The References for this Context. */
  references?: Maybe<Array<Reference>>;
  /** A one line description */
  tagline?: Maybe<Scalars['String']>;
  /** The goal that is being pursued */
  vision?: Maybe<Scalars['Markdown']>;
  /** The Visual assets for this Context. */
  visuals?: Maybe<Array<Visual>>;
  /** Who should get involved in this challenge */
  who?: Maybe<Scalars['Markdown']>;
};

export type ContributorFilterInput = {
  /** Return contributors with credentials in the provided list */
  credentials?: InputMaybe<Array<AuthorizationCredential>>;
};

export type ContributorRoles = {
  /** Open applications for this contributor. */
  applications?: Maybe<Array<ApplicationForRoleResult>>;
  /** Details of Hubs the User or Organization is a member of, with child memberships */
  hubs: Array<RolesResultHub>;
  id: Scalars['UUID'];
  /** Details of the Organizations the User is a member of, with child memberships. */
  organizations: Array<RolesResultOrganization>;
};

export type ConvertChallengeToHubInput = {
  /** The Challenge to be promoted to be a new Hub. Note: the original Challenge will no longer exist after the conversion.  */
  challengeID: Scalars['UUID_NAMEID'];
};

export type ConvertOpportunityToChallengeInput = {
  /** The Opportunity to be promoted to be a new Challenge. Note: the original Opportunity will no longer exist after the conversion.  */
  opportunityID: Scalars['UUID_NAMEID'];
};

export type CreateActorGroupInput = {
  description?: InputMaybe<Scalars['String']>;
  ecosystemModelID: Scalars['UUID'];
  name: Scalars['String'];
};

export type CreateActorInput = {
  actorGroupID: Scalars['UUID'];
  description?: InputMaybe<Scalars['String']>;
  impact?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type CreateAspectOnCalloutInput = {
  calloutID: Scalars['UUID'];
  /** A readable identifier, unique within the containing scope. */
  nameID?: InputMaybe<Scalars['NameID']>;
  profileData: CreateProfileInput;
  tags?: InputMaybe<Array<Scalars['String']>>;
  type: Scalars['String'];
  visualUri?: InputMaybe<Scalars['String']>;
};

export type CreateAspectTemplateInput = {
  /** The default description to be pre-filled when users create Aspects based on this template. */
  defaultDescription: Scalars['Markdown'];
  /** The meta information for this Template. */
  info: CreateTemplateInfoInput;
  /** The type of Aspects created from this Template. */
  type: Scalars['String'];
};

export type CreateAspectTemplateOnTemplatesSetInput = {
  /** The default description to be pre-filled when users create Aspects based on this template. */
  defaultDescription: Scalars['Markdown'];
  /** The meta information for this Template. */
  info: CreateTemplateInfoInput;
  templatesSetID: Scalars['UUID'];
  /** The type of Aspects created from this Template. */
  type: Scalars['String'];
};

export type CreateCalendarEventOnCalendarInput = {
  calendarID: Scalars['UUID'];
  /** The length of the event in days. */
  durationDays?: InputMaybe<Scalars['Float']>;
  /** The length of the event in minutes. */
  durationMinutes: Scalars['Float'];
  /** Flag to indicate if this event is for multiple days. */
  multipleDays: Scalars['Boolean'];
  /** A readable identifier, unique within the containing scope. */
  nameID?: InputMaybe<Scalars['NameID']>;
  profileData?: InputMaybe<CreateProfileInput>;
  /** The start date for the event. */
  startDate: Scalars['DateTime'];
  tags?: InputMaybe<Array<Scalars['String']>>;
  type: CalendarEventType;
  /** Flag to indicate if this event is for a whole day. */
  wholeDay: Scalars['Boolean'];
};

export type CreateCalloutOnCollaborationInput = {
  /** CanvasTemplate data for Canvas Callouts. */
  canvasTemplate?: InputMaybe<CreateCanvasTemplateInput>;
  /** CardTemplate data for Card Callouts. */
  cardTemplate?: InputMaybe<CreateAspectTemplateInput>;
  collaborationID: Scalars['UUID'];
  /** Callout description. */
  description: Scalars['Markdown'];
  /** The display name for the entity. */
  displayName: Scalars['String'];
  /** The sort order to assign to this Callout. */
  sortOrder?: InputMaybe<Scalars['Float']>;
  /** State of the callout. */
  state?: InputMaybe<CalloutState>;
  /** Callout type. */
  type: CalloutType;
};

export type CreateCanvasOnCalloutInput = {
  calloutID: Scalars['UUID'];
  /** The display name for the entity. */
  displayName: Scalars['String'];
  /** A readable identifier, unique within the containing scope. If not provided it will be generated based on the displayName. */
  nameID?: InputMaybe<Scalars['NameID']>;
  value?: InputMaybe<Scalars['String']>;
};

export type CreateCanvasTemplateInput = {
  /** Use the specified Canvas as the initial value for this CanvasTemplate */
  canvasID?: InputMaybe<Scalars['UUID']>;
  /** The meta information for this Template. */
  info: CreateTemplateInfoInput;
  value?: InputMaybe<Scalars['JSON']>;
};

export type CreateCanvasTemplateOnTemplatesSetInput = {
  /** Use the specified Canvas as the initial value for this CanvasTemplate */
  canvasID?: InputMaybe<Scalars['UUID']>;
  /** The meta information for this Template. */
  info: CreateTemplateInfoInput;
  templatesSetID: Scalars['UUID'];
  value?: InputMaybe<Scalars['JSON']>;
};

export type CreateChallengeOnChallengeInput = {
  challengeID: Scalars['UUID'];
  context?: InputMaybe<CreateContextInput>;
  /** The display name for the entity. */
  displayName: Scalars['String'];
  /** The Innovation Flow template to use for the Challenge. */
  innovationFlowTemplateID?: InputMaybe<Scalars['UUID']>;
  /** Set lead Organizations for the Challenge. */
  leadOrganizations?: InputMaybe<Array<Scalars['UUID_NAMEID']>>;
  /** A readable identifier, unique within the containing scope. */
  nameID?: InputMaybe<Scalars['NameID']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateChallengeOnHubInput = {
  context?: InputMaybe<CreateContextInput>;
  /** The display name for the entity. */
  displayName: Scalars['String'];
  hubID: Scalars['UUID_NAMEID'];
  /** The Innovation Flow template to use for the Challenge. */
  innovationFlowTemplateID?: InputMaybe<Scalars['UUID']>;
  /** Set lead Organizations for the Challenge. */
  leadOrganizations?: InputMaybe<Array<Scalars['UUID_NAMEID']>>;
  /** A readable identifier, unique within the containing scope. */
  nameID?: InputMaybe<Scalars['NameID']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateContextInput = {
  background?: InputMaybe<Scalars['Markdown']>;
  impact?: InputMaybe<Scalars['Markdown']>;
  location?: InputMaybe<CreateLocationInput>;
  /** Set of References for the new Context. */
  references?: InputMaybe<Array<CreateReferenceInput>>;
  tagline?: InputMaybe<Scalars['String']>;
  vision?: InputMaybe<Scalars['Markdown']>;
  who?: InputMaybe<Scalars['Markdown']>;
};

export type CreateFeedbackOnCommunityContextInput = {
  communityID: Scalars['UUID'];
  questions: Array<CreateNvpInput>;
};

export type CreateHubInput = {
  context?: InputMaybe<CreateContextInput>;
  /** The display name for the entity. */
  displayName: Scalars['String'];
  /** The host Organization for the hub */
  hostID: Scalars['UUID_NAMEID'];
  /** A readable identifier, unique within the containing scope. */
  nameID: Scalars['NameID'];
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateInnovationPackOnLibraryInput = {
  /** The display name for the entity. */
  displayName: Scalars['String'];
  /** A readable identifier, unique within the containing scope. */
  nameID: Scalars['NameID'];
  /** The provider Organization for the InnovationPack */
  providerID: Scalars['UUID_NAMEID'];
};

export type CreateLifecycleTemplateOnTemplatesSetInput = {
  /** The XState definition for this LifecycleTemplate. */
  definition: Scalars['LifecycleDefinition'];
  /** The meta information for this Template. */
  info: CreateTemplateInfoInput;
  templatesSetID: Scalars['UUID'];
  /** The type of the Lifecycles that this Template supports. */
  type: LifecycleType;
};

export type CreateLocationInput = {
  addressLine1?: InputMaybe<Scalars['String']>;
  addressLine2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  stateOrProvince?: InputMaybe<Scalars['String']>;
};

export type CreateNvpInput = {
  name: Scalars['String'];
  sortOrder: Scalars['Float'];
  value: Scalars['String'];
};

export type CreateOpportunityInput = {
  challengeID: Scalars['UUID'];
  context?: InputMaybe<CreateContextInput>;
  /** The display name for the entity. */
  displayName: Scalars['String'];
  /** The Innovation Flow template to use for the Opportunity. */
  innovationFlowTemplateID?: InputMaybe<Scalars['UUID']>;
  /** A readable identifier, unique within the containing scope. */
  nameID?: InputMaybe<Scalars['NameID']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateOrganizationInput = {
  contactEmail?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  legalEntityName?: InputMaybe<Scalars['String']>;
  /** A readable identifier, unique within the containing scope. */
  nameID: Scalars['NameID'];
  profileData: CreateProfileInput;
  website?: InputMaybe<Scalars['String']>;
};

export type CreateProfileInput = {
  /** The URL of the avatar of the user */
  avatarURL?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['Markdown']>;
  /** The display name for the entity. */
  displayName: Scalars['String'];
  location?: InputMaybe<CreateLocationInput>;
  referencesData?: InputMaybe<Array<CreateReferenceInput>>;
  /** A memorable short description for this entity. */
  tagline?: InputMaybe<Scalars['String']>;
};

export type CreateProjectInput = {
  description?: InputMaybe<Scalars['String']>;
  /** The display name for the entity. */
  displayName: Scalars['String'];
  /** A readable identifier, unique within the containing scope. */
  nameID: Scalars['NameID'];
  opportunityID: Scalars['UUID_NAMEID'];
};

export type CreateReferenceInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  uri?: InputMaybe<Scalars['String']>;
};

export type CreateReferenceOnContextInput = {
  contextID: Scalars['UUID'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  uri?: InputMaybe<Scalars['String']>;
};

export type CreateReferenceOnProfileInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  profileID: Scalars['UUID'];
  uri?: InputMaybe<Scalars['String']>;
};

export type CreateRelationOnCollaborationInput = {
  actorName: Scalars['String'];
  actorRole?: InputMaybe<Scalars['String']>;
  actorType?: InputMaybe<Scalars['String']>;
  collaborationID: Scalars['UUID'];
  description?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type CreateTagsetOnProfileInput = {
  name: Scalars['String'];
  profileID?: InputMaybe<Scalars['UUID']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateTemplateInfoInput = {
  description: Scalars['Markdown'];
  tags?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  visualUri?: InputMaybe<Scalars['String']>;
};

export type CreateUserGroupInput = {
  /** The name of the UserGroup. Minimum length 2. */
  name: Scalars['String'];
  parentID: Scalars['UUID'];
  profileData?: InputMaybe<CreateProfileInput>;
};

export type CreateUserInput = {
  accountUpn?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  /** A readable identifier, unique within the containing scope. */
  nameID: Scalars['NameID'];
  phone?: InputMaybe<Scalars['String']>;
  profileData: CreateProfileInput;
};

export type Credential = {
  /** The ID of the entity */
  id: Scalars['UUID'];
  resourceID: Scalars['String'];
  type: AuthorizationCredential;
};

export type CredentialDefinition = {
  /** The resourceID for this CredentialDefinition */
  resourceID: Scalars['String'];
  /** The type for this CredentialDefinition */
  type: Scalars['String'];
};

export type CredentialMetadataOutput = {
  /** A json description of what the claim contains and schema validation definition */
  context: Scalars['String'];
  /** The purpose of the credential */
  description: Scalars['String'];
  /** The display name of the credential */
  name: Scalars['String'];
  /** The schema that the credential will be validated against */
  schema: Scalars['String'];
  /** The credential types that are associated with this credential */
  types: Array<Scalars['String']>;
  /** System recognized unique type for the credential */
  uniqueType: Scalars['String'];
};

export type DeleteActorGroupInput = {
  ID: Scalars['UUID'];
};

export type DeleteActorInput = {
  ID: Scalars['UUID'];
};

export type DeleteApplicationInput = {
  ID: Scalars['UUID'];
};

export type DeleteAspectInput = {
  ID: Scalars['UUID'];
};

export type DeleteAspectTemplateInput = {
  ID: Scalars['UUID'];
};

export type DeleteCalendarEventInput = {
  ID: Scalars['UUID'];
};

export type DeleteCalloutInput = {
  ID: Scalars['UUID'];
};

export type DeleteCanvasInput = {
  ID: Scalars['UUID'];
};

export type DeleteCanvasTemplateInput = {
  ID: Scalars['UUID'];
};

export type DeleteChallengeInput = {
  ID: Scalars['UUID'];
};

export type DeleteCollaborationInput = {
  ID: Scalars['UUID'];
};

export type DeleteDiscussionInput = {
  ID: Scalars['UUID'];
};

export type DeleteFileInput = {
  /** IPFS Content Identifier (CID) of the file, e.g. Qmde6CnXDGGe7Dynz1pnxgNARtdVBme9YBwNbo4HJiRy2W */
  CID: Scalars['CID'];
};

export type DeleteHubInput = {
  ID: Scalars['UUID_NAMEID'];
};

export type DeleteInnovationPackInput = {
  ID: Scalars['UUID_NAMEID'];
};

export type DeleteLifecycleTemplateInput = {
  ID: Scalars['UUID'];
};

export type DeleteOpportunityInput = {
  ID: Scalars['UUID'];
};

export type DeleteOrganizationInput = {
  ID: Scalars['UUID_NAMEID'];
};

export type DeleteProjectInput = {
  ID: Scalars['UUID'];
};

export type DeleteReferenceInput = {
  ID: Scalars['UUID'];
};

export type DeleteRelationInput = {
  ID: Scalars['String'];
};

export type DeleteUserGroupInput = {
  ID: Scalars['UUID'];
};

export type DeleteUserInput = {
  ID: Scalars['UUID_NAMEID_EMAIL'];
};

export type DirectRoom = {
  /** The display name of the room */
  displayName: Scalars['String'];
  /** The identifier of the direct room */
  id: Scalars['String'];
  /** The messages that have been sent to the Direct Room. */
  messages: Array<Message>;
  /** The recepient userID */
  receiverID?: Maybe<Scalars['String']>;
};

export type Discussion = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The category assigned to this Discussion. */
  category: DiscussionCategory;
  /** The number of comments. */
  commentsCount: Scalars['Float'];
  /** The id of the user that created this discussion */
  createdBy?: Maybe<Scalars['UUID']>;
  /** The description of this Discussion. */
  description: Scalars['String'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** Messages for this Discussion. */
  messages?: Maybe<Array<Message>>;
  /** The timestamp for the creation of this Discussion. */
  timestamp?: Maybe<Scalars['Float']>;
  /** The title of the Discussion. */
  title: Scalars['String'];
};

export enum DiscussionCategory {
  ChallengeCentric = 'CHALLENGE_CENTRIC',
  CommunityBuilding = 'COMMUNITY_BUILDING',
  General = 'GENERAL',
  Help = 'HELP',
  Ideas = 'IDEAS',
  Other = 'OTHER',
  PlatformFunctionalities = 'PLATFORM_FUNCTIONALITIES',
  Questions = 'QUESTIONS',
  Sharing = 'SHARING',
}

export type DiscussionRemoveMessageInput = {
  /** The Discussion to remove a message from. */
  discussionID: Scalars['UUID'];
  /** The message id that should be removed */
  messageID: Scalars['MessageID'];
};

export type DiscussionSendMessageInput = {
  /** The Discussion the message is being sent to */
  discussionID: Scalars['UUID'];
  /** The message being sent */
  message: Scalars['String'];
};

export type EcosystemModel = {
  /** A list of ActorGroups */
  actorGroups?: Maybe<Array<ActorGroup>>;
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** Overview of this ecosystem model. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id: Scalars['UUID'];
};

export type FeatureFlag = {
  /** Whether the feature flag is enabled / disabled. */
  enabled: Scalars['Boolean'];
  /** The name of the feature flag */
  name: Scalars['String'];
};

export type FeedbackTemplate = {
  /** Feedback template name. */
  name: Scalars['String'];
  /** Template questions. */
  questions: Array<QuestionTemplate>;
};

export type FileStorageConfig = {
  /** Max file size, in bytes. */
  maxFileSize: Scalars['Float'];
  /** Allowed mime types for file upload, separated by a coma. */
  mimeTypes: Array<Scalars['String']>;
};

export type Form = {
  /** A description of the purpose of this Form. */
  description?: Maybe<Scalars['Markdown']>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** The set of Questions in this Form. */
  questions: Array<FormQuestion>;
};

export type FormQuestion = {
  /** The explation text to clarify the question. */
  explanation: Scalars['String'];
  /** The maxiumum length of the answer, in characters, up to a limit of 512. */
  maxLength: Scalars['Float'];
  /** The question to be answered */
  question: Scalars['String'];
  /** Whether this Question requires an answer or not. */
  required: Scalars['Boolean'];
  /** The sort order of this question in a wider set of questions. */
  sortOrder: Scalars['Float'];
};

export type Geo = {
  /** Endpoint where geo information is consumed from. */
  endpoint: Scalars['String'];
};

export type GrantAuthorizationCredentialInput = {
  /** The resource to which this credential is tied. */
  resourceID?: InputMaybe<Scalars['UUID']>;
  type: AuthorizationCredential;
  /** The user to whom the credential is being granted. */
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type Groupable = {
  /** The groups contained by this entity. */
  groups?: Maybe<Array<UserGroup>>;
};

export type Hub = {
  /** The Agent representing this Hub. */
  agent?: Maybe<Agent>;
  /** A particular User Application within this Hub. */
  application: Application;
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** A particular Challenge, either by its ID or nameID */
  challenge: Challenge;
  /** The challenges for the hub. */
  challenges?: Maybe<Array<Challenge>>;
  /** Collaboration object for the base challenge */
  collaboration?: Maybe<Collaboration>;
  /** Get a Community within the Hub. Defaults to the Community for the Hub itself. */
  community?: Maybe<Community>;
  /** The context for the hub. */
  context?: Maybe<Context>;
  /** The display name. */
  displayName: Scalars['String'];
  /** The user group with the specified id anywhere in the hub */
  group: UserGroup;
  /** The User Groups on this Hub */
  groups: Array<UserGroup>;
  /** All groups on this Hub that have the provided tag */
  groupsWithTag: Array<UserGroup>;
  /** The Hub host. */
  host?: Maybe<Organization>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** Metrics about activity within this Hub. */
  metrics?: Maybe<Array<Nvp>>;
  /** A name identifier of the entity, unique within a given scope. */
  nameID: Scalars['NameID'];
  /** All opportunities within the hub */
  opportunities?: Maybe<Array<Opportunity>>;
  /** A particular Opportunity, either by its ID or nameID */
  opportunity: Opportunity;
  /** The preferences for this Hub */
  preferences?: Maybe<Array<Preference>>;
  /** A particular Project, identified by the ID */
  project: Project;
  /** All projects within this hub */
  projects: Array<Project>;
  /** The set of tags for the challenge */
  tagset?: Maybe<Tagset>;
  /** The templates in use by this Hub */
  templates?: Maybe<TemplatesSet>;
  /** The timeline with events in use by this Hub */
  timeline?: Maybe<Timeline>;
  /** Visibility of the Hub. */
  visibility: HubVisibility;
};

export type HubApplicationArgs = {
  ID: Scalars['UUID'];
};

export type HubChallengeArgs = {
  ID: Scalars['UUID_NAMEID'];
};

export type HubChallengesArgs = {
  IDs?: InputMaybe<Array<Scalars['UUID']>>;
  limit?: InputMaybe<Scalars['Float']>;
  shuffle?: InputMaybe<Scalars['Boolean']>;
};

export type HubCommunityArgs = {
  ID?: InputMaybe<Scalars['UUID']>;
};

export type HubGroupArgs = {
  ID: Scalars['UUID'];
};

export type HubGroupsWithTagArgs = {
  tag: Scalars['String'];
};

export type HubOpportunitiesArgs = {
  IDs?: InputMaybe<Array<Scalars['UUID']>>;
};

export type HubOpportunityArgs = {
  ID: Scalars['UUID_NAMEID'];
};

export type HubProjectArgs = {
  ID: Scalars['UUID_NAMEID'];
};

export type HubAspectTemplate = {
  /** A default description for this Aspect. */
  defaultDescription: Scalars['String'];
  /** The type of the Aspect */
  type: Scalars['String'];
  /** A description for this Aspect type. */
  typeDescription: Scalars['String'];
};

export type HubAuthorizationResetInput = {
  /** The identifier of the Hub whose Authorization Policy should be reset. */
  hubID: Scalars['UUID_NAMEID'];
};

export type HubFilterInput = {
  /** Return Hubs with a Visibility matching one of the provided types. */
  visibilities?: InputMaybe<Array<HubVisibility>>;
};

export enum HubPreferenceType {
  AllowMembersToCreateCallouts = 'ALLOW_MEMBERS_TO_CREATE_CALLOUTS',
  AllowMembersToCreateChallenges = 'ALLOW_MEMBERS_TO_CREATE_CHALLENGES',
  AuthorizationAnonymousReadAccess = 'AUTHORIZATION_ANONYMOUS_READ_ACCESS',
  MembershipApplicationsFromAnyone = 'MEMBERSHIP_APPLICATIONS_FROM_ANYONE',
  MembershipJoinHubFromAnyone = 'MEMBERSHIP_JOIN_HUB_FROM_ANYONE',
  MembershipJoinHubFromHostOrganizationMembers = 'MEMBERSHIP_JOIN_HUB_FROM_HOST_ORGANIZATION_MEMBERS',
}

export enum HubVisibility {
  Active = 'ACTIVE',
  Archived = 'ARCHIVED',
  Demo = 'DEMO',
}

export type ISearchResults = {
  /** The search results for contributions (Cards, Whiteboards etc). */
  contributionResults: Array<SearchResult>;
  /** The total number of search results for contributions (Cards, Whiteboards etc). */
  contributionResultsCount: Scalars['Float'];
  /** The search results for contributors (Users, Organizations). */
  contributorResults: Array<SearchResult>;
  /** The total number of search results for contributors (Users, Organizations). */
  contributorResultsCount: Scalars['Float'];
  /** The search results for Groups. */
  groupResults: Array<SearchResult>;
  /** The search results for Hubs / Challenges / Opportunities. */
  journeyResults: Array<SearchResult>;
  /** The total number of results for Hubs / Challenges / Opportunities. */
  journeyResultsCount: Scalars['Float'];
};

export type InnovatonPack = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The display name. */
  displayName: Scalars['String'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** A name identifier of the entity, unique within a given scope. */
  nameID: Scalars['NameID'];
  /** The InnovationPack provider. */
  provider?: Maybe<Organization>;
  /** The templates in use by this InnovationPack */
  templates?: Maybe<TemplatesSet>;
};

export type Library = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** A single Innovation Pack */
  innovationPack?: Maybe<InnovatonPack>;
  /** Platform level library. */
  innovationPacks: Array<InnovatonPack>;
};

export type LibraryInnovationPackArgs = {
  ID: Scalars['UUID'];
};

export type Lifecycle = {
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** The machine definition, describing the states, transitions etc for this Lifeycle. */
  machineDef: Scalars['LifecycleDefinition'];
  /** The next events of this Lifecycle. */
  nextEvents?: Maybe<Array<Scalars['String']>>;
  /** The current state of this Lifecycle. */
  state?: Maybe<Scalars['String']>;
  /** Is this lifecycle in a final state (done). */
  stateIsFinal: Scalars['Boolean'];
  /** The Lifecycle template name. */
  templateName?: Maybe<Scalars['String']>;
};

export type LifecycleTemplate = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The XState definition for this LifecycleTemplate. */
  definition: Scalars['LifecycleDefinition'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** The meta information for this Template */
  info: TemplateInfo;
  /** The type for this LifecycleTemplate. */
  type: LifecycleType;
};

export enum LifecycleType {
  Challenge = 'CHALLENGE',
  Opportunity = 'OPPORTUNITY',
}

export type Location = {
  addressLine1: Scalars['String'];
  addressLine2: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  postalCode: Scalars['String'];
  stateOrProvince: Scalars['String'];
};

/** A message that was sent either as an Update or as part of a Discussion. */
export type Message = {
  /** The id for the message event. */
  id: Scalars['MessageID'];
  /** The message being sent */
  message: Scalars['Markdown'];
  /** The user that created this Aspect */
  sender?: Maybe<User>;
  /** The server timestamp in UTC */
  timestamp: Scalars['Float'];
};

export type Metadata = {
  /** Metrics about the activity on the platform */
  metrics: Array<Nvp>;
  /** Collection of metadata about Alkemio services. */
  services: Array<ServiceMetadata>;
};

export type MoveAspectInput = {
  /** ID of the Aspect to move. */
  aspectID: Scalars['UUID'];
  /** ID of the Callout to move the Aspect to. */
  calloutID: Scalars['UUID'];
};

export type Mutation = {
  /** Ensure all community members are registered for communications. */
  adminCommunicationEnsureAccessToCommunications: Scalars['Boolean'];
  /** Remove an orphaned room from messaging platform. */
  adminCommunicationRemoveOrphanedRoom: Scalars['Boolean'];
  /** Allow updating the rule for joining rooms: public or invite. */
  adminCommunicationUpdateRoomsJoinRule: Scalars['Boolean'];
  /** Apply to join the specified Community as a member. */
  applyForCommunityMembership: Application;
  /** Assigns an Organization as a Lead of the specified Community. */
  assignOrganizationAsCommunityLead: Community;
  /** Assigns an Organization as a member of the specified Community. */
  assignOrganizationAsCommunityMember: Community;
  /** Assigns a User as an Challenge Admin. */
  assignUserAsChallengeAdmin: User;
  /** Assigns a User as a lead of the specified Community. */
  assignUserAsCommunityLead: Community;
  /** Assigns a User as a member of the specified Community. */
  assignUserAsCommunityMember: Community;
  /** Assigns a User as a Global Admin. */
  assignUserAsGlobalAdmin: User;
  /** Assigns a User as a Global Community Admin. */
  assignUserAsGlobalCommunityAdmin: User;
  /** Assigns a User as a Global Hubs Admin. */
  assignUserAsGlobalHubsAdmin: User;
  /** Assigns a User as an Hub Admin. */
  assignUserAsHubAdmin: User;
  /** Assigns a User as an Opportunity Admin. */
  assignUserAsOpportunityAdmin: User;
  /** Assigns a User as an Organization Admin. */
  assignUserAsOrganizationAdmin: User;
  /** Assigns a User as an Organization Owner. */
  assignUserAsOrganizationOwner: User;
  /** Assigns a User as a member of the specified User Group. */
  assignUserToGroup: UserGroup;
  /** Assigns a User as an associate of the specified Organization. */
  assignUserToOrganization: Organization;
  /** Reset the Authorization Policy on the specified Hub. */
  authorizationPolicyResetOnHub: Hub;
  /** Reset the Authorization Policy on the specified Organization. */
  authorizationPolicyResetOnOrganization: Organization;
  /** Reset the Authorization Policy on the specified Platform. */
  authorizationPolicyResetOnPlatform: Platform;
  /** Reset the Authorization policy on the specified User. */
  authorizationPolicyResetOnUser: User;
  /** Generate Alkemio user credential offer */
  beginAlkemioUserVerifiedCredentialOfferInteraction: AgentBeginVerifiedCredentialOfferOutput;
  /** Generate community member credential offer */
  beginCommunityMemberVerifiedCredentialOfferInteraction: AgentBeginVerifiedCredentialOfferOutput;
  /** Generate verified credential share request */
  beginVerifiedCredentialRequestInteraction: AgentBeginVerifiedCredentialRequestOutput;
  /** Creates a new Hub by converting an existing Challenge. */
  convertChallengeToHub: Hub;
  /** Creates a new Challenge by converting an existing Opportunity. */
  convertOpportunityToChallenge: Challenge;
  /** Creates a new Actor in the specified ActorGroup. */
  createActor: Actor;
  /** Create a new Actor Group on the EcosystemModel. */
  createActorGroup: ActorGroup;
  /** Create a new Aspect on the Callout. */
  createAspectOnCallout: Aspect;
  /** Creates a new AspectTemplate on the specified TemplatesSet. */
  createAspectTemplate: AspectTemplate;
  /** Create a new Callout on the Collaboration. */
  createCalloutOnCollaboration: Callout;
  /** Create a new Canvas on the Callout. */
  createCanvasOnCallout: Canvas;
  /** Creates a new CanvasTemplate on the specified TemplatesSet. */
  createCanvasTemplate: CanvasTemplate;
  /** Creates a new Challenge within the specified Hub. */
  createChallenge: Challenge;
  /** Creates a new child challenge within the parent Challenge. */
  createChildChallenge: Challenge;
  /** Creates a new Discussion as part of this Communication. */
  createDiscussion: Discussion;
  /** Create a new CalendarEvent on the Calendar. */
  createEventOnCalendar: CalendarEvent;
  /** Creates feedback on community context from users having COMMUNITY_CONTEXT_REVIEW privilege */
  createFeedbackOnCommunityContext: Scalars['Boolean'];
  /** Creates a new User Group in the specified Community. */
  createGroupOnCommunity: UserGroup;
  /** Creates a new User Group for the specified Organization. */
  createGroupOnOrganization: UserGroup;
  /** Creates a new Hub. */
  createHub: Hub;
  /** Create a new InnovatonPack on the Library. */
  createInnovationPackOnLibrary: InnovatonPack;
  /** Creates a new LifecycleTemplate on the specified TemplatesSet. */
  createLifecycleTemplate: LifecycleTemplate;
  /** Creates a new Opportunity within the parent Challenge. */
  createOpportunity: Opportunity;
  /** Creates a new Organization on the platform. */
  createOrganization: Organization;
  /** Create a new Project on the Opportunity */
  createProject: Project;
  /** Creates a new Reference on the specified Context. */
  createReferenceOnContext: Reference;
  /** Creates a new Reference on the specified Profile. */
  createReferenceOnProfile: Reference;
  /** Create a new Relation on the Collaboration. */
  createRelationOnCollaboration: Relation;
  /** Creates a new Tagset on the specified Profile */
  createTagsetOnProfile: Tagset;
  /** Creates a new User on the platform. */
  createUser: User;
  /** Creates a new User profile on the platform for a user that has a valid Authentication session. */
  createUserNewRegistration: User;
  /** Deletes the specified Actor. */
  deleteActor: Actor;
  /** Deletes the specified Actor Group, including contained Actors. */
  deleteActorGroup: ActorGroup;
  /** Deletes the specified Aspect. */
  deleteAspect: Aspect;
  /** Deletes the specified AspectTemplate. */
  deleteAspectTemplate: AspectTemplate;
  /** Deletes the specified CalendarEvent. */
  deleteCalendarEvent: CalendarEvent;
  /** Delete a Callout. */
  deleteCallout: Callout;
  /** Updates the specified Canvas. */
  deleteCanvas: Canvas;
  /** Deletes the specified CanvasTemplate. */
  deleteCanvasTemplate: CanvasTemplate;
  /** Deletes the specified Challenge. */
  deleteChallenge: Challenge;
  /** Delete Collaboration. */
  deleteCollaboration: Collaboration;
  /** Deletes the specified Discussion. */
  deleteDiscussion: Discussion;
  /** Removes a file. */
  deleteFile: Scalars['Boolean'];
  /** Deletes the specified Hub. */
  deleteHub: Hub;
  /** Deletes the specified InnovationPack. */
  deleteInnovationPack: InnovatonPack;
  /** Deletes the specified LifecycleTemplate. */
  deleteLifecycleTemplate: LifecycleTemplate;
  /** Deletes the specified Opportunity. */
  deleteOpportunity: Opportunity;
  /** Deletes the specified Organization. */
  deleteOrganization: Organization;
  /** Deletes the specified Project. */
  deleteProject: Project;
  /** Deletes the specified Reference. */
  deleteReference: Reference;
  /** Deletes the specified Relation. */
  deleteRelation: Relation;
  /** Deletes the specified User. */
  deleteUser: User;
  /** Removes the specified User Application. */
  deleteUserApplication: Application;
  /** Deletes the specified User Group. */
  deleteUserGroup: UserGroup;
  /** Trigger an event on the Application. */
  eventOnApplication: Application;
  /** Trigger an event on the Organization Verification. */
  eventOnCanvasCheckout: CanvasCheckout;
  /** Trigger an event on the Challenge. */
  eventOnChallenge: Challenge;
  /** Trigger an event on the Opportunity. */
  eventOnOpportunity: Opportunity;
  /** Trigger an event on the Organization Verification. */
  eventOnOrganizationVerification: OrganizationVerification;
  /** Trigger an event on the Project. */
  eventOnProject: Project;
  /** Grants an authorization credential to a User. */
  grantCredentialToUser: User;
  /** Join the specified Community as a member, without going through an approval process. */
  joinCommunity: Community;
  /** Sends a message on the specified User`s behalf and returns the room id */
  messageUser: Scalars['String'];
  /** Moves the specified Aspect to another Callout. */
  moveAspectToCallout: Aspect;
  /** Removes a comment message. */
  removeComment: Scalars['MessageID'];
  /** Removes a message from the specified Discussion. */
  removeMessageFromDiscussion: Scalars['MessageID'];
  /** Removes an Organization as a Lead of the specified Community. */
  removeOrganizationAsCommunityLead: Community;
  /** Removes an Organization as a member of the specified Community. */
  removeOrganizationAsCommunityMember: Community;
  /** Removes an update message. */
  removeUpdate: Scalars['MessageID'];
  /** Removes a User from being an Challenge Admin. */
  removeUserAsChallengeAdmin: User;
  /** Removes a User as a Lead of the specified Community. */
  removeUserAsCommunityLead: Community;
  /** Removes a User as a member of the specified Community. */
  removeUserAsCommunityMember: Community;
  /** Removes a User from being a Global Admin. */
  removeUserAsGlobalAdmin: User;
  /** Removes a User from being a Global Community Admin. */
  removeUserAsGlobalCommunityAdmin: User;
  /** Removes a User from being a Global Hubs Admin. */
  removeUserAsGlobalHubsAdmin: User;
  /** Removes a User from being an Hub Admin. */
  removeUserAsHubAdmin: User;
  /** Removes a User from being an Opportunity Admin. */
  removeUserAsOpportunityAdmin: User;
  /** Removes a User from being an Organization Admin. */
  removeUserAsOrganizationAdmin: User;
  /** Removes a User from being an Organization Owner. */
  removeUserAsOrganizationOwner: User;
  /** Removes the specified User from specified user group */
  removeUserFromGroup: UserGroup;
  /** Removes a User as a member of the specified Organization. */
  removeUserFromOrganization: Organization;
  /** Removes an authorization credential from a User. */
  revokeCredentialFromUser: User;
  /** Sends an comment message. Returns the id of the new Update message. */
  sendComment: Message;
  /** Send a message on a Comments Callout */
  sendMessageOnCallout: Message;
  /** Send message to Community Leads. */
  sendMessageToCommunityLeads: Scalars['Boolean'];
  /** Sends a message to the specified Discussion.  */
  sendMessageToDiscussion: Message;
  /** Send message to an Organization. */
  sendMessageToOrganization: Scalars['Boolean'];
  /** Send message to a User. */
  sendMessageToUser: Scalars['Boolean'];
  /** Sends an update message. Returns the id of the new Update message. */
  sendUpdate: Message;
  /** Updates the specified Actor. */
  updateActor: Actor;
  /** Updates the specified Aspect. */
  updateAspect: Aspect;
  /** Updates the specified AspectTemplate. */
  updateAspectTemplate: AspectTemplate;
  /** Updates the specified CalendarEvent. */
  updateCalendarEvent: CalendarEvent;
  /** Update a Callout. */
  updateCallout: Callout;
  /** Update the information describing the publishing of the specified Callout. */
  updateCalloutPublishInfo: Callout;
  /** Update the visibility of the specified Callout. */
  updateCalloutVisibility: Callout;
  /** Updates the specified Canvas. */
  updateCanvas: Canvas;
  /** Updates the specified CanvasTemplate. */
  updateCanvasTemplate: CanvasTemplate;
  /** Updates the specified Challenge. */
  updateChallenge: Challenge;
  /** Updates the Innovation Flow on the specified Challenge. */
  updateChallengeInnovationFlow: Challenge;
  /** Update the Application Form used by this Community. */
  updateCommunityApplicationForm: Community;
  /** Updates the specified Discussion. */
  updateDiscussion: Discussion;
  /** Updates the specified EcosystemModel. */
  updateEcosystemModel: EcosystemModel;
  /** Updates the Hub. */
  updateHub: Hub;
  /** Update the visibility of the specified Hub. */
  updateHubVisibility: Hub;
  /** Updates the InnovationPack. */
  updateInnovationPack: InnovatonPack;
  /** Updates the specified LifecycleTemplate. */
  updateLifecycleTemplate: LifecycleTemplate;
  /** Updates the specified Opportunity. */
  updateOpportunity: Opportunity;
  /** Updates the Innovation Flow on the specified Opportunity. */
  updateOpportunityInnovationFlow: Opportunity;
  /** Updates the specified Organization. */
  updateOrganization: Organization;
  /** Updates one of the Preferences on a Challenge */
  updatePreferenceOnChallenge: Preference;
  /** Updates one of the Preferences on a Hub */
  updatePreferenceOnHub: Preference;
  /** Updates one of the Preferences on an Organization */
  updatePreferenceOnOrganization: Preference;
  /** Updates one of the Preferences on a Hub */
  updatePreferenceOnUser: Preference;
  /** Updates the specified Profile. */
  updateProfile: Profile;
  /** Updates the specified Project. */
  updateProject: Project;
  /** Updates the User. */
  updateUser: User;
  /** Updates the specified User Group. */
  updateUserGroup: UserGroup;
  /** Updates the image URI for the specified Visual. */
  updateVisual: Visual;
  /** Uploads a file. */
  uploadFile: Scalars['String'];
  /** Uploads and sets an image for the specified Visual. */
  uploadImageOnVisual: Visual;
};

export type MutationAdminCommunicationEnsureAccessToCommunicationsArgs = {
  communicationData: CommunicationAdminEnsureAccessInput;
};

export type MutationAdminCommunicationRemoveOrphanedRoomArgs = {
  orphanedRoomData: CommunicationAdminRemoveOrphanedRoomInput;
};

export type MutationAdminCommunicationUpdateRoomsJoinRuleArgs = {
  changeRoomAccessData: CommunicationAdminUpdateRoomsJoinRuleInput;
};

export type MutationApplyForCommunityMembershipArgs = {
  applicationData: CommunityApplyInput;
};

export type MutationAssignOrganizationAsCommunityLeadArgs = {
  leadershipData: AssignCommunityLeadOrganizationInput;
};

export type MutationAssignOrganizationAsCommunityMemberArgs = {
  membershipData: AssignCommunityMemberOrganizationInput;
};

export type MutationAssignUserAsChallengeAdminArgs = {
  membershipData: AssignChallengeAdminInput;
};

export type MutationAssignUserAsCommunityLeadArgs = {
  leadershipData: AssignCommunityLeadUserInput;
};

export type MutationAssignUserAsCommunityMemberArgs = {
  membershipData: AssignCommunityMemberUserInput;
};

export type MutationAssignUserAsGlobalAdminArgs = {
  membershipData: AssignGlobalAdminInput;
};

export type MutationAssignUserAsGlobalCommunityAdminArgs = {
  membershipData: AssignGlobalCommunityAdminInput;
};

export type MutationAssignUserAsGlobalHubsAdminArgs = {
  membershipData: AssignGlobalHubsAdminInput;
};

export type MutationAssignUserAsHubAdminArgs = {
  membershipData: AssignHubAdminInput;
};

export type MutationAssignUserAsOpportunityAdminArgs = {
  membershipData: AssignOpportunityAdminInput;
};

export type MutationAssignUserAsOrganizationAdminArgs = {
  membershipData: AssignOrganizationAdminInput;
};

export type MutationAssignUserAsOrganizationOwnerArgs = {
  membershipData: AssignOrganizationOwnerInput;
};

export type MutationAssignUserToGroupArgs = {
  membershipData: AssignUserGroupMemberInput;
};

export type MutationAssignUserToOrganizationArgs = {
  membershipData: AssignOrganizationAssociateInput;
};

export type MutationAuthorizationPolicyResetOnHubArgs = {
  authorizationResetData: HubAuthorizationResetInput;
};

export type MutationAuthorizationPolicyResetOnOrganizationArgs = {
  authorizationResetData: OrganizationAuthorizationResetInput;
};

export type MutationAuthorizationPolicyResetOnUserArgs = {
  authorizationResetData: UserAuthorizationResetInput;
};

export type MutationBeginCommunityMemberVerifiedCredentialOfferInteractionArgs =
  {
    communityID: Scalars['String'];
  };

export type MutationBeginVerifiedCredentialRequestInteractionArgs = {
  types: Array<Scalars['String']>;
};

export type MutationConvertChallengeToHubArgs = {
  convertData: ConvertChallengeToHubInput;
};

export type MutationConvertOpportunityToChallengeArgs = {
  convertData: ConvertOpportunityToChallengeInput;
};

export type MutationCreateActorArgs = {
  actorData: CreateActorInput;
};

export type MutationCreateActorGroupArgs = {
  actorGroupData: CreateActorGroupInput;
};

export type MutationCreateAspectOnCalloutArgs = {
  aspectData: CreateAspectOnCalloutInput;
};

export type MutationCreateAspectTemplateArgs = {
  aspectTemplateInput: CreateAspectTemplateOnTemplatesSetInput;
};

export type MutationCreateCalloutOnCollaborationArgs = {
  calloutData: CreateCalloutOnCollaborationInput;
};

export type MutationCreateCanvasOnCalloutArgs = {
  canvasData: CreateCanvasOnCalloutInput;
};

export type MutationCreateCanvasTemplateArgs = {
  canvasTemplateInput: CreateCanvasTemplateOnTemplatesSetInput;
};

export type MutationCreateChallengeArgs = {
  challengeData: CreateChallengeOnHubInput;
};

export type MutationCreateChildChallengeArgs = {
  challengeData: CreateChallengeOnChallengeInput;
};

export type MutationCreateDiscussionArgs = {
  createData: CommunicationCreateDiscussionInput;
};

export type MutationCreateEventOnCalendarArgs = {
  eventData: CreateCalendarEventOnCalendarInput;
};

export type MutationCreateFeedbackOnCommunityContextArgs = {
  feedbackData: CreateFeedbackOnCommunityContextInput;
};

export type MutationCreateGroupOnCommunityArgs = {
  groupData: CreateUserGroupInput;
};

export type MutationCreateGroupOnOrganizationArgs = {
  groupData: CreateUserGroupInput;
};

export type MutationCreateHubArgs = {
  hubData: CreateHubInput;
};

export type MutationCreateInnovationPackOnLibraryArgs = {
  packData: CreateInnovationPackOnLibraryInput;
};

export type MutationCreateLifecycleTemplateArgs = {
  lifecycleTemplateInput: CreateLifecycleTemplateOnTemplatesSetInput;
};

export type MutationCreateOpportunityArgs = {
  opportunityData: CreateOpportunityInput;
};

export type MutationCreateOrganizationArgs = {
  organizationData: CreateOrganizationInput;
};

export type MutationCreateProjectArgs = {
  projectData: CreateProjectInput;
};

export type MutationCreateReferenceOnContextArgs = {
  referenceInput: CreateReferenceOnContextInput;
};

export type MutationCreateReferenceOnProfileArgs = {
  referenceInput: CreateReferenceOnProfileInput;
};

export type MutationCreateRelationOnCollaborationArgs = {
  relationData: CreateRelationOnCollaborationInput;
};

export type MutationCreateTagsetOnProfileArgs = {
  tagsetData: CreateTagsetOnProfileInput;
};

export type MutationCreateUserArgs = {
  userData: CreateUserInput;
};

export type MutationDeleteActorArgs = {
  deleteData: DeleteActorInput;
};

export type MutationDeleteActorGroupArgs = {
  deleteData: DeleteActorGroupInput;
};

export type MutationDeleteAspectArgs = {
  deleteData: DeleteAspectInput;
};

export type MutationDeleteAspectTemplateArgs = {
  deleteData: DeleteAspectTemplateInput;
};

export type MutationDeleteCalendarEventArgs = {
  deleteData: DeleteCalendarEventInput;
};

export type MutationDeleteCalloutArgs = {
  deleteData: DeleteCalloutInput;
};

export type MutationDeleteCanvasArgs = {
  canvasData: DeleteCanvasInput;
};

export type MutationDeleteCanvasTemplateArgs = {
  deleteData: DeleteCanvasTemplateInput;
};

export type MutationDeleteChallengeArgs = {
  deleteData: DeleteChallengeInput;
};

export type MutationDeleteCollaborationArgs = {
  deleteData: DeleteCollaborationInput;
};

export type MutationDeleteDiscussionArgs = {
  deleteData: DeleteDiscussionInput;
};

export type MutationDeleteFileArgs = {
  deleteData: DeleteFileInput;
};

export type MutationDeleteHubArgs = {
  deleteData: DeleteHubInput;
};

export type MutationDeleteInnovationPackArgs = {
  deleteData: DeleteInnovationPackInput;
};

export type MutationDeleteLifecycleTemplateArgs = {
  deleteData: DeleteLifecycleTemplateInput;
};

export type MutationDeleteOpportunityArgs = {
  deleteData: DeleteOpportunityInput;
};

export type MutationDeleteOrganizationArgs = {
  deleteData: DeleteOrganizationInput;
};

export type MutationDeleteProjectArgs = {
  deleteData: DeleteProjectInput;
};

export type MutationDeleteReferenceArgs = {
  deleteData: DeleteReferenceInput;
};

export type MutationDeleteRelationArgs = {
  deleteData: DeleteRelationInput;
};

export type MutationDeleteUserArgs = {
  deleteData: DeleteUserInput;
};

export type MutationDeleteUserApplicationArgs = {
  deleteData: DeleteApplicationInput;
};

export type MutationDeleteUserGroupArgs = {
  deleteData: DeleteUserGroupInput;
};

export type MutationEventOnApplicationArgs = {
  applicationEventData: ApplicationEventInput;
};

export type MutationEventOnCanvasCheckoutArgs = {
  canvasCheckoutEventData: CanvasCheckoutEventInput;
};

export type MutationEventOnChallengeArgs = {
  challengeEventData: ChallengeEventInput;
};

export type MutationEventOnOpportunityArgs = {
  opportunityEventData: OpportunityEventInput;
};

export type MutationEventOnOrganizationVerificationArgs = {
  organizationVerificationEventData: OrganizationVerificationEventInput;
};

export type MutationEventOnProjectArgs = {
  projectEventData: ProjectEventInput;
};

export type MutationGrantCredentialToUserArgs = {
  grantCredentialData: GrantAuthorizationCredentialInput;
};

export type MutationJoinCommunityArgs = {
  joinCommunityData: CommunityJoinInput;
};

export type MutationMessageUserArgs = {
  messageData: UserSendMessageInput;
};

export type MutationMoveAspectToCalloutArgs = {
  moveAspectData: MoveAspectInput;
};

export type MutationRemoveCommentArgs = {
  messageData: CommentsRemoveMessageInput;
};

export type MutationRemoveMessageFromDiscussionArgs = {
  messageData: DiscussionRemoveMessageInput;
};

export type MutationRemoveOrganizationAsCommunityLeadArgs = {
  leadershipData: RemoveCommunityLeadOrganizationInput;
};

export type MutationRemoveOrganizationAsCommunityMemberArgs = {
  membershipData: RemoveCommunityMemberOrganizationInput;
};

export type MutationRemoveUpdateArgs = {
  messageData: UpdatesRemoveMessageInput;
};

export type MutationRemoveUserAsChallengeAdminArgs = {
  membershipData: RemoveChallengeAdminInput;
};

export type MutationRemoveUserAsCommunityLeadArgs = {
  leadershipData: RemoveCommunityLeadUserInput;
};

export type MutationRemoveUserAsCommunityMemberArgs = {
  membershipData: RemoveCommunityMemberUserInput;
};

export type MutationRemoveUserAsGlobalAdminArgs = {
  membershipData: RemoveGlobalAdminInput;
};

export type MutationRemoveUserAsGlobalCommunityAdminArgs = {
  membershipData: RemoveGlobalCommunityAdminInput;
};

export type MutationRemoveUserAsGlobalHubsAdminArgs = {
  membershipData: RemoveGlobalHubsAdminInput;
};

export type MutationRemoveUserAsHubAdminArgs = {
  membershipData: RemoveHubAdminInput;
};

export type MutationRemoveUserAsOpportunityAdminArgs = {
  membershipData: RemoveOpportunityAdminInput;
};

export type MutationRemoveUserAsOrganizationAdminArgs = {
  membershipData: RemoveOrganizationAdminInput;
};

export type MutationRemoveUserAsOrganizationOwnerArgs = {
  membershipData: RemoveOrganizationOwnerInput;
};

export type MutationRemoveUserFromGroupArgs = {
  membershipData: RemoveUserGroupMemberInput;
};

export type MutationRemoveUserFromOrganizationArgs = {
  membershipData: RemoveOrganizationAssociateInput;
};

export type MutationRevokeCredentialFromUserArgs = {
  revokeCredentialData: RevokeAuthorizationCredentialInput;
};

export type MutationSendCommentArgs = {
  messageData: CommentsSendMessageInput;
};

export type MutationSendMessageOnCalloutArgs = {
  data: SendMessageOnCalloutInput;
};

export type MutationSendMessageToCommunityLeadsArgs = {
  messageData: CommunicationSendMessageToCommunityLeadsInput;
};

export type MutationSendMessageToDiscussionArgs = {
  messageData: DiscussionSendMessageInput;
};

export type MutationSendMessageToOrganizationArgs = {
  messageData: CommunicationSendMessageToOrganizationInput;
};

export type MutationSendMessageToUserArgs = {
  messageData: CommunicationSendMessageToUserInput;
};

export type MutationSendUpdateArgs = {
  messageData: UpdatesSendMessageInput;
};

export type MutationUpdateActorArgs = {
  actorData: UpdateActorInput;
};

export type MutationUpdateAspectArgs = {
  aspectData: UpdateAspectInput;
};

export type MutationUpdateAspectTemplateArgs = {
  aspectTemplateInput: UpdateAspectTemplateInput;
};

export type MutationUpdateCalendarEventArgs = {
  eventData: UpdateCalendarEventInput;
};

export type MutationUpdateCalloutArgs = {
  calloutData: UpdateCalloutInput;
};

export type MutationUpdateCalloutPublishInfoArgs = {
  calloutData: UpdateCalloutPublishInfoInput;
};

export type MutationUpdateCalloutVisibilityArgs = {
  calloutData: UpdateCalloutVisibilityInput;
};

export type MutationUpdateCanvasArgs = {
  canvasData: UpdateCanvasDirectInput;
};

export type MutationUpdateCanvasTemplateArgs = {
  canvasTemplateInput: UpdateCanvasTemplateInput;
};

export type MutationUpdateChallengeArgs = {
  challengeData: UpdateChallengeInput;
};

export type MutationUpdateChallengeInnovationFlowArgs = {
  challengeData: UpdateChallengeInnovationFlowInput;
};

export type MutationUpdateCommunityApplicationFormArgs = {
  applicationFormData: UpdateCommunityApplicationFormInput;
};

export type MutationUpdateDiscussionArgs = {
  updateData: UpdateDiscussionInput;
};

export type MutationUpdateEcosystemModelArgs = {
  ecosystemModelData: UpdateEcosystemModelInput;
};

export type MutationUpdateHubArgs = {
  hubData: UpdateHubInput;
};

export type MutationUpdateHubVisibilityArgs = {
  visibilityData: UpdateHubVisibilityInput;
};

export type MutationUpdateInnovationPackArgs = {
  innovationPackData: UpdateInnovationPackInput;
};

export type MutationUpdateLifecycleTemplateArgs = {
  lifecycleTemplateInput: UpdateLifecycleTemplateInput;
};

export type MutationUpdateOpportunityArgs = {
  opportunityData: UpdateOpportunityInput;
};

export type MutationUpdateOpportunityInnovationFlowArgs = {
  opportunityData: UpdateOpportunityInnovationFlowInput;
};

export type MutationUpdateOrganizationArgs = {
  organizationData: UpdateOrganizationInput;
};

export type MutationUpdatePreferenceOnChallengeArgs = {
  preferenceData: UpdateChallengePreferenceInput;
};

export type MutationUpdatePreferenceOnHubArgs = {
  preferenceData: UpdateHubPreferenceInput;
};

export type MutationUpdatePreferenceOnOrganizationArgs = {
  preferenceData: UpdateOrganizationPreferenceInput;
};

export type MutationUpdatePreferenceOnUserArgs = {
  preferenceData: UpdateUserPreferenceInput;
};

export type MutationUpdateProfileArgs = {
  profileData: UpdateProfileDirectInput;
};

export type MutationUpdateProjectArgs = {
  projectData: UpdateProjectInput;
};

export type MutationUpdateUserArgs = {
  userData: UpdateUserInput;
};

export type MutationUpdateUserGroupArgs = {
  userGroupData: UpdateUserGroupInput;
};

export type MutationUpdateVisualArgs = {
  updateData: UpdateVisualInput;
};

export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};

export type MutationUploadImageOnVisualArgs = {
  file: Scalars['Upload'];
  uploadData: VisualUploadImageInput;
};

export type Nvp = {
  /** The ID of the entity */
  id: Scalars['UUID'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type Opportunity = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** Collaboration object for the base challenge */
  collaboration?: Maybe<Collaboration>;
  /** The community for the Opportunity. */
  community?: Maybe<Community>;
  /** The context for the Opportunity. */
  context?: Maybe<Context>;
  /** The display name. */
  displayName: Scalars['String'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** The lifeycle for the Opportunity. */
  lifecycle?: Maybe<Lifecycle>;
  /** Metrics about the activity within this Opportunity. */
  metrics?: Maybe<Array<Nvp>>;
  /** A name identifier of the entity, unique within a given scope. */
  nameID: Scalars['NameID'];
  /** The parent entity name (challenge) ID. */
  parentNameID?: Maybe<Scalars['String']>;
  /** The set of projects within the context of this Opportunity */
  projects?: Maybe<Array<Project>>;
  /** The set of tags for the challenge */
  tagset?: Maybe<Tagset>;
};

export type OpportunityCreated = {
  /** The identifier for the Challenge on which the Opportunity was created. */
  challengeID: Scalars['UUID'];
  /** The Opportunity that has been created. */
  opportunity: Opportunity;
};

export type OpportunityEventInput = {
  ID: Scalars['UUID'];
  eventName: Scalars['String'];
};

export type OpportunityTemplate = {
  /** Template actor groups. */
  actorGroups?: Maybe<Array<Scalars['String']>>;
  /** Template opportunity name. */
  name: Scalars['String'];
  /** Template relations. */
  relations?: Maybe<Array<Scalars['String']>>;
};

export type Organization = Groupable & {
  /** The Agent representing this User. */
  agent?: Maybe<Agent>;
  /** All Users that are associated with this Organization. */
  associates?: Maybe<Array<User>>;
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** Organization contact email */
  contactEmail?: Maybe<Scalars['String']>;
  /** Domain name; what is verified, eg. alkem.io */
  domain?: Maybe<Scalars['String']>;
  /** Group defined on this organization. */
  group?: Maybe<UserGroup>;
  /** Groups defined on this organization. */
  groups?: Maybe<Array<UserGroup>>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** Legal name - required if hosting an Hub */
  legalEntityName?: Maybe<Scalars['String']>;
  /** Metrics about the activity within this Organization. */
  metrics?: Maybe<Array<Nvp>>;
  /** A name identifier of the entity, unique within a given scope. */
  nameID: Scalars['NameID'];
  /** The preferences for this Organization */
  preferences: Array<Preference>;
  /** The profile for this organization. */
  profile: Profile;
  verification: OrganizationVerification;
  /** Organization website */
  website?: Maybe<Scalars['String']>;
};

export type OrganizationGroupArgs = {
  ID: Scalars['UUID'];
};

export type OrganizationAuthorizationResetInput = {
  /** The identifier of the Organization whose Authorization Policy should be reset. */
  organizationID: Scalars['UUID_NAMEID_EMAIL'];
};

export type OrganizationFilterInput = {
  contactEmail?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  nameID?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export enum OrganizationPreferenceType {
  AuthorizationOrganizationMatchDomain = 'AUTHORIZATION_ORGANIZATION_MATCH_DOMAIN',
}

export type OrganizationTemplate = {
  /** Organization template name. */
  name: Scalars['String'];
  /** Tagset templates. */
  tagsets?: Maybe<Array<TagsetTemplate>>;
};

export type OrganizationVerification = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  lifecycle: Lifecycle;
  /** Organization verification type */
  status: OrganizationVerificationEnum;
};

export enum OrganizationVerificationEnum {
  NotVerified = 'NOT_VERIFIED',
  VerifiedManualAttestation = 'VERIFIED_MANUAL_ATTESTATION',
}

export type OrganizationVerificationEventInput = {
  eventName: Scalars['String'];
  organizationVerificationID: Scalars['UUID'];
};

export type OryConfig = {
  /** Ory Issuer. */
  issuer: Scalars['String'];
  /** Ory Kratos Public Base URL. Used by all Kratos Public Clients. */
  kratosPublicBaseURL: Scalars['String'];
};

export type PageInfo = {
  /** The last cursor of the page result */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicate whether more items exist after the returned ones */
  hasNextPage: Scalars['Boolean'];
  /** Indicate whether more items exist before the returned ones */
  hasPreviousPage: Scalars['Boolean'];
  /** The first cursor of the page result */
  startCursor?: Maybe<Scalars['String']>;
};

export type PaginatedOrganization = {
  organization: Array<Organization>;
  pageInfo: PageInfo;
};

export type PaginatedUsers = {
  pageInfo: PageInfo;
  users: Array<User>;
};

export type Platform = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The Communications for the platform */
  communication: Communication;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** The Innovation Library for the platform */
  library: Library;
};

export type PlatformLocations = {
  /** URL to a page about the platform */
  about: Scalars['String'];
  /** URL where users can get tips and tricks */
  aup: Scalars['String'];
  /** URL where users can see the community forum */
  community: Scalars['String'];
  /** Name of the environment */
  environment: Scalars['String'];
  /** The feature flags for the platform */
  featureFlags: Array<FeatureFlag>;
  /** URL to a form for providing feedback */
  feedback: Scalars['String'];
  /** URL for the link Foundation in the HomePage of the application */
  foundation: Scalars['String'];
  /** URL where users can get help */
  help: Scalars['String'];
  /** URL for the link Impact in the HomePage of the application */
  impact: Scalars['String'];
  /** URL where new users can get onboarding help */
  newuser: Scalars['String'];
  /** URL for the link Opensource in the HomePage of the application */
  opensource: Scalars['String'];
  /** URL to the privacy policy for the platform */
  privacy: Scalars['String'];
  /** URL where users can get information about previous releases */
  releases: Scalars['String'];
  /** URL to the security policy for the platform */
  security: Scalars['String'];
  /** URL where users can get support for the platform */
  support: Scalars['String'];
  /** URL to the terms of usage for the platform */
  terms: Scalars['String'];
  /** URL where users can get tips and tricks */
  tips: Scalars['String'];
};

export type Preference = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The definition for the Preference */
  definition: PreferenceDefinition;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** Value of the preference */
  value: Scalars['String'];
};

export type PreferenceDefinition = {
  /** Preference description */
  description: Scalars['String'];
  /** The name */
  displayName: Scalars['String'];
  /** The group for the preference within the containing entity type. */
  group: Scalars['String'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** The type of the Preference, specific to the Entity it is on. */
  type: PreferenceType;
  /** Preference value type */
  valueType: PreferenceValueType;
};

export enum PreferenceType {
  AllowContributorsToCreateCallouts = 'ALLOW_CONTRIBUTORS_TO_CREATE_CALLOUTS',
  AllowContributorsToCreateOpportunities = 'ALLOW_CONTRIBUTORS_TO_CREATE_OPPORTUNITIES',
  AllowHubMembersToContribute = 'ALLOW_HUB_MEMBERS_TO_CONTRIBUTE',
  AllowMembersToCreateCallouts = 'ALLOW_MEMBERS_TO_CREATE_CALLOUTS',
  AllowMembersToCreateChallenges = 'ALLOW_MEMBERS_TO_CREATE_CHALLENGES',
  AllowNonMembersReadAccess = 'ALLOW_NON_MEMBERS_READ_ACCESS',
  AuthorizationAnonymousReadAccess = 'AUTHORIZATION_ANONYMOUS_READ_ACCESS',
  AuthorizationOrganizationMatchDomain = 'AUTHORIZATION_ORGANIZATION_MATCH_DOMAIN',
  MembershipApplicationsFromAnyone = 'MEMBERSHIP_APPLICATIONS_FROM_ANYONE',
  MembershipApplyChallengeFromHubMembers = 'MEMBERSHIP_APPLY_CHALLENGE_FROM_HUB_MEMBERS',
  MembershipFeedbackOnChallengeContext = 'MEMBERSHIP_FEEDBACK_ON_CHALLENGE_CONTEXT',
  MembershipJoinChallengeFromHubMembers = 'MEMBERSHIP_JOIN_CHALLENGE_FROM_HUB_MEMBERS',
  MembershipJoinHubFromAnyone = 'MEMBERSHIP_JOIN_HUB_FROM_ANYONE',
  MembershipJoinHubFromHostOrganizationMembers = 'MEMBERSHIP_JOIN_HUB_FROM_HOST_ORGANIZATION_MEMBERS',
  NotificationApplicationReceived = 'NOTIFICATION_APPLICATION_RECEIVED',
  NotificationApplicationSubmitted = 'NOTIFICATION_APPLICATION_SUBMITTED',
  NotificationAspectCommentCreated = 'NOTIFICATION_ASPECT_COMMENT_CREATED',
  NotificationAspectCreated = 'NOTIFICATION_ASPECT_CREATED',
  NotificationAspectCreatedAdmin = 'NOTIFICATION_ASPECT_CREATED_ADMIN',
  NotificationCalloutPublished = 'NOTIFICATION_CALLOUT_PUBLISHED',
  NotificationCanvasCreated = 'NOTIFICATION_CANVAS_CREATED',
  NotificationCommunicationDiscussionCreated = 'NOTIFICATION_COMMUNICATION_DISCUSSION_CREATED',
  NotificationCommunicationDiscussionCreatedAdmin = 'NOTIFICATION_COMMUNICATION_DISCUSSION_CREATED_ADMIN',
  NotificationCommunicationDiscussionResponse = 'NOTIFICATION_COMMUNICATION_DISCUSSION_RESPONSE',
  NotificationCommunicationMention = 'NOTIFICATION_COMMUNICATION_MENTION',
  NotificationCommunicationMessage = 'NOTIFICATION_COMMUNICATION_MESSAGE',
  NotificationCommunicationUpdates = 'NOTIFICATION_COMMUNICATION_UPDATES',
  NotificationCommunicationUpdateSentAdmin = 'NOTIFICATION_COMMUNICATION_UPDATE_SENT_ADMIN',
  NotificationCommunityCollaborationInterestAdmin = 'NOTIFICATION_COMMUNITY_COLLABORATION_INTEREST_ADMIN',
  NotificationCommunityCollaborationInterestUser = 'NOTIFICATION_COMMUNITY_COLLABORATION_INTEREST_USER',
  NotificationCommunityNewMember = 'NOTIFICATION_COMMUNITY_NEW_MEMBER',
  NotificationCommunityNewMemberAdmin = 'NOTIFICATION_COMMUNITY_NEW_MEMBER_ADMIN',
  NotificationCommunityReviewSubmitted = 'NOTIFICATION_COMMUNITY_REVIEW_SUBMITTED',
  NotificationCommunityReviewSubmittedAdmin = 'NOTIFICATION_COMMUNITY_REVIEW_SUBMITTED_ADMIN',
  NotificationDiscussionCommentCreated = 'NOTIFICATION_DISCUSSION_COMMENT_CREATED',
  NotificationOrganizationMention = 'NOTIFICATION_ORGANIZATION_MENTION',
  NotificationOrganizationMessage = 'NOTIFICATION_ORGANIZATION_MESSAGE',
  NotificationUserRemoved = 'NOTIFICATION_USER_REMOVED',
  NotificationUserSignUp = 'NOTIFICATION_USER_SIGN_UP',
}

export enum PreferenceValueType {
  Boolean = 'BOOLEAN',
  Float = 'FLOAT',
  Int = 'INT',
  String = 'STRING',
}

export type Profile = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** A description of the entity associated with this profile. */
  description?: Maybe<Scalars['Markdown']>;
  /** The display name. */
  displayName: Scalars['String'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** The location for this Profile. */
  location?: Maybe<Location>;
  /** A list of URLs to relevant information. */
  references?: Maybe<Array<Reference>>;
  /** The taglie for this entity. */
  tagline: Scalars['String'];
  /** The default tagset. */
  tagset?: Maybe<Tagset>;
  /** A list of named tagsets, each of which has a list of tags. */
  tagsets?: Maybe<Array<Tagset>>;
  /** A particular type of visual for this Profile. */
  visual?: Maybe<Visual>;
  /** A list of visuals for this Profile. */
  visuals: Array<Visual>;
};

export type ProfileVisualArgs = {
  type: VisualType;
};

export type ProfileCredentialVerified = {
  /** The email */
  userEmail: Scalars['String'];
  /** The vc. */
  vc: Scalars['String'];
};

export type Project = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  description?: Maybe<Scalars['String']>;
  /** The display name. */
  displayName: Scalars['String'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** The maturity phase of the project i.e. new, being refined, committed, in-progress, closed etc */
  lifecycle?: Maybe<Lifecycle>;
  /** A name identifier of the entity, unique within a given scope. */
  nameID: Scalars['NameID'];
  /** The set of tags for the project */
  tagset?: Maybe<Tagset>;
};

export type ProjectEventInput = {
  /** The ID of the entity to which the event is sent */
  ID: Scalars['String'];
  /** The name of the event. Simple text and matching an event in the Lifecycle definition. */
  eventName: Scalars['String'];
};

export type Query = {
  /** Retrieve the ActivityLog for the specified Collaboration */
  activityLogOnCollaboration: Array<ActivityLogEntry>;
  /** All Users that are members of a given room */
  adminCommunicationMembership: CommunicationAdminMembershipResult;
  /** Usage of the messaging platform that are not tied to the domain model. */
  adminCommunicationOrphanedUsage: CommunicationAdminOrphanedUsageResult;
  /** The authorization policy for the platform */
  authorization: Authorization;
  /** A specific Collaboration entity. */
  collaboration: Collaboration;
  /** A specific Community entity. */
  community: Community;
  /** Alkemio configuration. Provides configuration to external services in the Alkemio ecosystem. */
  configuration: Config;
  /** A specific Context entity. */
  context: Context;
  /** Get supported credential metadata */
  getSupportedVerifiedCredentialMetadata: Array<CredentialMetadataOutput>;
  /** An hub. If no ID is specified then the first Hub is returned. */
  hub: Hub;
  /** The Hubs on this platform */
  hubs: Array<Hub>;
  /** The currently logged in user */
  me: User;
  /** Check if the currently logged in user has a User profile */
  meHasProfile: Scalars['Boolean'];
  /** Alkemio Services Metadata */
  metadata: Metadata;
  /** A particular Organization */
  organization: Organization;
  /** The Organizations on this platform */
  organizations: Array<Organization>;
  /** The Organizations on this platform in paginated format */
  organizationsPaginated: PaginatedOrganization;
  /** Alkemio Platform */
  platform: Platform;
  /** The roles that the specified Organization has. */
  rolesOrganization: ContributorRoles;
  /** The roles that that the specified User has. */
  rolesUser: ContributorRoles;
  /** Search the platform for terms supplied */
  search: ISearchResults;
  /** A particular user, identified by the ID or by email */
  user: User;
  /** Privileges assigned to a User (based on held credentials) given an Authorization defnition. */
  userAuthorizationPrivileges: Array<AuthorizationPrivilege>;
  /** The users who have profiles on this platform */
  users: Array<User>;
  /** The users filtered by list of IDs. */
  usersById: Array<User>;
  /** The users who have profiles on this platform */
  usersPaginated: PaginatedUsers;
  /** All Users that hold credentials matching the supplied criteria. */
  usersWithAuthorizationCredential: Array<User>;
};

export type QueryActivityLogOnCollaborationArgs = {
  queryData: ActivityLogInput;
};

export type QueryAdminCommunicationMembershipArgs = {
  communicationData: CommunicationAdminMembershipInput;
};

export type QueryCollaborationArgs = {
  ID: Scalars['UUID'];
};

export type QueryCommunityArgs = {
  ID: Scalars['UUID'];
};

export type QueryContextArgs = {
  ID: Scalars['UUID'];
};

export type QueryHubArgs = {
  ID: Scalars['UUID_NAMEID'];
};

export type QueryHubsArgs = {
  IDs?: InputMaybe<Array<Scalars['UUID']>>;
  filter?: InputMaybe<HubFilterInput>;
};

export type QueryOrganizationArgs = {
  ID: Scalars['UUID_NAMEID'];
};

export type QueryOrganizationsArgs = {
  filter?: InputMaybe<ContributorFilterInput>;
  limit?: InputMaybe<Scalars['Float']>;
  shuffle?: InputMaybe<Scalars['Boolean']>;
};

export type QueryOrganizationsPaginatedArgs = {
  after?: InputMaybe<Scalars['UUID']>;
  before?: InputMaybe<Scalars['UUID']>;
  filter?: InputMaybe<OrganizationFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type QueryRolesOrganizationArgs = {
  rolesData: RolesOrganizationInput;
};

export type QueryRolesUserArgs = {
  rolesData: RolesUserInput;
};

export type QuerySearchArgs = {
  searchData: SearchInput;
};

export type QueryUserArgs = {
  ID: Scalars['UUID_NAMEID_EMAIL'];
};

export type QueryUserAuthorizationPrivilegesArgs = {
  userAuthorizationPrivilegesData: UserAuthorizationPrivilegesInput;
};

export type QueryUsersArgs = {
  filter?: InputMaybe<ContributorFilterInput>;
  limit?: InputMaybe<Scalars['Float']>;
  shuffle?: InputMaybe<Scalars['Boolean']>;
};

export type QueryUsersByIdArgs = {
  IDs: Array<Scalars['UUID']>;
};

export type QueryUsersPaginatedArgs = {
  after?: InputMaybe<Scalars['UUID']>;
  before?: InputMaybe<Scalars['UUID']>;
  filter?: InputMaybe<UserFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type QueryUsersWithAuthorizationCredentialArgs = {
  credentialsCriteriaData: UsersWithAuthorizationCredentialInput;
};

export type Question = {
  /** The ID of the entity */
  id: Scalars['UUID'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type QuestionTemplate = {
  /** Question template. */
  question: Scalars['String'];
  /** Is question required? */
  required: Scalars['Boolean'];
  /** Sorting order for the question. Lower is first. */
  sortOrder?: Maybe<Scalars['Float']>;
};

export type Reference = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** Description of this reference */
  description?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** Name of the reference, e.g. Linkedin, Twitter etc. */
  name: Scalars['String'];
  /** URI of the reference */
  uri: Scalars['String'];
};

export type Relation = {
  actorName: Scalars['String'];
  actorRole: Scalars['String'];
  actorType: Scalars['String'];
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  description: Scalars['String'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  type: Scalars['String'];
};

export type RelayPaginatedUser = {
  /** The unique personal identifier (upn) for the account associated with this user profile */
  accountUpn: Scalars['String'];
  /** The Agent representing this User. */
  agent?: Maybe<Agent>;
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The Community rooms this user is a member of */
  communityRooms?: Maybe<Array<CommunicationRoom>>;
  /** The direct rooms this user is a member of */
  directRooms?: Maybe<Array<DirectRoom>>;
  /** The email address for this User. */
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** Can a message be sent to this User. */
  isContactable: Scalars['Boolean'];
  lastName: Scalars['String'];
  /** A name identifier of the entity, unique within a given scope. */
  nameID: Scalars['NameID'];
  /** The phone number for this User. */
  phone: Scalars['String'];
  /** The preferences for this user */
  preferences: Array<Preference>;
  /** The Profile for this User. */
  profile: Profile;
};

export type RelayPaginatedUserEdge = {
  node: RelayPaginatedUser;
};

export type RelayPaginatedUserPageInfo = {
  /** The last cursor of the page result */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicate whether more items exist after the returned ones */
  hasNextPage: Scalars['Boolean'];
  /** Indicate whether more items exist before the returned ones */
  hasPreviousPage: Scalars['Boolean'];
  /** The first cursor of the page result */
  startCursor?: Maybe<Scalars['String']>;
};

export type RemoveChallengeAdminInput = {
  challengeID: Scalars['UUID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type RemoveCommunityLeadOrganizationInput = {
  communityID: Scalars['UUID'];
  organizationID: Scalars['UUID_NAMEID'];
};

export type RemoveCommunityLeadUserInput = {
  communityID: Scalars['UUID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type RemoveCommunityMemberOrganizationInput = {
  communityID: Scalars['UUID'];
  organizationID: Scalars['UUID_NAMEID'];
};

export type RemoveCommunityMemberUserInput = {
  communityID: Scalars['UUID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type RemoveGlobalAdminInput = {
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type RemoveGlobalCommunityAdminInput = {
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type RemoveGlobalHubsAdminInput = {
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type RemoveHubAdminInput = {
  hubID: Scalars['UUID_NAMEID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type RemoveOpportunityAdminInput = {
  opportunityID: Scalars['UUID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type RemoveOrganizationAdminInput = {
  organizationID: Scalars['UUID_NAMEID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type RemoveOrganizationAssociateInput = {
  organizationID: Scalars['UUID_NAMEID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type RemoveOrganizationOwnerInput = {
  organizationID: Scalars['UUID_NAMEID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type RemoveUserGroupMemberInput = {
  groupID: Scalars['UUID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type RevokeAuthorizationCredentialInput = {
  /** The resource to which access is being removed. */
  resourceID: Scalars['String'];
  type: AuthorizationCredential;
  /** The user from whom the credential is being removed. */
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type RolesOrganizationInput = {
  /** Return membership in Hubs matching the provided filter. */
  filter?: InputMaybe<HubFilterInput>;
  /** The ID of the organization to retrieve the roles of. */
  organizationID: Scalars['UUID_NAMEID'];
};

export type RolesResult = {
  /** Display name of the entity */
  displayName: Scalars['String'];
  /** A unique identifier for this membership result. */
  id: Scalars['String'];
  /** Name Identifier of the entity */
  nameID: Scalars['NameID'];
  /** The roles held by the contributor */
  roles: Array<Scalars['String']>;
};

export type RolesResultCommunity = {
  /** Display name of the entity */
  displayName: Scalars['String'];
  /** A unique identifier for this membership result. */
  id: Scalars['String'];
  /** Name Identifier of the entity */
  nameID: Scalars['NameID'];
  /** The roles held by the contributor */
  roles: Array<Scalars['String']>;
  /** Details of the Groups in the Organizations the user is a member of */
  userGroups: Array<RolesResult>;
};

export type RolesResultHub = {
  /** Details of the Challenges the user is a member of */
  challenges: Array<RolesResultCommunity>;
  /** Display name of the entity */
  displayName: Scalars['String'];
  /** The Hub ID */
  hubID: Scalars['String'];
  /** A unique identifier for this membership result. */
  id: Scalars['String'];
  /** Name Identifier of the entity */
  nameID: Scalars['NameID'];
  /** Details of the Opportunities the Contributor is a member of */
  opportunities: Array<RolesResultCommunity>;
  /** The roles held by the contributor */
  roles: Array<Scalars['String']>;
  /** Details of the Groups in the Organizations the user is a member of */
  userGroups: Array<RolesResult>;
  /** Visibility of the Hub. */
  visibility: HubVisibility;
};

export type RolesResultOrganization = {
  /** Display name of the entity */
  displayName: Scalars['String'];
  /** A unique identifier for this membership result. */
  id: Scalars['String'];
  /** Name Identifier of the entity */
  nameID: Scalars['NameID'];
  /** The Organization ID. */
  organizationID: Scalars['String'];
  /** The roles held by the contributor */
  roles: Array<Scalars['String']>;
  /** Details of the Groups in the Organizations the user is a member of */
  userGroups: Array<RolesResult>;
};

export type RolesUserInput = {
  /** Return membership in Hubs matching the provided filter. */
  filter?: InputMaybe<HubFilterInput>;
  /** The ID of the user to retrieve the roles of. */
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type SearchInput = {
  /** Restrict the search to only the specified Hub. Default is all Hubs. */
  searchInHubFilter?: InputMaybe<Scalars['UUID_NAMEID']>;
  /** Expand the search to includes Tagsets with the provided names. Max 2. */
  tagsetNames?: InputMaybe<Array<Scalars['String']>>;
  /** The terms to be searched for within this Hub. Max 5. */
  terms: Array<Scalars['String']>;
  /** Restrict the search to only the specified entity types. Values allowed: user, group, organization, Default is all. */
  typesFilter?: InputMaybe<Array<Scalars['String']>>;
};

export type SearchResult = {
  id: Scalars['UUID'];
  /** The score for this search result; more matches means a higher score. */
  score: Scalars['Float'];
  /** The terms that were matched for this result */
  terms: Array<Scalars['String']>;
  /** The event type for this Activity. */
  type: SearchResultType;
};

export type SearchResultCard = SearchResult & {
  /** The Callout of the Card. */
  callout: Callout;
  /** The Card that was found. */
  card: Aspect;
  /** The Challenge of the Card. Applicable for Callouts on Opportunities and Challenges. */
  challenge?: Maybe<Challenge>;
  /** The Hub of the Card. */
  hub: Hub;
  id: Scalars['UUID'];
  /** The Opportunity of the Card. Applicable only for Callouts on Opportunities. */
  opportunity?: Maybe<Opportunity>;
  /** The score for this search result; more matches means a higher score. */
  score: Scalars['Float'];
  /** The terms that were matched for this result */
  terms: Array<Scalars['String']>;
  /** The event type for this Activity. */
  type: SearchResultType;
};

export type SearchResultChallenge = SearchResult & {
  /** The Challenge that was found. */
  challenge: Challenge;
  /** The Hub that the Challenge is in. */
  hub: Hub;
  id: Scalars['UUID'];
  /** The score for this search result; more matches means a higher score. */
  score: Scalars['Float'];
  /** The terms that were matched for this result */
  terms: Array<Scalars['String']>;
  /** The event type for this Activity. */
  type: SearchResultType;
};

export type SearchResultHub = SearchResult & {
  /** The Hub that was found. */
  hub: Hub;
  id: Scalars['UUID'];
  /** The score for this search result; more matches means a higher score. */
  score: Scalars['Float'];
  /** The terms that were matched for this result */
  terms: Array<Scalars['String']>;
  /** The event type for this Activity. */
  type: SearchResultType;
};

export type SearchResultOpportunity = SearchResult & {
  /** The Challenge that the Opportunity is in. */
  challenge: Challenge;
  /** The Hub that the Opportunity is in. */
  hub: Hub;
  id: Scalars['UUID'];
  /** The Opportunity that was found. */
  opportunity: Opportunity;
  /** The score for this search result; more matches means a higher score. */
  score: Scalars['Float'];
  /** The terms that were matched for this result */
  terms: Array<Scalars['String']>;
  /** The event type for this Activity. */
  type: SearchResultType;
};

export type SearchResultOrganization = SearchResult & {
  id: Scalars['UUID'];
  /** The Organization that was found. */
  organization: Organization;
  /** The score for this search result; more matches means a higher score. */
  score: Scalars['Float'];
  /** The terms that were matched for this result */
  terms: Array<Scalars['String']>;
  /** The event type for this Activity. */
  type: SearchResultType;
};

export enum SearchResultType {
  Card = 'CARD',
  Challenge = 'CHALLENGE',
  Hub = 'HUB',
  Opportunity = 'OPPORTUNITY',
  Organization = 'ORGANIZATION',
  User = 'USER',
  Usergroup = 'USERGROUP',
}

export type SearchResultUser = SearchResult & {
  id: Scalars['UUID'];
  /** The score for this search result; more matches means a higher score. */
  score: Scalars['Float'];
  /** The terms that were matched for this result */
  terms: Array<Scalars['String']>;
  /** The event type for this Activity. */
  type: SearchResultType;
  /** The User that was found. */
  user: User;
};

export type SearchResultUserGroup = SearchResult & {
  id: Scalars['UUID'];
  /** The score for this search result; more matches means a higher score. */
  score: Scalars['Float'];
  /** The terms that were matched for this result */
  terms: Array<Scalars['String']>;
  /** The event type for this Activity. */
  type: SearchResultType;
  /** The User Group that was found. */
  userGroup: UserGroup;
};

export type SendMessageOnCalloutInput = {
  /** The Callout the message is being sent to */
  calloutID: Scalars['UUID'];
  /** The message contents */
  message: Scalars['String'];
};

export type Sentry = {
  /** Flag indicating if the client should use Sentry for monitoring. */
  enabled: Scalars['Boolean'];
  /** URL to the Sentry endpoint. */
  endpoint: Scalars['String'];
  /** Flag indicating if PII should be submitted on Sentry events. */
  submitPII: Scalars['Boolean'];
};

export type ServiceMetadata = {
  /** Service name e.g. CT Server */
  name?: Maybe<Scalars['String']>;
  /** Version in the format {major.minor.patch} - using SemVer. */
  version?: Maybe<Scalars['String']>;
};

export type StorageConfig = {
  /** Config for uploading files to Alkemio. */
  file: FileStorageConfig;
};

export type Subscription = {
  activityCreated: ActivityCreatedSubscriptionResult;
  /** Receive new comment on Aspect */
  aspectCommentsMessageReceived: AspectCommentsMessageReceived;
  /** Receive new comment on CalendarEvent */
  calendarEventCommentsMessageReceived: CalendarEventCommentsMessageReceived;
  /** Receive new Update messages on Communities the currently authenticated User is a member of. */
  calloutAspectCreated: CalloutAspectCreated;
  /** Receive comments on Callouts */
  calloutMessageReceived: CalloutMessageReceived;
  /** Receive updated content of a canvas */
  canvasContentUpdated: CanvasContentUpdated;
  /** Receive new Challenges created on the Hub. */
  challengeCreated: ChallengeCreated;
  /** Receive new Discussion messages */
  communicationDiscussionMessageReceived: CommunicationDiscussionMessageReceived;
  /** Receive updates on Discussions */
  communicationDiscussionUpdated: Discussion;
  /** Receive new Update messages on Communities the currently authenticated User is a member of. */
  communicationUpdateMessageReceived: CommunicationUpdateMessageReceived;
  /** Receive new Opportunities created on the Challenge. */
  opportunityCreated: OpportunityCreated;
  /** Received on verified credentials change */
  profileVerifiedCredential: ProfileCredentialVerified;
};

export type SubscriptionActivityCreatedArgs = {
  collaborationID: Scalars['UUID'];
};

export type SubscriptionAspectCommentsMessageReceivedArgs = {
  aspectID: Scalars['UUID'];
};

export type SubscriptionCalendarEventCommentsMessageReceivedArgs = {
  calendarEventID: Scalars['UUID'];
};

export type SubscriptionCalloutAspectCreatedArgs = {
  calloutID: Scalars['UUID'];
};

export type SubscriptionCalloutMessageReceivedArgs = {
  calloutIDs: Array<Scalars['UUID']>;
};

export type SubscriptionCanvasContentUpdatedArgs = {
  canvasIDs?: InputMaybe<Array<Scalars['UUID']>>;
};

export type SubscriptionChallengeCreatedArgs = {
  hubID: Scalars['UUID_NAMEID'];
};

export type SubscriptionCommunicationDiscussionMessageReceivedArgs = {
  discussionID: Scalars['UUID'];
};

export type SubscriptionCommunicationDiscussionUpdatedArgs = {
  communicationID: Scalars['UUID'];
};

export type SubscriptionCommunicationUpdateMessageReceivedArgs = {
  updatesIDs?: InputMaybe<Array<Scalars['UUID']>>;
};

export type SubscriptionOpportunityCreatedArgs = {
  challengeID: Scalars['UUID'];
};

export type Tagset = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  name: Scalars['String'];
  tags: Array<Scalars['String']>;
};

export type TagsetTemplate = {
  /** Tagset template name. */
  name: Scalars['String'];
  /** Tagset placeholder */
  placeholder?: Maybe<Scalars['String']>;
};

export type Template = {
  /** Challenge templates. */
  challenges: Array<ChallengeTemplate>;
  /** Template description. */
  description: Scalars['String'];
  /** Template name. */
  name: Scalars['String'];
  /** Opportunity templates. */
  opportunities: Array<OpportunityTemplate>;
  /** Challenge templates. */
  organizations: Array<OrganizationTemplate>;
  /** User templates. */
  users: Array<UserTemplate>;
};

export type TemplateInfo = {
  /** The description for this Template. */
  description: Scalars['Markdown'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** The tags set on this Template. */
  tagset?: Maybe<Tagset>;
  /** The title for this Template. */
  title: Scalars['String'];
  /** The image associated with this Template`. */
  visual?: Maybe<Visual>;
};

export type TemplatesSet = {
  /** A single AspectTemplate */
  aspectTemplate?: Maybe<AspectTemplate>;
  /** The AspectTemplates in this TemplatesSet. */
  aspectTemplates: Array<AspectTemplate>;
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** A single CanvasTemplate */
  canvasTemplate?: Maybe<CanvasTemplate>;
  /** The CanvasTemplates in this TemplatesSet. */
  canvasTemplates: Array<CanvasTemplate>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** A single LifecycleTemplate */
  lifecycleTemplate?: Maybe<LifecycleTemplate>;
  /** The LifecycleTemplates in this TemplatesSet. */
  lifecycleTemplates: Array<LifecycleTemplate>;
  /** The policy for this TemplatesSet. */
  policy?: Maybe<TemplatesSetPolicy>;
};

export type TemplatesSetAspectTemplateArgs = {
  ID: Scalars['UUID'];
};

export type TemplatesSetCanvasTemplateArgs = {
  ID: Scalars['UUID'];
};

export type TemplatesSetLifecycleTemplateArgs = {
  ID: Scalars['UUID'];
};

export type TemplatesSetPolicy = {
  minInnovationFlow: Scalars['Float'];
};

export type Timeline = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The Innovation Library for the timeline */
  calendar: Calendar;
  /** The ID of the entity */
  id: Scalars['UUID'];
};

export type UpdateActorInput = {
  ID: Scalars['UUID'];
  description?: InputMaybe<Scalars['String']>;
  impact?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type UpdateAspectInput = {
  ID: Scalars['UUID'];
  /** A display identifier, unique within the containing scope. Note: updating the nameID will affect URL on the client. */
  nameID?: InputMaybe<Scalars['NameID']>;
  /** Update the Profile of the Card. */
  profileData?: InputMaybe<UpdateProfileInput>;
  type?: InputMaybe<Scalars['String']>;
};

export type UpdateAspectTemplateInput = {
  ID: Scalars['UUID'];
  /** The default description to be pre-filled when users create Aspects based on this template. */
  defaultDescription?: InputMaybe<Scalars['Markdown']>;
  /** The meta information for this Template. */
  info?: InputMaybe<UpdateTemplateInfoInput>;
  /** The type of Aspects created from this Template. */
  type?: InputMaybe<Scalars['String']>;
};

export type UpdateCalendarEventInput = {
  ID: Scalars['UUID'];
  /** The length of the event in days. */
  durationDays?: InputMaybe<Scalars['Float']>;
  /** The length of the event in minutes. */
  durationMinutes: Scalars['Float'];
  /** Flag to indicate if this event is for multiple days. */
  multipleDays: Scalars['Boolean'];
  /** A display identifier, unique within the containing scope. Note: updating the nameID will affect URL on the client. */
  nameID?: InputMaybe<Scalars['NameID']>;
  /** Update the Profile of the Card. */
  profileData?: InputMaybe<UpdateProfileInput>;
  /** The state date for the event. */
  startDate: Scalars['DateTime'];
  type?: InputMaybe<CalendarEventType>;
  /** Flag to indicate if this event is for a whole day. */
  wholeDay: Scalars['Boolean'];
};

export type UpdateCalloutCanvasTemplateInput = {
  /** The meta information for this Template. */
  info?: InputMaybe<UpdateTemplateInfoInput>;
  value?: InputMaybe<Scalars['JSON']>;
};

export type UpdateCalloutCardTemplateInput = {
  /** The default description to be pre-filled when users create Aspects based on this template. */
  defaultDescription?: InputMaybe<Scalars['Markdown']>;
  /** The meta information for this Template. */
  info?: InputMaybe<UpdateTemplateInfoInput>;
  /** The type of Aspects created from this Template. */
  type?: InputMaybe<Scalars['String']>;
};

export type UpdateCalloutInput = {
  ID: Scalars['UUID'];
  /** CanvasTemplate data for this Callout. */
  canvasTemplate?: InputMaybe<UpdateCalloutCanvasTemplateInput>;
  /** CardTemplate data for this Callout. */
  cardTemplate?: InputMaybe<UpdateCalloutCardTemplateInput>;
  /** Callout description. */
  description?: InputMaybe<Scalars['Markdown']>;
  /** The display name for this entity. */
  displayName?: InputMaybe<Scalars['String']>;
  /** A display identifier, unique within the containing scope. Note: updating the nameID will affect URL on the client. */
  nameID?: InputMaybe<Scalars['NameID']>;
  /** The sort order to assign to this Callout. */
  sortOrder?: InputMaybe<Scalars['Float']>;
  /** State of the callout. */
  state?: InputMaybe<CalloutState>;
};

export type UpdateCalloutPublishInfoInput = {
  /** The identifier for the Callout whose publisher is to be updated. */
  calloutID: Scalars['String'];
  /** The timestamp to set for the publishing of the Callout. */
  publishDate?: InputMaybe<Scalars['Float']>;
  /** The identifier of the publisher of the Callout. */
  publisherID?: InputMaybe<Scalars['UUID_NAMEID_EMAIL']>;
};

export type UpdateCalloutVisibilityInput = {
  /** The identifier for the Callout whose visibility is to be updated. */
  calloutID: Scalars['String'];
  /** Send a notification on publishing. */
  sendNotification?: InputMaybe<Scalars['Boolean']>;
  /** Visibility of the Callout. */
  visibility: CalloutVisibility;
};

export type UpdateCanvasDirectInput = {
  ID: Scalars['UUID'];
  /** The display name for this entity. */
  displayName?: InputMaybe<Scalars['String']>;
  /** A display identifier, unique within the containing scope. Note: updating the nameID will affect URL on the client. */
  nameID?: InputMaybe<Scalars['NameID']>;
  value?: InputMaybe<Scalars['String']>;
};

export type UpdateCanvasTemplateInput = {
  ID: Scalars['UUID'];
  /** The meta information for this Template. */
  info?: InputMaybe<UpdateTemplateInfoInput>;
  value?: InputMaybe<Scalars['JSON']>;
};

export type UpdateChallengeInnovationFlowInput = {
  /** ID of the Challenge */
  challengeID: Scalars['UUID'];
  /** The Innovation Flow template to use for the Challenge. */
  innovationFlowTemplateID: Scalars['UUID'];
};

export type UpdateChallengeInput = {
  ID: Scalars['UUID'];
  /** Update the contained Context entity. */
  context?: InputMaybe<UpdateContextInput>;
  /** The display name for this entity. */
  displayName?: InputMaybe<Scalars['String']>;
  /** A display identifier, unique within the containing scope. Note: updating the nameID will affect URL on the client. */
  nameID?: InputMaybe<Scalars['NameID']>;
  /** Update the tags on the Tagset. */
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateChallengePreferenceInput = {
  /** ID of the Challenge */
  challengeID: Scalars['UUID'];
  /** Type of the challenge preference */
  type: ChallengePreferenceType;
  value: Scalars['String'];
};

export type UpdateCommunityApplicationFormInput = {
  communityID: Scalars['UUID'];
  formData: UpdateFormInput;
};

export type UpdateContextInput = {
  background?: InputMaybe<Scalars['Markdown']>;
  impact?: InputMaybe<Scalars['Markdown']>;
  location?: InputMaybe<UpdateLocationInput>;
  /** Update the set of Recommendations for the Context. */
  recommendations?: InputMaybe<Array<UpdateReferenceInput>>;
  /** Update the set of References for the Context. */
  references?: InputMaybe<Array<UpdateReferenceInput>>;
  tagline?: InputMaybe<Scalars['String']>;
  vision?: InputMaybe<Scalars['Markdown']>;
  who?: InputMaybe<Scalars['Markdown']>;
};

export type UpdateDiscussionInput = {
  ID: Scalars['UUID'];
  /** The category for the Discussion */
  category?: InputMaybe<DiscussionCategory>;
  /** The description for the Discussion */
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateEcosystemModelInput = {
  ID: Scalars['UUID'];
  description?: InputMaybe<Scalars['String']>;
};

export type UpdateFormInput = {
  description: Scalars['Markdown'];
  questions: Array<UpdateFormQuestionInput>;
};

export type UpdateFormQuestionInput = {
  /** The explation text to clarify the question. */
  explanation: Scalars['String'];
  /** The maxiumum length of the answer, in characters, up to a limit of 512. */
  maxLength: Scalars['Float'];
  /** The question to be answered */
  question: Scalars['String'];
  /** Whether an answer is required for this Question. */
  required: Scalars['Boolean'];
  /** The sort order of this question in a wider set of questions. */
  sortOrder: Scalars['Float'];
};

export type UpdateHubInput = {
  /** The ID or NameID of the Hub. */
  ID: Scalars['UUID_NAMEID'];
  /** Update the contained Context entity. */
  context?: InputMaybe<UpdateContextInput>;
  /** The display name for this entity. */
  displayName?: InputMaybe<Scalars['String']>;
  /** Update the host Organization for the Hub. */
  hostID?: InputMaybe<Scalars['UUID_NAMEID']>;
  /** A display identifier, unique within the containing scope. Note: updating the nameID will affect URL on the client. */
  nameID?: InputMaybe<Scalars['NameID']>;
  /** Update the tags on the Tagset. */
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateHubPreferenceInput = {
  /** ID of the Hub */
  hubID: Scalars['UUID_NAMEID'];
  /** Type of the user preference */
  type: HubPreferenceType;
  value: Scalars['String'];
};

export type UpdateHubVisibilityInput = {
  /** The identifier for the Hub whose visibility is to be updated. */
  hubID: Scalars['String'];
  /** Visibility of the Hub. */
  visibility: HubVisibility;
};

export type UpdateInnovationPackInput = {
  /** The ID or NameID of the InnovationPack. */
  ID: Scalars['UUID_NAMEID'];
  /** The display name for this entity. */
  displayName?: InputMaybe<Scalars['String']>;
  /** A display identifier, unique within the containing scope. Note: updating the nameID will affect URL on the client. */
  nameID?: InputMaybe<Scalars['NameID']>;
  /** Update the provider Organization for the InnovationPack. */
  providerOrgID?: InputMaybe<Scalars['UUID_NAMEID']>;
};

export type UpdateLifecycleTemplateInput = {
  ID: Scalars['UUID'];
  /** The XState definition for this LifecycleTemplate. */
  definition?: InputMaybe<Scalars['LifecycleDefinition']>;
  /** The meta information for this Template. */
  info?: InputMaybe<UpdateTemplateInfoInput>;
};

export type UpdateLocationInput = {
  addressLine1?: InputMaybe<Scalars['String']>;
  addressLine2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  stateOrProvince?: InputMaybe<Scalars['String']>;
};

export type UpdateOpportunityInnovationFlowInput = {
  /** The Innovation Flow template to use for the Opportunity. */
  innovationFlowTemplateID: Scalars['UUID'];
  /** ID of the Opportunity */
  opportunityID: Scalars['UUID'];
};

export type UpdateOpportunityInput = {
  ID: Scalars['UUID'];
  /** Update the contained Context entity. */
  context?: InputMaybe<UpdateContextInput>;
  /** The display name for this entity. */
  displayName?: InputMaybe<Scalars['String']>;
  /** A display identifier, unique within the containing scope. Note: updating the nameID will affect URL on the client. */
  nameID?: InputMaybe<Scalars['NameID']>;
  /** Update the tags on the Tagset. */
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateOrganizationInput = {
  /** The ID or NameID of the Organization to update. */
  ID: Scalars['UUID_NAMEID'];
  contactEmail?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  legalEntityName?: InputMaybe<Scalars['String']>;
  /** A display identifier, unique within the containing scope. Note: updating the nameID will affect URL on the client. */
  nameID?: InputMaybe<Scalars['NameID']>;
  profileData?: InputMaybe<UpdateProfileInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UpdateOrganizationPreferenceInput = {
  /** ID of the Organization */
  organizationID: Scalars['UUID_NAMEID'];
  /** Type of the organization preference */
  type: OrganizationPreferenceType;
  value: Scalars['String'];
};

export type UpdateProfileDirectInput = {
  description?: InputMaybe<Scalars['Markdown']>;
  /** The display name for the entity. */
  displayName?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<UpdateLocationInput>;
  profileID: Scalars['UUID'];
  references?: InputMaybe<Array<UpdateReferenceInput>>;
  /** A memorable short description for this entity. */
  tagline?: InputMaybe<Scalars['String']>;
  tagsets?: InputMaybe<Array<UpdateTagsetInput>>;
};

export type UpdateProfileInput = {
  description?: InputMaybe<Scalars['Markdown']>;
  /** The display name for the entity. */
  displayName?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<UpdateLocationInput>;
  references?: InputMaybe<Array<UpdateReferenceInput>>;
  /** A memorable short description for this entity. */
  tagline?: InputMaybe<Scalars['String']>;
  tagsets?: InputMaybe<Array<UpdateTagsetInput>>;
};

export type UpdateProjectInput = {
  ID: Scalars['UUID'];
  description?: InputMaybe<Scalars['String']>;
  /** The display name for this entity. */
  displayName?: InputMaybe<Scalars['String']>;
  /** A display identifier, unique within the containing scope. Note: updating the nameID will affect URL on the client. */
  nameID?: InputMaybe<Scalars['NameID']>;
};

export type UpdateReferenceInput = {
  ID: Scalars['UUID'];
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  uri?: InputMaybe<Scalars['String']>;
};

export type UpdateTagsetInput = {
  ID: Scalars['UUID'];
  name?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateTemplateInfoInput = {
  description?: InputMaybe<Scalars['Markdown']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  visualUri?: InputMaybe<Scalars['String']>;
};

export type UpdateUserGroupInput = {
  ID: Scalars['UUID'];
  name?: InputMaybe<Scalars['String']>;
  profileData?: InputMaybe<UpdateProfileInput>;
};

export type UpdateUserInput = {
  ID: Scalars['UUID_NAMEID_EMAIL'];
  accountUpn?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  /** A display identifier, unique within the containing scope. Note: updating the nameID will affect URL on the client. */
  nameID?: InputMaybe<Scalars['NameID']>;
  phone?: InputMaybe<Scalars['String']>;
  profileData?: InputMaybe<UpdateProfileInput>;
  /** Set this user profile as being used as a service account or not. */
  serviceProfile?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateUserPreferenceInput = {
  /** Type of the user preference */
  type: UserPreferenceType;
  /** ID of the User */
  userID: Scalars['UUID_NAMEID_EMAIL'];
  value: Scalars['String'];
};

export type UpdateVisualInput = {
  uri: Scalars['String'];
  visualID: Scalars['String'];
};

export type Updates = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** Messages in this Updates. */
  messages?: Maybe<Array<Message>>;
};

export type UpdatesRemoveMessageInput = {
  /** The message id that should be removed */
  messageID: Scalars['String'];
  /** The Updates the message is being removed from. */
  updatesID: Scalars['UUID'];
};

export type UpdatesSendMessageInput = {
  /** The message being sent */
  message: Scalars['String'];
  /** The Updates the message is being sent to */
  updatesID: Scalars['UUID'];
};

export type User = {
  /** The unique personal identifier (upn) for the account associated with this user profile */
  accountUpn: Scalars['String'];
  /** The Agent representing this User. */
  agent?: Maybe<Agent>;
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The Community rooms this user is a member of */
  communityRooms?: Maybe<Array<CommunicationRoom>>;
  /** The direct rooms this user is a member of */
  directRooms?: Maybe<Array<DirectRoom>>;
  /** The email address for this User. */
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** Can a message be sent to this User. */
  isContactable: Scalars['Boolean'];
  lastName: Scalars['String'];
  /** A name identifier of the entity, unique within a given scope. */
  nameID: Scalars['NameID'];
  /** The phone number for this User. */
  phone: Scalars['String'];
  /** The preferences for this user */
  preferences: Array<Preference>;
  /** The Profile for this User. */
  profile: Profile;
};

export type UserAuthorizationPrivilegesInput = {
  /** The authorization definition to evaluate the user credentials against. */
  authorizationID: Scalars['UUID'];
  /** The user to evaluate privileges granted based on held credentials. */
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type UserAuthorizationResetInput = {
  /** The identifier of the User whose Authorization Policy should be reset. */
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type UserFilterInput = {
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type UserGroup = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** The Users that are members of this User Group. */
  members?: Maybe<Array<User>>;
  name: Scalars['String'];
  /** Containing entity for this UserGroup. */
  parent?: Maybe<Groupable>;
  /** The profile for the user group */
  profile?: Maybe<Profile>;
};

export enum UserPreferenceType {
  NotificationApplicationReceived = 'NOTIFICATION_APPLICATION_RECEIVED',
  NotificationApplicationSubmitted = 'NOTIFICATION_APPLICATION_SUBMITTED',
  NotificationAspectCommentCreated = 'NOTIFICATION_ASPECT_COMMENT_CREATED',
  NotificationAspectCreated = 'NOTIFICATION_ASPECT_CREATED',
  NotificationAspectCreatedAdmin = 'NOTIFICATION_ASPECT_CREATED_ADMIN',
  NotificationCalloutPublished = 'NOTIFICATION_CALLOUT_PUBLISHED',
  NotificationCanvasCreated = 'NOTIFICATION_CANVAS_CREATED',
  NotificationCommunicationDiscussionCreated = 'NOTIFICATION_COMMUNICATION_DISCUSSION_CREATED',
  NotificationCommunicationDiscussionCreatedAdmin = 'NOTIFICATION_COMMUNICATION_DISCUSSION_CREATED_ADMIN',
  NotificationCommunicationDiscussionResponse = 'NOTIFICATION_COMMUNICATION_DISCUSSION_RESPONSE',
  NotificationCommunicationMention = 'NOTIFICATION_COMMUNICATION_MENTION',
  NotificationCommunicationMessage = 'NOTIFICATION_COMMUNICATION_MESSAGE',
  NotificationCommunicationUpdates = 'NOTIFICATION_COMMUNICATION_UPDATES',
  NotificationCommunicationUpdateSentAdmin = 'NOTIFICATION_COMMUNICATION_UPDATE_SENT_ADMIN',
  NotificationCommunityCollaborationInterestAdmin = 'NOTIFICATION_COMMUNITY_COLLABORATION_INTEREST_ADMIN',
  NotificationCommunityCollaborationInterestUser = 'NOTIFICATION_COMMUNITY_COLLABORATION_INTEREST_USER',
  NotificationCommunityNewMember = 'NOTIFICATION_COMMUNITY_NEW_MEMBER',
  NotificationCommunityNewMemberAdmin = 'NOTIFICATION_COMMUNITY_NEW_MEMBER_ADMIN',
  NotificationCommunityReviewSubmitted = 'NOTIFICATION_COMMUNITY_REVIEW_SUBMITTED',
  NotificationCommunityReviewSubmittedAdmin = 'NOTIFICATION_COMMUNITY_REVIEW_SUBMITTED_ADMIN',
  NotificationDiscussionCommentCreated = 'NOTIFICATION_DISCUSSION_COMMENT_CREATED',
  NotificationOrganizationMention = 'NOTIFICATION_ORGANIZATION_MENTION',
  NotificationOrganizationMessage = 'NOTIFICATION_ORGANIZATION_MESSAGE',
  NotificationUserRemoved = 'NOTIFICATION_USER_REMOVED',
  NotificationUserSignUp = 'NOTIFICATION_USER_SIGN_UP',
}

export type UserSendMessageInput = {
  /** The message being sent */
  message: Scalars['String'];
  /** The user a message is being sent to */
  receivingUserID: Scalars['String'];
};

export type UserTemplate = {
  /** User template name. */
  name: Scalars['String'];
  /** Tagset templates. */
  tagsets?: Maybe<Array<TagsetTemplate>>;
};

export type UsersWithAuthorizationCredentialInput = {
  /** The resource to which a credential needs to be bound. */
  resourceID?: InputMaybe<Scalars['UUID']>;
  /** The type of credential. */
  type: AuthorizationCredential;
};

export type VerifiedCredential = {
  /** The time at which the credential is no longer valid */
  claims: Array<VerifiedCredentialClaim>;
  /** JSON for the context in the credential */
  context: Scalars['JSON'];
  /** The time at which the credential is no longer valid */
  expires: Scalars['String'];
  /** The time at which the credential was issued */
  issued: Scalars['String'];
  /** The party issuing the VC */
  issuer: Scalars['String'];
  /** The name of the VC */
  name: Scalars['String'];
  /** The type of VC */
  type: Scalars['String'];
};

export type VerifiedCredentialClaim = {
  /** The name of the claim */
  name: Scalars['JSON'];
  /** The value for the claim */
  value: Scalars['JSON'];
};

export type Visual = {
  allowedTypes: Array<Scalars['String']>;
  /** Aspect ratio width / height. */
  aspectRatio: Scalars['Float'];
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** Maximum height resolution. */
  maxHeight: Scalars['Float'];
  /** Maximum width resolution. */
  maxWidth: Scalars['Float'];
  /** Minimum height resolution. */
  minHeight: Scalars['Float'];
  /** Minimum width resolution. */
  minWidth: Scalars['Float'];
  name: Scalars['String'];
  uri: Scalars['String'];
};

export enum VisualType {
  Avatar = 'AVATAR',
  Banner = 'BANNER',
  Card = 'CARD',
}

export type VisualUploadImageInput = {
  visualID: Scalars['String'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => SchemaTypes.Maybe<TTypes> | Promise<SchemaTypes.Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  APM: ResolverTypeWrapper<SchemaTypes.Apm>;
  ActivityCreatedSubscriptionResult: ResolverTypeWrapper<SchemaTypes.ActivityCreatedSubscriptionResult>;
  ActivityEventType: SchemaTypes.ActivityEventType;
  ActivityLogEntry:
    | ResolversTypes['ActivityLogEntryCalloutCanvasCreated']
    | ResolversTypes['ActivityLogEntryCalloutCardComment']
    | ResolversTypes['ActivityLogEntryCalloutCardCreated']
    | ResolversTypes['ActivityLogEntryCalloutDiscussionComment']
    | ResolversTypes['ActivityLogEntryCalloutPublished']
    | ResolversTypes['ActivityLogEntryChallengeCreated']
    | ResolversTypes['ActivityLogEntryMemberJoined']
    | ResolversTypes['ActivityLogEntryOpportunityCreated']
    | ResolversTypes['ActivityLogEntryUpdateSent'];
  ActivityLogEntryCalloutCanvasCreated: ResolverTypeWrapper<SchemaTypes.ActivityLogEntryCalloutCanvasCreated>;
  ActivityLogEntryCalloutCardComment: ResolverTypeWrapper<SchemaTypes.ActivityLogEntryCalloutCardComment>;
  ActivityLogEntryCalloutCardCreated: ResolverTypeWrapper<SchemaTypes.ActivityLogEntryCalloutCardCreated>;
  ActivityLogEntryCalloutDiscussionComment: ResolverTypeWrapper<SchemaTypes.ActivityLogEntryCalloutDiscussionComment>;
  ActivityLogEntryCalloutPublished: ResolverTypeWrapper<SchemaTypes.ActivityLogEntryCalloutPublished>;
  ActivityLogEntryChallengeCreated: ResolverTypeWrapper<SchemaTypes.ActivityLogEntryChallengeCreated>;
  ActivityLogEntryMemberJoined: ResolverTypeWrapper<SchemaTypes.ActivityLogEntryMemberJoined>;
  ActivityLogEntryOpportunityCreated: ResolverTypeWrapper<SchemaTypes.ActivityLogEntryOpportunityCreated>;
  ActivityLogEntryUpdateSent: ResolverTypeWrapper<SchemaTypes.ActivityLogEntryUpdateSent>;
  ActivityLogInput: SchemaTypes.ActivityLogInput;
  Actor: ResolverTypeWrapper<SchemaTypes.Actor>;
  ActorGroup: ResolverTypeWrapper<SchemaTypes.ActorGroup>;
  Agent: ResolverTypeWrapper<SchemaTypes.Agent>;
  AgentBeginVerifiedCredentialOfferOutput: ResolverTypeWrapper<SchemaTypes.AgentBeginVerifiedCredentialOfferOutput>;
  AgentBeginVerifiedCredentialRequestOutput: ResolverTypeWrapper<SchemaTypes.AgentBeginVerifiedCredentialRequestOutput>;
  Application: ResolverTypeWrapper<SchemaTypes.Application>;
  ApplicationEventInput: SchemaTypes.ApplicationEventInput;
  ApplicationForRoleResult: ResolverTypeWrapper<SchemaTypes.ApplicationForRoleResult>;
  ApplicationTemplate: ResolverTypeWrapper<SchemaTypes.ApplicationTemplate>;
  Aspect: ResolverTypeWrapper<SchemaTypes.Aspect>;
  AspectCommentsMessageReceived: ResolverTypeWrapper<SchemaTypes.AspectCommentsMessageReceived>;
  AspectTemplate: ResolverTypeWrapper<SchemaTypes.AspectTemplate>;
  AssignChallengeAdminInput: SchemaTypes.AssignChallengeAdminInput;
  AssignCommunityLeadOrganizationInput: SchemaTypes.AssignCommunityLeadOrganizationInput;
  AssignCommunityLeadUserInput: SchemaTypes.AssignCommunityLeadUserInput;
  AssignCommunityMemberOrganizationInput: SchemaTypes.AssignCommunityMemberOrganizationInput;
  AssignCommunityMemberUserInput: SchemaTypes.AssignCommunityMemberUserInput;
  AssignGlobalAdminInput: SchemaTypes.AssignGlobalAdminInput;
  AssignGlobalCommunityAdminInput: SchemaTypes.AssignGlobalCommunityAdminInput;
  AssignGlobalHubsAdminInput: SchemaTypes.AssignGlobalHubsAdminInput;
  AssignHubAdminInput: SchemaTypes.AssignHubAdminInput;
  AssignOpportunityAdminInput: SchemaTypes.AssignOpportunityAdminInput;
  AssignOrganizationAdminInput: SchemaTypes.AssignOrganizationAdminInput;
  AssignOrganizationAssociateInput: SchemaTypes.AssignOrganizationAssociateInput;
  AssignOrganizationOwnerInput: SchemaTypes.AssignOrganizationOwnerInput;
  AssignUserGroupMemberInput: SchemaTypes.AssignUserGroupMemberInput;
  AuthenticationConfig: ResolverTypeWrapper<SchemaTypes.AuthenticationConfig>;
  AuthenticationProviderConfig: ResolverTypeWrapper<
    Omit<SchemaTypes.AuthenticationProviderConfig, 'config'> & {
      config: ResolversTypes['AuthenticationProviderConfigUnion'];
    }
  >;
  AuthenticationProviderConfigUnion: ResolversTypes['OryConfig'];
  Authorization: ResolverTypeWrapper<SchemaTypes.Authorization>;
  AuthorizationCredential: SchemaTypes.AuthorizationCredential;
  AuthorizationPolicyRuleCredential: ResolverTypeWrapper<SchemaTypes.AuthorizationPolicyRuleCredential>;
  AuthorizationPolicyRulePrivilege: ResolverTypeWrapper<SchemaTypes.AuthorizationPolicyRulePrivilege>;
  AuthorizationPolicyRuleVerifiedCredential: ResolverTypeWrapper<SchemaTypes.AuthorizationPolicyRuleVerifiedCredential>;
  AuthorizationPrivilege: SchemaTypes.AuthorizationPrivilege;
  Boolean: ResolverTypeWrapper<SchemaTypes.Scalars['Boolean']>;
  CID: ResolverTypeWrapper<SchemaTypes.Scalars['CID']>;
  Calendar: ResolverTypeWrapper<SchemaTypes.Calendar>;
  CalendarEvent: ResolverTypeWrapper<SchemaTypes.CalendarEvent>;
  CalendarEventCommentsMessageReceived: ResolverTypeWrapper<SchemaTypes.CalendarEventCommentsMessageReceived>;
  CalendarEventType: SchemaTypes.CalendarEventType;
  Callout: ResolverTypeWrapper<SchemaTypes.Callout>;
  CalloutAspectCreated: ResolverTypeWrapper<SchemaTypes.CalloutAspectCreated>;
  CalloutMessageReceived: ResolverTypeWrapper<SchemaTypes.CalloutMessageReceived>;
  CalloutState: SchemaTypes.CalloutState;
  CalloutType: SchemaTypes.CalloutType;
  CalloutVisibility: SchemaTypes.CalloutVisibility;
  Canvas: ResolverTypeWrapper<SchemaTypes.Canvas>;
  CanvasCheckout: ResolverTypeWrapper<SchemaTypes.CanvasCheckout>;
  CanvasCheckoutEventInput: SchemaTypes.CanvasCheckoutEventInput;
  CanvasCheckoutStateEnum: SchemaTypes.CanvasCheckoutStateEnum;
  CanvasContentUpdated: ResolverTypeWrapper<SchemaTypes.CanvasContentUpdated>;
  CanvasTemplate: ResolverTypeWrapper<SchemaTypes.CanvasTemplate>;
  Challenge: ResolverTypeWrapper<SchemaTypes.Challenge>;
  ChallengeCreated: ResolverTypeWrapper<SchemaTypes.ChallengeCreated>;
  ChallengeEventInput: SchemaTypes.ChallengeEventInput;
  ChallengePreferenceType: SchemaTypes.ChallengePreferenceType;
  ChallengeTemplate: ResolverTypeWrapper<SchemaTypes.ChallengeTemplate>;
  Collaboration: ResolverTypeWrapper<SchemaTypes.Collaboration>;
  Comments: ResolverTypeWrapper<SchemaTypes.Comments>;
  CommentsRemoveMessageInput: SchemaTypes.CommentsRemoveMessageInput;
  CommentsSendMessageInput: SchemaTypes.CommentsSendMessageInput;
  Communication: ResolverTypeWrapper<SchemaTypes.Communication>;
  CommunicationAdminEnsureAccessInput: SchemaTypes.CommunicationAdminEnsureAccessInput;
  CommunicationAdminMembershipInput: SchemaTypes.CommunicationAdminMembershipInput;
  CommunicationAdminMembershipResult: ResolverTypeWrapper<SchemaTypes.CommunicationAdminMembershipResult>;
  CommunicationAdminOrphanedUsageResult: ResolverTypeWrapper<SchemaTypes.CommunicationAdminOrphanedUsageResult>;
  CommunicationAdminRemoveOrphanedRoomInput: SchemaTypes.CommunicationAdminRemoveOrphanedRoomInput;
  CommunicationAdminRoomMembershipResult: ResolverTypeWrapper<SchemaTypes.CommunicationAdminRoomMembershipResult>;
  CommunicationAdminRoomResult: ResolverTypeWrapper<SchemaTypes.CommunicationAdminRoomResult>;
  CommunicationAdminUpdateRoomsJoinRuleInput: SchemaTypes.CommunicationAdminUpdateRoomsJoinRuleInput;
  CommunicationCreateDiscussionInput: SchemaTypes.CommunicationCreateDiscussionInput;
  CommunicationDiscussionMessageReceived: ResolverTypeWrapper<SchemaTypes.CommunicationDiscussionMessageReceived>;
  CommunicationRoom: ResolverTypeWrapper<SchemaTypes.CommunicationRoom>;
  CommunicationSendMessageToCommunityLeadsInput: SchemaTypes.CommunicationSendMessageToCommunityLeadsInput;
  CommunicationSendMessageToOrganizationInput: SchemaTypes.CommunicationSendMessageToOrganizationInput;
  CommunicationSendMessageToUserInput: SchemaTypes.CommunicationSendMessageToUserInput;
  CommunicationUpdateMessageReceived: ResolverTypeWrapper<SchemaTypes.CommunicationUpdateMessageReceived>;
  Community: ResolverTypeWrapper<SchemaTypes.Community>;
  CommunityApplyInput: SchemaTypes.CommunityApplyInput;
  CommunityJoinInput: SchemaTypes.CommunityJoinInput;
  CommunityPolicy: ResolverTypeWrapper<SchemaTypes.CommunityPolicy>;
  CommunityRolePolicy: ResolverTypeWrapper<SchemaTypes.CommunityRolePolicy>;
  Config: ResolverTypeWrapper<SchemaTypes.Config>;
  Context: ResolverTypeWrapper<SchemaTypes.Context>;
  ContributorFilterInput: SchemaTypes.ContributorFilterInput;
  ContributorRoles: ResolverTypeWrapper<SchemaTypes.ContributorRoles>;
  ConvertChallengeToHubInput: SchemaTypes.ConvertChallengeToHubInput;
  ConvertOpportunityToChallengeInput: SchemaTypes.ConvertOpportunityToChallengeInput;
  CreateActorGroupInput: SchemaTypes.CreateActorGroupInput;
  CreateActorInput: SchemaTypes.CreateActorInput;
  CreateAspectOnCalloutInput: SchemaTypes.CreateAspectOnCalloutInput;
  CreateAspectTemplateInput: SchemaTypes.CreateAspectTemplateInput;
  CreateAspectTemplateOnTemplatesSetInput: SchemaTypes.CreateAspectTemplateOnTemplatesSetInput;
  CreateCalendarEventOnCalendarInput: SchemaTypes.CreateCalendarEventOnCalendarInput;
  CreateCalloutOnCollaborationInput: SchemaTypes.CreateCalloutOnCollaborationInput;
  CreateCanvasOnCalloutInput: SchemaTypes.CreateCanvasOnCalloutInput;
  CreateCanvasTemplateInput: SchemaTypes.CreateCanvasTemplateInput;
  CreateCanvasTemplateOnTemplatesSetInput: SchemaTypes.CreateCanvasTemplateOnTemplatesSetInput;
  CreateChallengeOnChallengeInput: SchemaTypes.CreateChallengeOnChallengeInput;
  CreateChallengeOnHubInput: SchemaTypes.CreateChallengeOnHubInput;
  CreateContextInput: SchemaTypes.CreateContextInput;
  CreateFeedbackOnCommunityContextInput: SchemaTypes.CreateFeedbackOnCommunityContextInput;
  CreateHubInput: SchemaTypes.CreateHubInput;
  CreateInnovationPackOnLibraryInput: SchemaTypes.CreateInnovationPackOnLibraryInput;
  CreateLifecycleTemplateOnTemplatesSetInput: SchemaTypes.CreateLifecycleTemplateOnTemplatesSetInput;
  CreateLocationInput: SchemaTypes.CreateLocationInput;
  CreateNVPInput: SchemaTypes.CreateNvpInput;
  CreateOpportunityInput: SchemaTypes.CreateOpportunityInput;
  CreateOrganizationInput: SchemaTypes.CreateOrganizationInput;
  CreateProfileInput: SchemaTypes.CreateProfileInput;
  CreateProjectInput: SchemaTypes.CreateProjectInput;
  CreateReferenceInput: SchemaTypes.CreateReferenceInput;
  CreateReferenceOnContextInput: SchemaTypes.CreateReferenceOnContextInput;
  CreateReferenceOnProfileInput: SchemaTypes.CreateReferenceOnProfileInput;
  CreateRelationOnCollaborationInput: SchemaTypes.CreateRelationOnCollaborationInput;
  CreateTagsetOnProfileInput: SchemaTypes.CreateTagsetOnProfileInput;
  CreateTemplateInfoInput: SchemaTypes.CreateTemplateInfoInput;
  CreateUserGroupInput: SchemaTypes.CreateUserGroupInput;
  CreateUserInput: SchemaTypes.CreateUserInput;
  Credential: ResolverTypeWrapper<SchemaTypes.Credential>;
  CredentialDefinition: ResolverTypeWrapper<SchemaTypes.CredentialDefinition>;
  CredentialMetadataOutput: ResolverTypeWrapper<SchemaTypes.CredentialMetadataOutput>;
  DID: ResolverTypeWrapper<SchemaTypes.Scalars['DID']>;
  DateTime: ResolverTypeWrapper<SchemaTypes.Scalars['DateTime']>;
  DeleteActorGroupInput: SchemaTypes.DeleteActorGroupInput;
  DeleteActorInput: SchemaTypes.DeleteActorInput;
  DeleteApplicationInput: SchemaTypes.DeleteApplicationInput;
  DeleteAspectInput: SchemaTypes.DeleteAspectInput;
  DeleteAspectTemplateInput: SchemaTypes.DeleteAspectTemplateInput;
  DeleteCalendarEventInput: SchemaTypes.DeleteCalendarEventInput;
  DeleteCalloutInput: SchemaTypes.DeleteCalloutInput;
  DeleteCanvasInput: SchemaTypes.DeleteCanvasInput;
  DeleteCanvasTemplateInput: SchemaTypes.DeleteCanvasTemplateInput;
  DeleteChallengeInput: SchemaTypes.DeleteChallengeInput;
  DeleteCollaborationInput: SchemaTypes.DeleteCollaborationInput;
  DeleteDiscussionInput: SchemaTypes.DeleteDiscussionInput;
  DeleteFileInput: SchemaTypes.DeleteFileInput;
  DeleteHubInput: SchemaTypes.DeleteHubInput;
  DeleteInnovationPackInput: SchemaTypes.DeleteInnovationPackInput;
  DeleteLifecycleTemplateInput: SchemaTypes.DeleteLifecycleTemplateInput;
  DeleteOpportunityInput: SchemaTypes.DeleteOpportunityInput;
  DeleteOrganizationInput: SchemaTypes.DeleteOrganizationInput;
  DeleteProjectInput: SchemaTypes.DeleteProjectInput;
  DeleteReferenceInput: SchemaTypes.DeleteReferenceInput;
  DeleteRelationInput: SchemaTypes.DeleteRelationInput;
  DeleteUserGroupInput: SchemaTypes.DeleteUserGroupInput;
  DeleteUserInput: SchemaTypes.DeleteUserInput;
  DirectRoom: ResolverTypeWrapper<SchemaTypes.DirectRoom>;
  Discussion: ResolverTypeWrapper<SchemaTypes.Discussion>;
  DiscussionCategory: SchemaTypes.DiscussionCategory;
  DiscussionRemoveMessageInput: SchemaTypes.DiscussionRemoveMessageInput;
  DiscussionSendMessageInput: SchemaTypes.DiscussionSendMessageInput;
  EcosystemModel: ResolverTypeWrapper<SchemaTypes.EcosystemModel>;
  FeatureFlag: ResolverTypeWrapper<SchemaTypes.FeatureFlag>;
  FeedbackTemplate: ResolverTypeWrapper<SchemaTypes.FeedbackTemplate>;
  FileStorageConfig: ResolverTypeWrapper<SchemaTypes.FileStorageConfig>;
  Float: ResolverTypeWrapper<SchemaTypes.Scalars['Float']>;
  Form: ResolverTypeWrapper<SchemaTypes.Form>;
  FormQuestion: ResolverTypeWrapper<SchemaTypes.FormQuestion>;
  Geo: ResolverTypeWrapper<SchemaTypes.Geo>;
  GrantAuthorizationCredentialInput: SchemaTypes.GrantAuthorizationCredentialInput;
  Groupable: ResolversTypes['Community'] | ResolversTypes['Organization'];
  Hub: ResolverTypeWrapper<SchemaTypes.Hub>;
  HubAspectTemplate: ResolverTypeWrapper<SchemaTypes.HubAspectTemplate>;
  HubAuthorizationResetInput: SchemaTypes.HubAuthorizationResetInput;
  HubFilterInput: SchemaTypes.HubFilterInput;
  HubPreferenceType: SchemaTypes.HubPreferenceType;
  HubVisibility: SchemaTypes.HubVisibility;
  ISearchResults: ResolverTypeWrapper<SchemaTypes.ISearchResults>;
  InnovatonPack: ResolverTypeWrapper<SchemaTypes.InnovatonPack>;
  Int: ResolverTypeWrapper<SchemaTypes.Scalars['Int']>;
  JSON: ResolverTypeWrapper<SchemaTypes.Scalars['JSON']>;
  Library: ResolverTypeWrapper<SchemaTypes.Library>;
  Lifecycle: ResolverTypeWrapper<SchemaTypes.Lifecycle>;
  LifecycleDefinition: ResolverTypeWrapper<
    SchemaTypes.Scalars['LifecycleDefinition']
  >;
  LifecycleTemplate: ResolverTypeWrapper<SchemaTypes.LifecycleTemplate>;
  LifecycleType: SchemaTypes.LifecycleType;
  Location: ResolverTypeWrapper<SchemaTypes.Location>;
  Markdown: ResolverTypeWrapper<SchemaTypes.Scalars['Markdown']>;
  Message: ResolverTypeWrapper<SchemaTypes.Message>;
  MessageID: ResolverTypeWrapper<SchemaTypes.Scalars['MessageID']>;
  Metadata: ResolverTypeWrapper<SchemaTypes.Metadata>;
  MoveAspectInput: SchemaTypes.MoveAspectInput;
  Mutation: ResolverTypeWrapper<{}>;
  NVP: ResolverTypeWrapper<SchemaTypes.Nvp>;
  NameID: ResolverTypeWrapper<SchemaTypes.Scalars['NameID']>;
  Opportunity: ResolverTypeWrapper<SchemaTypes.Opportunity>;
  OpportunityCreated: ResolverTypeWrapper<SchemaTypes.OpportunityCreated>;
  OpportunityEventInput: SchemaTypes.OpportunityEventInput;
  OpportunityTemplate: ResolverTypeWrapper<SchemaTypes.OpportunityTemplate>;
  Organization: ResolverTypeWrapper<SchemaTypes.Organization>;
  OrganizationAuthorizationResetInput: SchemaTypes.OrganizationAuthorizationResetInput;
  OrganizationFilterInput: SchemaTypes.OrganizationFilterInput;
  OrganizationPreferenceType: SchemaTypes.OrganizationPreferenceType;
  OrganizationTemplate: ResolverTypeWrapper<SchemaTypes.OrganizationTemplate>;
  OrganizationVerification: ResolverTypeWrapper<SchemaTypes.OrganizationVerification>;
  OrganizationVerificationEnum: SchemaTypes.OrganizationVerificationEnum;
  OrganizationVerificationEventInput: SchemaTypes.OrganizationVerificationEventInput;
  OryConfig: ResolverTypeWrapper<SchemaTypes.OryConfig>;
  PageInfo: ResolverTypeWrapper<SchemaTypes.PageInfo>;
  PaginatedOrganization: ResolverTypeWrapper<SchemaTypes.PaginatedOrganization>;
  PaginatedUsers: ResolverTypeWrapper<SchemaTypes.PaginatedUsers>;
  Platform: ResolverTypeWrapper<SchemaTypes.Platform>;
  PlatformLocations: ResolverTypeWrapper<SchemaTypes.PlatformLocations>;
  Preference: ResolverTypeWrapper<SchemaTypes.Preference>;
  PreferenceDefinition: ResolverTypeWrapper<SchemaTypes.PreferenceDefinition>;
  PreferenceType: SchemaTypes.PreferenceType;
  PreferenceValueType: SchemaTypes.PreferenceValueType;
  Profile: ResolverTypeWrapper<SchemaTypes.Profile>;
  ProfileCredentialVerified: ResolverTypeWrapper<SchemaTypes.ProfileCredentialVerified>;
  Project: ResolverTypeWrapper<SchemaTypes.Project>;
  ProjectEventInput: SchemaTypes.ProjectEventInput;
  Query: ResolverTypeWrapper<{}>;
  Question: ResolverTypeWrapper<SchemaTypes.Question>;
  QuestionTemplate: ResolverTypeWrapper<SchemaTypes.QuestionTemplate>;
  Reference: ResolverTypeWrapper<SchemaTypes.Reference>;
  Relation: ResolverTypeWrapper<SchemaTypes.Relation>;
  RelayPaginatedUser: ResolverTypeWrapper<SchemaTypes.RelayPaginatedUser>;
  RelayPaginatedUserEdge: ResolverTypeWrapper<SchemaTypes.RelayPaginatedUserEdge>;
  RelayPaginatedUserPageInfo: ResolverTypeWrapper<SchemaTypes.RelayPaginatedUserPageInfo>;
  RemoveChallengeAdminInput: SchemaTypes.RemoveChallengeAdminInput;
  RemoveCommunityLeadOrganizationInput: SchemaTypes.RemoveCommunityLeadOrganizationInput;
  RemoveCommunityLeadUserInput: SchemaTypes.RemoveCommunityLeadUserInput;
  RemoveCommunityMemberOrganizationInput: SchemaTypes.RemoveCommunityMemberOrganizationInput;
  RemoveCommunityMemberUserInput: SchemaTypes.RemoveCommunityMemberUserInput;
  RemoveGlobalAdminInput: SchemaTypes.RemoveGlobalAdminInput;
  RemoveGlobalCommunityAdminInput: SchemaTypes.RemoveGlobalCommunityAdminInput;
  RemoveGlobalHubsAdminInput: SchemaTypes.RemoveGlobalHubsAdminInput;
  RemoveHubAdminInput: SchemaTypes.RemoveHubAdminInput;
  RemoveOpportunityAdminInput: SchemaTypes.RemoveOpportunityAdminInput;
  RemoveOrganizationAdminInput: SchemaTypes.RemoveOrganizationAdminInput;
  RemoveOrganizationAssociateInput: SchemaTypes.RemoveOrganizationAssociateInput;
  RemoveOrganizationOwnerInput: SchemaTypes.RemoveOrganizationOwnerInput;
  RemoveUserGroupMemberInput: SchemaTypes.RemoveUserGroupMemberInput;
  RevokeAuthorizationCredentialInput: SchemaTypes.RevokeAuthorizationCredentialInput;
  RolesOrganizationInput: SchemaTypes.RolesOrganizationInput;
  RolesResult: ResolverTypeWrapper<SchemaTypes.RolesResult>;
  RolesResultCommunity: ResolverTypeWrapper<SchemaTypes.RolesResultCommunity>;
  RolesResultHub: ResolverTypeWrapper<SchemaTypes.RolesResultHub>;
  RolesResultOrganization: ResolverTypeWrapper<SchemaTypes.RolesResultOrganization>;
  RolesUserInput: SchemaTypes.RolesUserInput;
  SearchInput: SchemaTypes.SearchInput;
  SearchResult:
    | ResolversTypes['SearchResultCard']
    | ResolversTypes['SearchResultChallenge']
    | ResolversTypes['SearchResultHub']
    | ResolversTypes['SearchResultOpportunity']
    | ResolversTypes['SearchResultOrganization']
    | ResolversTypes['SearchResultUser']
    | ResolversTypes['SearchResultUserGroup'];
  SearchResultCard: ResolverTypeWrapper<SchemaTypes.SearchResultCard>;
  SearchResultChallenge: ResolverTypeWrapper<SchemaTypes.SearchResultChallenge>;
  SearchResultHub: ResolverTypeWrapper<SchemaTypes.SearchResultHub>;
  SearchResultOpportunity: ResolverTypeWrapper<SchemaTypes.SearchResultOpportunity>;
  SearchResultOrganization: ResolverTypeWrapper<SchemaTypes.SearchResultOrganization>;
  SearchResultType: SchemaTypes.SearchResultType;
  SearchResultUser: ResolverTypeWrapper<SchemaTypes.SearchResultUser>;
  SearchResultUserGroup: ResolverTypeWrapper<SchemaTypes.SearchResultUserGroup>;
  SendMessageOnCalloutInput: SchemaTypes.SendMessageOnCalloutInput;
  Sentry: ResolverTypeWrapper<SchemaTypes.Sentry>;
  ServiceMetadata: ResolverTypeWrapper<SchemaTypes.ServiceMetadata>;
  StorageConfig: ResolverTypeWrapper<SchemaTypes.StorageConfig>;
  String: ResolverTypeWrapper<SchemaTypes.Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  Tagset: ResolverTypeWrapper<SchemaTypes.Tagset>;
  TagsetTemplate: ResolverTypeWrapper<SchemaTypes.TagsetTemplate>;
  Template: ResolverTypeWrapper<SchemaTypes.Template>;
  TemplateInfo: ResolverTypeWrapper<SchemaTypes.TemplateInfo>;
  TemplatesSet: ResolverTypeWrapper<SchemaTypes.TemplatesSet>;
  TemplatesSetPolicy: ResolverTypeWrapper<SchemaTypes.TemplatesSetPolicy>;
  Timeline: ResolverTypeWrapper<SchemaTypes.Timeline>;
  UUID: ResolverTypeWrapper<SchemaTypes.Scalars['UUID']>;
  UUID_NAMEID: ResolverTypeWrapper<SchemaTypes.Scalars['UUID_NAMEID']>;
  UUID_NAMEID_EMAIL: ResolverTypeWrapper<
    SchemaTypes.Scalars['UUID_NAMEID_EMAIL']
  >;
  UpdateActorInput: SchemaTypes.UpdateActorInput;
  UpdateAspectInput: SchemaTypes.UpdateAspectInput;
  UpdateAspectTemplateInput: SchemaTypes.UpdateAspectTemplateInput;
  UpdateCalendarEventInput: SchemaTypes.UpdateCalendarEventInput;
  UpdateCalloutCanvasTemplateInput: SchemaTypes.UpdateCalloutCanvasTemplateInput;
  UpdateCalloutCardTemplateInput: SchemaTypes.UpdateCalloutCardTemplateInput;
  UpdateCalloutInput: SchemaTypes.UpdateCalloutInput;
  UpdateCalloutPublishInfoInput: SchemaTypes.UpdateCalloutPublishInfoInput;
  UpdateCalloutVisibilityInput: SchemaTypes.UpdateCalloutVisibilityInput;
  UpdateCanvasDirectInput: SchemaTypes.UpdateCanvasDirectInput;
  UpdateCanvasTemplateInput: SchemaTypes.UpdateCanvasTemplateInput;
  UpdateChallengeInnovationFlowInput: SchemaTypes.UpdateChallengeInnovationFlowInput;
  UpdateChallengeInput: SchemaTypes.UpdateChallengeInput;
  UpdateChallengePreferenceInput: SchemaTypes.UpdateChallengePreferenceInput;
  UpdateCommunityApplicationFormInput: SchemaTypes.UpdateCommunityApplicationFormInput;
  UpdateContextInput: SchemaTypes.UpdateContextInput;
  UpdateDiscussionInput: SchemaTypes.UpdateDiscussionInput;
  UpdateEcosystemModelInput: SchemaTypes.UpdateEcosystemModelInput;
  UpdateFormInput: SchemaTypes.UpdateFormInput;
  UpdateFormQuestionInput: SchemaTypes.UpdateFormQuestionInput;
  UpdateHubInput: SchemaTypes.UpdateHubInput;
  UpdateHubPreferenceInput: SchemaTypes.UpdateHubPreferenceInput;
  UpdateHubVisibilityInput: SchemaTypes.UpdateHubVisibilityInput;
  UpdateInnovationPackInput: SchemaTypes.UpdateInnovationPackInput;
  UpdateLifecycleTemplateInput: SchemaTypes.UpdateLifecycleTemplateInput;
  UpdateLocationInput: SchemaTypes.UpdateLocationInput;
  UpdateOpportunityInnovationFlowInput: SchemaTypes.UpdateOpportunityInnovationFlowInput;
  UpdateOpportunityInput: SchemaTypes.UpdateOpportunityInput;
  UpdateOrganizationInput: SchemaTypes.UpdateOrganizationInput;
  UpdateOrganizationPreferenceInput: SchemaTypes.UpdateOrganizationPreferenceInput;
  UpdateProfileDirectInput: SchemaTypes.UpdateProfileDirectInput;
  UpdateProfileInput: SchemaTypes.UpdateProfileInput;
  UpdateProjectInput: SchemaTypes.UpdateProjectInput;
  UpdateReferenceInput: SchemaTypes.UpdateReferenceInput;
  UpdateTagsetInput: SchemaTypes.UpdateTagsetInput;
  UpdateTemplateInfoInput: SchemaTypes.UpdateTemplateInfoInput;
  UpdateUserGroupInput: SchemaTypes.UpdateUserGroupInput;
  UpdateUserInput: SchemaTypes.UpdateUserInput;
  UpdateUserPreferenceInput: SchemaTypes.UpdateUserPreferenceInput;
  UpdateVisualInput: SchemaTypes.UpdateVisualInput;
  Updates: ResolverTypeWrapper<SchemaTypes.Updates>;
  UpdatesRemoveMessageInput: SchemaTypes.UpdatesRemoveMessageInput;
  UpdatesSendMessageInput: SchemaTypes.UpdatesSendMessageInput;
  Upload: ResolverTypeWrapper<SchemaTypes.Scalars['Upload']>;
  User: ResolverTypeWrapper<SchemaTypes.User>;
  UserAuthorizationPrivilegesInput: SchemaTypes.UserAuthorizationPrivilegesInput;
  UserAuthorizationResetInput: SchemaTypes.UserAuthorizationResetInput;
  UserFilterInput: SchemaTypes.UserFilterInput;
  UserGroup: ResolverTypeWrapper<SchemaTypes.UserGroup>;
  UserPreferenceType: SchemaTypes.UserPreferenceType;
  UserSendMessageInput: SchemaTypes.UserSendMessageInput;
  UserTemplate: ResolverTypeWrapper<SchemaTypes.UserTemplate>;
  UsersWithAuthorizationCredentialInput: SchemaTypes.UsersWithAuthorizationCredentialInput;
  VerifiedCredential: ResolverTypeWrapper<SchemaTypes.VerifiedCredential>;
  VerifiedCredentialClaim: ResolverTypeWrapper<SchemaTypes.VerifiedCredentialClaim>;
  Visual: ResolverTypeWrapper<SchemaTypes.Visual>;
  VisualType: SchemaTypes.VisualType;
  VisualUploadImageInput: SchemaTypes.VisualUploadImageInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  APM: SchemaTypes.Apm;
  ActivityCreatedSubscriptionResult: SchemaTypes.ActivityCreatedSubscriptionResult;
  ActivityLogEntry:
    | ResolversParentTypes['ActivityLogEntryCalloutCanvasCreated']
    | ResolversParentTypes['ActivityLogEntryCalloutCardComment']
    | ResolversParentTypes['ActivityLogEntryCalloutCardCreated']
    | ResolversParentTypes['ActivityLogEntryCalloutDiscussionComment']
    | ResolversParentTypes['ActivityLogEntryCalloutPublished']
    | ResolversParentTypes['ActivityLogEntryChallengeCreated']
    | ResolversParentTypes['ActivityLogEntryMemberJoined']
    | ResolversParentTypes['ActivityLogEntryOpportunityCreated']
    | ResolversParentTypes['ActivityLogEntryUpdateSent'];
  ActivityLogEntryCalloutCanvasCreated: SchemaTypes.ActivityLogEntryCalloutCanvasCreated;
  ActivityLogEntryCalloutCardComment: SchemaTypes.ActivityLogEntryCalloutCardComment;
  ActivityLogEntryCalloutCardCreated: SchemaTypes.ActivityLogEntryCalloutCardCreated;
  ActivityLogEntryCalloutDiscussionComment: SchemaTypes.ActivityLogEntryCalloutDiscussionComment;
  ActivityLogEntryCalloutPublished: SchemaTypes.ActivityLogEntryCalloutPublished;
  ActivityLogEntryChallengeCreated: SchemaTypes.ActivityLogEntryChallengeCreated;
  ActivityLogEntryMemberJoined: SchemaTypes.ActivityLogEntryMemberJoined;
  ActivityLogEntryOpportunityCreated: SchemaTypes.ActivityLogEntryOpportunityCreated;
  ActivityLogEntryUpdateSent: SchemaTypes.ActivityLogEntryUpdateSent;
  ActivityLogInput: SchemaTypes.ActivityLogInput;
  Actor: SchemaTypes.Actor;
  ActorGroup: SchemaTypes.ActorGroup;
  Agent: SchemaTypes.Agent;
  AgentBeginVerifiedCredentialOfferOutput: SchemaTypes.AgentBeginVerifiedCredentialOfferOutput;
  AgentBeginVerifiedCredentialRequestOutput: SchemaTypes.AgentBeginVerifiedCredentialRequestOutput;
  Application: SchemaTypes.Application;
  ApplicationEventInput: SchemaTypes.ApplicationEventInput;
  ApplicationForRoleResult: SchemaTypes.ApplicationForRoleResult;
  ApplicationTemplate: SchemaTypes.ApplicationTemplate;
  Aspect: SchemaTypes.Aspect;
  AspectCommentsMessageReceived: SchemaTypes.AspectCommentsMessageReceived;
  AspectTemplate: SchemaTypes.AspectTemplate;
  AssignChallengeAdminInput: SchemaTypes.AssignChallengeAdminInput;
  AssignCommunityLeadOrganizationInput: SchemaTypes.AssignCommunityLeadOrganizationInput;
  AssignCommunityLeadUserInput: SchemaTypes.AssignCommunityLeadUserInput;
  AssignCommunityMemberOrganizationInput: SchemaTypes.AssignCommunityMemberOrganizationInput;
  AssignCommunityMemberUserInput: SchemaTypes.AssignCommunityMemberUserInput;
  AssignGlobalAdminInput: SchemaTypes.AssignGlobalAdminInput;
  AssignGlobalCommunityAdminInput: SchemaTypes.AssignGlobalCommunityAdminInput;
  AssignGlobalHubsAdminInput: SchemaTypes.AssignGlobalHubsAdminInput;
  AssignHubAdminInput: SchemaTypes.AssignHubAdminInput;
  AssignOpportunityAdminInput: SchemaTypes.AssignOpportunityAdminInput;
  AssignOrganizationAdminInput: SchemaTypes.AssignOrganizationAdminInput;
  AssignOrganizationAssociateInput: SchemaTypes.AssignOrganizationAssociateInput;
  AssignOrganizationOwnerInput: SchemaTypes.AssignOrganizationOwnerInput;
  AssignUserGroupMemberInput: SchemaTypes.AssignUserGroupMemberInput;
  AuthenticationConfig: SchemaTypes.AuthenticationConfig;
  AuthenticationProviderConfig: Omit<
    SchemaTypes.AuthenticationProviderConfig,
    'config'
  > & { config: ResolversParentTypes['AuthenticationProviderConfigUnion'] };
  AuthenticationProviderConfigUnion: ResolversParentTypes['OryConfig'];
  Authorization: SchemaTypes.Authorization;
  AuthorizationPolicyRuleCredential: SchemaTypes.AuthorizationPolicyRuleCredential;
  AuthorizationPolicyRulePrivilege: SchemaTypes.AuthorizationPolicyRulePrivilege;
  AuthorizationPolicyRuleVerifiedCredential: SchemaTypes.AuthorizationPolicyRuleVerifiedCredential;
  Boolean: SchemaTypes.Scalars['Boolean'];
  CID: SchemaTypes.Scalars['CID'];
  Calendar: SchemaTypes.Calendar;
  CalendarEvent: SchemaTypes.CalendarEvent;
  CalendarEventCommentsMessageReceived: SchemaTypes.CalendarEventCommentsMessageReceived;
  Callout: SchemaTypes.Callout;
  CalloutAspectCreated: SchemaTypes.CalloutAspectCreated;
  CalloutMessageReceived: SchemaTypes.CalloutMessageReceived;
  Canvas: SchemaTypes.Canvas;
  CanvasCheckout: SchemaTypes.CanvasCheckout;
  CanvasCheckoutEventInput: SchemaTypes.CanvasCheckoutEventInput;
  CanvasContentUpdated: SchemaTypes.CanvasContentUpdated;
  CanvasTemplate: SchemaTypes.CanvasTemplate;
  Challenge: SchemaTypes.Challenge;
  ChallengeCreated: SchemaTypes.ChallengeCreated;
  ChallengeEventInput: SchemaTypes.ChallengeEventInput;
  ChallengeTemplate: SchemaTypes.ChallengeTemplate;
  Collaboration: SchemaTypes.Collaboration;
  Comments: SchemaTypes.Comments;
  CommentsRemoveMessageInput: SchemaTypes.CommentsRemoveMessageInput;
  CommentsSendMessageInput: SchemaTypes.CommentsSendMessageInput;
  Communication: SchemaTypes.Communication;
  CommunicationAdminEnsureAccessInput: SchemaTypes.CommunicationAdminEnsureAccessInput;
  CommunicationAdminMembershipInput: SchemaTypes.CommunicationAdminMembershipInput;
  CommunicationAdminMembershipResult: SchemaTypes.CommunicationAdminMembershipResult;
  CommunicationAdminOrphanedUsageResult: SchemaTypes.CommunicationAdminOrphanedUsageResult;
  CommunicationAdminRemoveOrphanedRoomInput: SchemaTypes.CommunicationAdminRemoveOrphanedRoomInput;
  CommunicationAdminRoomMembershipResult: SchemaTypes.CommunicationAdminRoomMembershipResult;
  CommunicationAdminRoomResult: SchemaTypes.CommunicationAdminRoomResult;
  CommunicationAdminUpdateRoomsJoinRuleInput: SchemaTypes.CommunicationAdminUpdateRoomsJoinRuleInput;
  CommunicationCreateDiscussionInput: SchemaTypes.CommunicationCreateDiscussionInput;
  CommunicationDiscussionMessageReceived: SchemaTypes.CommunicationDiscussionMessageReceived;
  CommunicationRoom: SchemaTypes.CommunicationRoom;
  CommunicationSendMessageToCommunityLeadsInput: SchemaTypes.CommunicationSendMessageToCommunityLeadsInput;
  CommunicationSendMessageToOrganizationInput: SchemaTypes.CommunicationSendMessageToOrganizationInput;
  CommunicationSendMessageToUserInput: SchemaTypes.CommunicationSendMessageToUserInput;
  CommunicationUpdateMessageReceived: SchemaTypes.CommunicationUpdateMessageReceived;
  Community: SchemaTypes.Community;
  CommunityApplyInput: SchemaTypes.CommunityApplyInput;
  CommunityJoinInput: SchemaTypes.CommunityJoinInput;
  CommunityPolicy: SchemaTypes.CommunityPolicy;
  CommunityRolePolicy: SchemaTypes.CommunityRolePolicy;
  Config: SchemaTypes.Config;
  Context: SchemaTypes.Context;
  ContributorFilterInput: SchemaTypes.ContributorFilterInput;
  ContributorRoles: SchemaTypes.ContributorRoles;
  ConvertChallengeToHubInput: SchemaTypes.ConvertChallengeToHubInput;
  ConvertOpportunityToChallengeInput: SchemaTypes.ConvertOpportunityToChallengeInput;
  CreateActorGroupInput: SchemaTypes.CreateActorGroupInput;
  CreateActorInput: SchemaTypes.CreateActorInput;
  CreateAspectOnCalloutInput: SchemaTypes.CreateAspectOnCalloutInput;
  CreateAspectTemplateInput: SchemaTypes.CreateAspectTemplateInput;
  CreateAspectTemplateOnTemplatesSetInput: SchemaTypes.CreateAspectTemplateOnTemplatesSetInput;
  CreateCalendarEventOnCalendarInput: SchemaTypes.CreateCalendarEventOnCalendarInput;
  CreateCalloutOnCollaborationInput: SchemaTypes.CreateCalloutOnCollaborationInput;
  CreateCanvasOnCalloutInput: SchemaTypes.CreateCanvasOnCalloutInput;
  CreateCanvasTemplateInput: SchemaTypes.CreateCanvasTemplateInput;
  CreateCanvasTemplateOnTemplatesSetInput: SchemaTypes.CreateCanvasTemplateOnTemplatesSetInput;
  CreateChallengeOnChallengeInput: SchemaTypes.CreateChallengeOnChallengeInput;
  CreateChallengeOnHubInput: SchemaTypes.CreateChallengeOnHubInput;
  CreateContextInput: SchemaTypes.CreateContextInput;
  CreateFeedbackOnCommunityContextInput: SchemaTypes.CreateFeedbackOnCommunityContextInput;
  CreateHubInput: SchemaTypes.CreateHubInput;
  CreateInnovationPackOnLibraryInput: SchemaTypes.CreateInnovationPackOnLibraryInput;
  CreateLifecycleTemplateOnTemplatesSetInput: SchemaTypes.CreateLifecycleTemplateOnTemplatesSetInput;
  CreateLocationInput: SchemaTypes.CreateLocationInput;
  CreateNVPInput: SchemaTypes.CreateNvpInput;
  CreateOpportunityInput: SchemaTypes.CreateOpportunityInput;
  CreateOrganizationInput: SchemaTypes.CreateOrganizationInput;
  CreateProfileInput: SchemaTypes.CreateProfileInput;
  CreateProjectInput: SchemaTypes.CreateProjectInput;
  CreateReferenceInput: SchemaTypes.CreateReferenceInput;
  CreateReferenceOnContextInput: SchemaTypes.CreateReferenceOnContextInput;
  CreateReferenceOnProfileInput: SchemaTypes.CreateReferenceOnProfileInput;
  CreateRelationOnCollaborationInput: SchemaTypes.CreateRelationOnCollaborationInput;
  CreateTagsetOnProfileInput: SchemaTypes.CreateTagsetOnProfileInput;
  CreateTemplateInfoInput: SchemaTypes.CreateTemplateInfoInput;
  CreateUserGroupInput: SchemaTypes.CreateUserGroupInput;
  CreateUserInput: SchemaTypes.CreateUserInput;
  Credential: SchemaTypes.Credential;
  CredentialDefinition: SchemaTypes.CredentialDefinition;
  CredentialMetadataOutput: SchemaTypes.CredentialMetadataOutput;
  DID: SchemaTypes.Scalars['DID'];
  DateTime: SchemaTypes.Scalars['DateTime'];
  DeleteActorGroupInput: SchemaTypes.DeleteActorGroupInput;
  DeleteActorInput: SchemaTypes.DeleteActorInput;
  DeleteApplicationInput: SchemaTypes.DeleteApplicationInput;
  DeleteAspectInput: SchemaTypes.DeleteAspectInput;
  DeleteAspectTemplateInput: SchemaTypes.DeleteAspectTemplateInput;
  DeleteCalendarEventInput: SchemaTypes.DeleteCalendarEventInput;
  DeleteCalloutInput: SchemaTypes.DeleteCalloutInput;
  DeleteCanvasInput: SchemaTypes.DeleteCanvasInput;
  DeleteCanvasTemplateInput: SchemaTypes.DeleteCanvasTemplateInput;
  DeleteChallengeInput: SchemaTypes.DeleteChallengeInput;
  DeleteCollaborationInput: SchemaTypes.DeleteCollaborationInput;
  DeleteDiscussionInput: SchemaTypes.DeleteDiscussionInput;
  DeleteFileInput: SchemaTypes.DeleteFileInput;
  DeleteHubInput: SchemaTypes.DeleteHubInput;
  DeleteInnovationPackInput: SchemaTypes.DeleteInnovationPackInput;
  DeleteLifecycleTemplateInput: SchemaTypes.DeleteLifecycleTemplateInput;
  DeleteOpportunityInput: SchemaTypes.DeleteOpportunityInput;
  DeleteOrganizationInput: SchemaTypes.DeleteOrganizationInput;
  DeleteProjectInput: SchemaTypes.DeleteProjectInput;
  DeleteReferenceInput: SchemaTypes.DeleteReferenceInput;
  DeleteRelationInput: SchemaTypes.DeleteRelationInput;
  DeleteUserGroupInput: SchemaTypes.DeleteUserGroupInput;
  DeleteUserInput: SchemaTypes.DeleteUserInput;
  DirectRoom: SchemaTypes.DirectRoom;
  Discussion: SchemaTypes.Discussion;
  DiscussionRemoveMessageInput: SchemaTypes.DiscussionRemoveMessageInput;
  DiscussionSendMessageInput: SchemaTypes.DiscussionSendMessageInput;
  EcosystemModel: SchemaTypes.EcosystemModel;
  FeatureFlag: SchemaTypes.FeatureFlag;
  FeedbackTemplate: SchemaTypes.FeedbackTemplate;
  FileStorageConfig: SchemaTypes.FileStorageConfig;
  Float: SchemaTypes.Scalars['Float'];
  Form: SchemaTypes.Form;
  FormQuestion: SchemaTypes.FormQuestion;
  Geo: SchemaTypes.Geo;
  GrantAuthorizationCredentialInput: SchemaTypes.GrantAuthorizationCredentialInput;
  Groupable:
    | ResolversParentTypes['Community']
    | ResolversParentTypes['Organization'];
  Hub: SchemaTypes.Hub;
  HubAspectTemplate: SchemaTypes.HubAspectTemplate;
  HubAuthorizationResetInput: SchemaTypes.HubAuthorizationResetInput;
  HubFilterInput: SchemaTypes.HubFilterInput;
  ISearchResults: SchemaTypes.ISearchResults;
  InnovatonPack: SchemaTypes.InnovatonPack;
  Int: SchemaTypes.Scalars['Int'];
  JSON: SchemaTypes.Scalars['JSON'];
  Library: SchemaTypes.Library;
  Lifecycle: SchemaTypes.Lifecycle;
  LifecycleDefinition: SchemaTypes.Scalars['LifecycleDefinition'];
  LifecycleTemplate: SchemaTypes.LifecycleTemplate;
  Location: SchemaTypes.Location;
  Markdown: SchemaTypes.Scalars['Markdown'];
  Message: SchemaTypes.Message;
  MessageID: SchemaTypes.Scalars['MessageID'];
  Metadata: SchemaTypes.Metadata;
  MoveAspectInput: SchemaTypes.MoveAspectInput;
  Mutation: {};
  NVP: SchemaTypes.Nvp;
  NameID: SchemaTypes.Scalars['NameID'];
  Opportunity: SchemaTypes.Opportunity;
  OpportunityCreated: SchemaTypes.OpportunityCreated;
  OpportunityEventInput: SchemaTypes.OpportunityEventInput;
  OpportunityTemplate: SchemaTypes.OpportunityTemplate;
  Organization: SchemaTypes.Organization;
  OrganizationAuthorizationResetInput: SchemaTypes.OrganizationAuthorizationResetInput;
  OrganizationFilterInput: SchemaTypes.OrganizationFilterInput;
  OrganizationTemplate: SchemaTypes.OrganizationTemplate;
  OrganizationVerification: SchemaTypes.OrganizationVerification;
  OrganizationVerificationEventInput: SchemaTypes.OrganizationVerificationEventInput;
  OryConfig: SchemaTypes.OryConfig;
  PageInfo: SchemaTypes.PageInfo;
  PaginatedOrganization: SchemaTypes.PaginatedOrganization;
  PaginatedUsers: SchemaTypes.PaginatedUsers;
  Platform: SchemaTypes.Platform;
  PlatformLocations: SchemaTypes.PlatformLocations;
  Preference: SchemaTypes.Preference;
  PreferenceDefinition: SchemaTypes.PreferenceDefinition;
  Profile: SchemaTypes.Profile;
  ProfileCredentialVerified: SchemaTypes.ProfileCredentialVerified;
  Project: SchemaTypes.Project;
  ProjectEventInput: SchemaTypes.ProjectEventInput;
  Query: {};
  Question: SchemaTypes.Question;
  QuestionTemplate: SchemaTypes.QuestionTemplate;
  Reference: SchemaTypes.Reference;
  Relation: SchemaTypes.Relation;
  RelayPaginatedUser: SchemaTypes.RelayPaginatedUser;
  RelayPaginatedUserEdge: SchemaTypes.RelayPaginatedUserEdge;
  RelayPaginatedUserPageInfo: SchemaTypes.RelayPaginatedUserPageInfo;
  RemoveChallengeAdminInput: SchemaTypes.RemoveChallengeAdminInput;
  RemoveCommunityLeadOrganizationInput: SchemaTypes.RemoveCommunityLeadOrganizationInput;
  RemoveCommunityLeadUserInput: SchemaTypes.RemoveCommunityLeadUserInput;
  RemoveCommunityMemberOrganizationInput: SchemaTypes.RemoveCommunityMemberOrganizationInput;
  RemoveCommunityMemberUserInput: SchemaTypes.RemoveCommunityMemberUserInput;
  RemoveGlobalAdminInput: SchemaTypes.RemoveGlobalAdminInput;
  RemoveGlobalCommunityAdminInput: SchemaTypes.RemoveGlobalCommunityAdminInput;
  RemoveGlobalHubsAdminInput: SchemaTypes.RemoveGlobalHubsAdminInput;
  RemoveHubAdminInput: SchemaTypes.RemoveHubAdminInput;
  RemoveOpportunityAdminInput: SchemaTypes.RemoveOpportunityAdminInput;
  RemoveOrganizationAdminInput: SchemaTypes.RemoveOrganizationAdminInput;
  RemoveOrganizationAssociateInput: SchemaTypes.RemoveOrganizationAssociateInput;
  RemoveOrganizationOwnerInput: SchemaTypes.RemoveOrganizationOwnerInput;
  RemoveUserGroupMemberInput: SchemaTypes.RemoveUserGroupMemberInput;
  RevokeAuthorizationCredentialInput: SchemaTypes.RevokeAuthorizationCredentialInput;
  RolesOrganizationInput: SchemaTypes.RolesOrganizationInput;
  RolesResult: SchemaTypes.RolesResult;
  RolesResultCommunity: SchemaTypes.RolesResultCommunity;
  RolesResultHub: SchemaTypes.RolesResultHub;
  RolesResultOrganization: SchemaTypes.RolesResultOrganization;
  RolesUserInput: SchemaTypes.RolesUserInput;
  SearchInput: SchemaTypes.SearchInput;
  SearchResult:
    | ResolversParentTypes['SearchResultCard']
    | ResolversParentTypes['SearchResultChallenge']
    | ResolversParentTypes['SearchResultHub']
    | ResolversParentTypes['SearchResultOpportunity']
    | ResolversParentTypes['SearchResultOrganization']
    | ResolversParentTypes['SearchResultUser']
    | ResolversParentTypes['SearchResultUserGroup'];
  SearchResultCard: SchemaTypes.SearchResultCard;
  SearchResultChallenge: SchemaTypes.SearchResultChallenge;
  SearchResultHub: SchemaTypes.SearchResultHub;
  SearchResultOpportunity: SchemaTypes.SearchResultOpportunity;
  SearchResultOrganization: SchemaTypes.SearchResultOrganization;
  SearchResultUser: SchemaTypes.SearchResultUser;
  SearchResultUserGroup: SchemaTypes.SearchResultUserGroup;
  SendMessageOnCalloutInput: SchemaTypes.SendMessageOnCalloutInput;
  Sentry: SchemaTypes.Sentry;
  ServiceMetadata: SchemaTypes.ServiceMetadata;
  StorageConfig: SchemaTypes.StorageConfig;
  String: SchemaTypes.Scalars['String'];
  Subscription: {};
  Tagset: SchemaTypes.Tagset;
  TagsetTemplate: SchemaTypes.TagsetTemplate;
  Template: SchemaTypes.Template;
  TemplateInfo: SchemaTypes.TemplateInfo;
  TemplatesSet: SchemaTypes.TemplatesSet;
  TemplatesSetPolicy: SchemaTypes.TemplatesSetPolicy;
  Timeline: SchemaTypes.Timeline;
  UUID: SchemaTypes.Scalars['UUID'];
  UUID_NAMEID: SchemaTypes.Scalars['UUID_NAMEID'];
  UUID_NAMEID_EMAIL: SchemaTypes.Scalars['UUID_NAMEID_EMAIL'];
  UpdateActorInput: SchemaTypes.UpdateActorInput;
  UpdateAspectInput: SchemaTypes.UpdateAspectInput;
  UpdateAspectTemplateInput: SchemaTypes.UpdateAspectTemplateInput;
  UpdateCalendarEventInput: SchemaTypes.UpdateCalendarEventInput;
  UpdateCalloutCanvasTemplateInput: SchemaTypes.UpdateCalloutCanvasTemplateInput;
  UpdateCalloutCardTemplateInput: SchemaTypes.UpdateCalloutCardTemplateInput;
  UpdateCalloutInput: SchemaTypes.UpdateCalloutInput;
  UpdateCalloutPublishInfoInput: SchemaTypes.UpdateCalloutPublishInfoInput;
  UpdateCalloutVisibilityInput: SchemaTypes.UpdateCalloutVisibilityInput;
  UpdateCanvasDirectInput: SchemaTypes.UpdateCanvasDirectInput;
  UpdateCanvasTemplateInput: SchemaTypes.UpdateCanvasTemplateInput;
  UpdateChallengeInnovationFlowInput: SchemaTypes.UpdateChallengeInnovationFlowInput;
  UpdateChallengeInput: SchemaTypes.UpdateChallengeInput;
  UpdateChallengePreferenceInput: SchemaTypes.UpdateChallengePreferenceInput;
  UpdateCommunityApplicationFormInput: SchemaTypes.UpdateCommunityApplicationFormInput;
  UpdateContextInput: SchemaTypes.UpdateContextInput;
  UpdateDiscussionInput: SchemaTypes.UpdateDiscussionInput;
  UpdateEcosystemModelInput: SchemaTypes.UpdateEcosystemModelInput;
  UpdateFormInput: SchemaTypes.UpdateFormInput;
  UpdateFormQuestionInput: SchemaTypes.UpdateFormQuestionInput;
  UpdateHubInput: SchemaTypes.UpdateHubInput;
  UpdateHubPreferenceInput: SchemaTypes.UpdateHubPreferenceInput;
  UpdateHubVisibilityInput: SchemaTypes.UpdateHubVisibilityInput;
  UpdateInnovationPackInput: SchemaTypes.UpdateInnovationPackInput;
  UpdateLifecycleTemplateInput: SchemaTypes.UpdateLifecycleTemplateInput;
  UpdateLocationInput: SchemaTypes.UpdateLocationInput;
  UpdateOpportunityInnovationFlowInput: SchemaTypes.UpdateOpportunityInnovationFlowInput;
  UpdateOpportunityInput: SchemaTypes.UpdateOpportunityInput;
  UpdateOrganizationInput: SchemaTypes.UpdateOrganizationInput;
  UpdateOrganizationPreferenceInput: SchemaTypes.UpdateOrganizationPreferenceInput;
  UpdateProfileDirectInput: SchemaTypes.UpdateProfileDirectInput;
  UpdateProfileInput: SchemaTypes.UpdateProfileInput;
  UpdateProjectInput: SchemaTypes.UpdateProjectInput;
  UpdateReferenceInput: SchemaTypes.UpdateReferenceInput;
  UpdateTagsetInput: SchemaTypes.UpdateTagsetInput;
  UpdateTemplateInfoInput: SchemaTypes.UpdateTemplateInfoInput;
  UpdateUserGroupInput: SchemaTypes.UpdateUserGroupInput;
  UpdateUserInput: SchemaTypes.UpdateUserInput;
  UpdateUserPreferenceInput: SchemaTypes.UpdateUserPreferenceInput;
  UpdateVisualInput: SchemaTypes.UpdateVisualInput;
  Updates: SchemaTypes.Updates;
  UpdatesRemoveMessageInput: SchemaTypes.UpdatesRemoveMessageInput;
  UpdatesSendMessageInput: SchemaTypes.UpdatesSendMessageInput;
  Upload: SchemaTypes.Scalars['Upload'];
  User: SchemaTypes.User;
  UserAuthorizationPrivilegesInput: SchemaTypes.UserAuthorizationPrivilegesInput;
  UserAuthorizationResetInput: SchemaTypes.UserAuthorizationResetInput;
  UserFilterInput: SchemaTypes.UserFilterInput;
  UserGroup: SchemaTypes.UserGroup;
  UserSendMessageInput: SchemaTypes.UserSendMessageInput;
  UserTemplate: SchemaTypes.UserTemplate;
  UsersWithAuthorizationCredentialInput: SchemaTypes.UsersWithAuthorizationCredentialInput;
  VerifiedCredential: SchemaTypes.VerifiedCredential;
  VerifiedCredentialClaim: SchemaTypes.VerifiedCredentialClaim;
  Visual: SchemaTypes.Visual;
  VisualUploadImageInput: SchemaTypes.VisualUploadImageInput;
};

export type ApmResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['APM'] = ResolversParentTypes['APM']
> = {
  endpoint?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rumEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityCreatedSubscriptionResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityCreatedSubscriptionResult'] = ResolversParentTypes['ActivityCreatedSubscriptionResult']
> = {
  activity?: Resolver<
    ResolversTypes['ActivityLogEntry'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityLogEntryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityLogEntry'] = ResolversParentTypes['ActivityLogEntry']
> = {
  __resolveType: TypeResolveFn<
    | 'ActivityLogEntryCalloutCanvasCreated'
    | 'ActivityLogEntryCalloutCardComment'
    | 'ActivityLogEntryCalloutCardCreated'
    | 'ActivityLogEntryCalloutDiscussionComment'
    | 'ActivityLogEntryCalloutPublished'
    | 'ActivityLogEntryChallengeCreated'
    | 'ActivityLogEntryMemberJoined'
    | 'ActivityLogEntryOpportunityCreated'
    | 'ActivityLogEntryUpdateSent',
    ParentType,
    ContextType
  >;
  collaborationID?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  triggeredBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ActivityEventType'], ParentType, ContextType>;
};

export type ActivityLogEntryCalloutCanvasCreatedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityLogEntryCalloutCanvasCreated'] = ResolversParentTypes['ActivityLogEntryCalloutCanvasCreated']
> = {
  callout?: Resolver<ResolversTypes['Callout'], ParentType, ContextType>;
  canvas?: Resolver<ResolversTypes['Canvas'], ParentType, ContextType>;
  collaborationID?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  triggeredBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ActivityEventType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityLogEntryCalloutCardCommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityLogEntryCalloutCardComment'] = ResolversParentTypes['ActivityLogEntryCalloutCardComment']
> = {
  callout?: Resolver<ResolversTypes['Callout'], ParentType, ContextType>;
  card?: Resolver<ResolversTypes['Aspect'], ParentType, ContextType>;
  collaborationID?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  triggeredBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ActivityEventType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityLogEntryCalloutCardCreatedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityLogEntryCalloutCardCreated'] = ResolversParentTypes['ActivityLogEntryCalloutCardCreated']
> = {
  callout?: Resolver<ResolversTypes['Callout'], ParentType, ContextType>;
  card?: Resolver<ResolversTypes['Aspect'], ParentType, ContextType>;
  collaborationID?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  triggeredBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ActivityEventType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityLogEntryCalloutDiscussionCommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityLogEntryCalloutDiscussionComment'] = ResolversParentTypes['ActivityLogEntryCalloutDiscussionComment']
> = {
  callout?: Resolver<ResolversTypes['Callout'], ParentType, ContextType>;
  collaborationID?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  triggeredBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ActivityEventType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityLogEntryCalloutPublishedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityLogEntryCalloutPublished'] = ResolversParentTypes['ActivityLogEntryCalloutPublished']
> = {
  callout?: Resolver<ResolversTypes['Callout'], ParentType, ContextType>;
  collaborationID?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  triggeredBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ActivityEventType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityLogEntryChallengeCreatedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityLogEntryChallengeCreated'] = ResolversParentTypes['ActivityLogEntryChallengeCreated']
> = {
  challenge?: Resolver<ResolversTypes['Challenge'], ParentType, ContextType>;
  collaborationID?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  triggeredBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ActivityEventType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityLogEntryMemberJoinedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityLogEntryMemberJoined'] = ResolversParentTypes['ActivityLogEntryMemberJoined']
> = {
  collaborationID?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  community?: Resolver<ResolversTypes['Community'], ParentType, ContextType>;
  communityType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  triggeredBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ActivityEventType'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityLogEntryOpportunityCreatedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityLogEntryOpportunityCreated'] = ResolversParentTypes['ActivityLogEntryOpportunityCreated']
> = {
  collaborationID?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  opportunity?: Resolver<
    ResolversTypes['Opportunity'],
    ParentType,
    ContextType
  >;
  triggeredBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ActivityEventType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivityLogEntryUpdateSentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActivityLogEntryUpdateSent'] = ResolversParentTypes['ActivityLogEntryUpdateSent']
> = {
  collaborationID?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  triggeredBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ActivityEventType'], ParentType, ContextType>;
  updates?: Resolver<ResolversTypes['Updates'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Actor'] = ResolversParentTypes['Actor']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  impact?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActorGroupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ActorGroup'] = ResolversParentTypes['ActorGroup']
> = {
  actors?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Actor']>>,
    ParentType,
    ContextType
  >;
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Agent'] = ResolversParentTypes['Agent']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  credentials?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Credential']>>,
    ParentType,
    ContextType
  >;
  did?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['DID']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  verifiedCredentials?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['VerifiedCredential']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgentBeginVerifiedCredentialOfferOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AgentBeginVerifiedCredentialOfferOutput'] = ResolversParentTypes['AgentBeginVerifiedCredentialOfferOutput']
> = {
  jwt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  qrCodeImg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgentBeginVerifiedCredentialRequestOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AgentBeginVerifiedCredentialRequestOutput'] = ResolversParentTypes['AgentBeginVerifiedCredentialRequestOutput']
> = {
  jwt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  qrCodeImg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Application'] = ResolversParentTypes['Application']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  createdDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  lifecycle?: Resolver<ResolversTypes['Lifecycle'], ParentType, ContextType>;
  questions?: Resolver<
    Array<ResolversTypes['Question']>,
    ParentType,
    ContextType
  >;
  updatedDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationForRoleResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicationForRoleResult'] = ResolversParentTypes['ApplicationForRoleResult']
> = {
  challengeID?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['UUID']>,
    ParentType,
    ContextType
  >;
  communityID?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hubID?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  opportunityID?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['UUID']>,
    ParentType,
    ContextType
  >;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApplicationTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ApplicationTemplate'] = ResolversParentTypes['ApplicationTemplate']
> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  questions?: Resolver<
    Array<ResolversTypes['QuestionTemplate']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AspectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Aspect'] = ResolversParentTypes['Aspect']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  banner?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Visual']>,
    ParentType,
    ContextType
  >;
  bannerNarrow?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Visual']>,
    ParentType,
    ContextType
  >;
  callout?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Callout']>,
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Comments']>,
    ParentType,
    ContextType
  >;
  createdBy?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType
  >;
  createdDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  nameID?: Resolver<ResolversTypes['NameID'], ParentType, ContextType>;
  profile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AspectCommentsMessageReceivedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AspectCommentsMessageReceived'] = ResolversParentTypes['AspectCommentsMessageReceived']
> = {
  aspectID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['Message'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AspectTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AspectTemplate'] = ResolversParentTypes['AspectTemplate']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  defaultDescription?: Resolver<
    ResolversTypes['Markdown'],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  info?: Resolver<ResolversTypes['TemplateInfo'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticationConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuthenticationConfig'] = ResolversParentTypes['AuthenticationConfig']
> = {
  providers?: Resolver<
    Array<ResolversTypes['AuthenticationProviderConfig']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticationProviderConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuthenticationProviderConfig'] = ResolversParentTypes['AuthenticationProviderConfig']
> = {
  config?: Resolver<
    ResolversTypes['AuthenticationProviderConfigUnion'],
    ParentType,
    ContextType
  >;
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  icon?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticationProviderConfigUnionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuthenticationProviderConfigUnion'] = ResolversParentTypes['AuthenticationProviderConfigUnion']
> = {
  __resolveType: TypeResolveFn<'OryConfig', ParentType, ContextType>;
};

export type AuthorizationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Authorization'] = ResolversParentTypes['Authorization']
> = {
  anonymousReadAccess?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  credentialRules?: Resolver<
    SchemaTypes.Maybe<
      Array<ResolversTypes['AuthorizationPolicyRuleCredential']>
    >,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  myPrivileges?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['AuthorizationPrivilege']>>,
    ParentType,
    ContextType
  >;
  privilegeRules?: Resolver<
    SchemaTypes.Maybe<
      Array<ResolversTypes['AuthorizationPolicyRulePrivilege']>
    >,
    ParentType,
    ContextType
  >;
  verifiedCredentialRules?: Resolver<
    SchemaTypes.Maybe<
      Array<ResolversTypes['AuthorizationPolicyRuleVerifiedCredential']>
    >,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorizationPolicyRuleCredentialResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuthorizationPolicyRuleCredential'] = ResolversParentTypes['AuthorizationPolicyRuleCredential']
> = {
  criterias?: Resolver<
    Array<ResolversTypes['CredentialDefinition']>,
    ParentType,
    ContextType
  >;
  grantedPrivileges?: Resolver<
    Array<ResolversTypes['AuthorizationPrivilege']>,
    ParentType,
    ContextType
  >;
  inheritable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorizationPolicyRulePrivilegeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuthorizationPolicyRulePrivilege'] = ResolversParentTypes['AuthorizationPolicyRulePrivilege']
> = {
  grantedPrivileges?: Resolver<
    Array<ResolversTypes['AuthorizationPrivilege']>,
    ParentType,
    ContextType
  >;
  name?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  sourcePrivilege?: Resolver<
    ResolversTypes['AuthorizationPrivilege'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthorizationPolicyRuleVerifiedCredentialResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AuthorizationPolicyRuleVerifiedCredential'] = ResolversParentTypes['AuthorizationPolicyRuleVerifiedCredential']
> = {
  claimRule?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  credentialName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  grantedPrivileges?: Resolver<
    Array<ResolversTypes['AuthorizationPrivilege']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['CID'], any> {
  name: 'CID';
}

export type CalendarResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Calendar'] = ResolversParentTypes['Calendar']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  event?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['CalendarEvent']>,
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.CalendarEventArgs, 'ID'>
  >;
  events?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['CalendarEvent']>>,
    ParentType,
    ContextType,
    Partial<SchemaTypes.CalendarEventsArgs>
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CalendarEventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CalendarEvent'] = ResolversParentTypes['CalendarEvent']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Comments']>,
    ParentType,
    ContextType
  >;
  createdBy?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType
  >;
  createdDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  durationDays?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  durationMinutes?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  multipleDays?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  nameID?: Resolver<ResolversTypes['NameID'], ParentType, ContextType>;
  profile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  startDate?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes['CalendarEventType'], ParentType, ContextType>;
  wholeDay?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CalendarEventCommentsMessageReceivedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CalendarEventCommentsMessageReceived'] = ResolversParentTypes['CalendarEventCommentsMessageReceived']
> = {
  calendarEventID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['Message'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CalloutResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Callout'] = ResolversParentTypes['Callout']
> = {
  activity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  aspects?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Aspect']>>,
    ParentType,
    ContextType,
    Partial<SchemaTypes.CalloutAspectsArgs>
  >;
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  canvasTemplate?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['CanvasTemplate']>,
    ParentType,
    ContextType
  >;
  canvases?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Canvas']>>,
    ParentType,
    ContextType,
    Partial<SchemaTypes.CalloutCanvasesArgs>
  >;
  cardTemplate?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['AspectTemplate']>,
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Comments']>,
    ParentType,
    ContextType
  >;
  createdBy?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<ResolversTypes['Markdown'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  nameID?: Resolver<ResolversTypes['NameID'], ParentType, ContextType>;
  publishedBy?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType
  >;
  publishedDate?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  sortOrder?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['CalloutState'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['CalloutType'], ParentType, ContextType>;
  visibility?: Resolver<
    ResolversTypes['CalloutVisibility'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CalloutAspectCreatedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CalloutAspectCreated'] = ResolversParentTypes['CalloutAspectCreated']
> = {
  aspect?: Resolver<ResolversTypes['Aspect'], ParentType, ContextType>;
  calloutID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CalloutMessageReceivedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CalloutMessageReceived'] = ResolversParentTypes['CalloutMessageReceived']
> = {
  calloutID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  commentsID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['Message'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CanvasResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Canvas'] = ResolversParentTypes['Canvas']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  checkout?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['CanvasCheckout']>,
    ParentType,
    ContextType
  >;
  createdBy?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType
  >;
  createdDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  nameID?: Resolver<ResolversTypes['NameID'], ParentType, ContextType>;
  preview?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Visual']>,
    ParentType,
    ContextType
  >;
  value?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CanvasCheckoutResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CanvasCheckout'] = ResolversParentTypes['CanvasCheckout']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  lifecycle?: Resolver<ResolversTypes['Lifecycle'], ParentType, ContextType>;
  lockedBy?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes['CanvasCheckoutStateEnum'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CanvasContentUpdatedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CanvasContentUpdated'] = ResolversParentTypes['CanvasContentUpdated']
> = {
  canvasID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CanvasTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CanvasTemplate'] = ResolversParentTypes['CanvasTemplate']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  info?: Resolver<ResolversTypes['TemplateInfo'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Challenge'] = ResolversParentTypes['Challenge']
> = {
  agent?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Agent']>,
    ParentType,
    ContextType
  >;
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  challenges?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Challenge']>>,
    ParentType,
    ContextType
  >;
  collaboration?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Collaboration']>,
    ParentType,
    ContextType
  >;
  community?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Community']>,
    ParentType,
    ContextType
  >;
  context?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Context']>,
    ParentType,
    ContextType
  >;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hubID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  lifecycle?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Lifecycle']>,
    ParentType,
    ContextType
  >;
  metrics?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['NVP']>>,
    ParentType,
    ContextType
  >;
  nameID?: Resolver<ResolversTypes['NameID'], ParentType, ContextType>;
  opportunities?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Opportunity']>>,
    ParentType,
    ContextType,
    Partial<SchemaTypes.ChallengeOpportunitiesArgs>
  >;
  preferences?: Resolver<
    Array<ResolversTypes['Preference']>,
    ParentType,
    ContextType
  >;
  tagset?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Tagset']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeCreatedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ChallengeCreated'] = ResolversParentTypes['ChallengeCreated']
> = {
  challenge?: Resolver<ResolversTypes['Challenge'], ParentType, ContextType>;
  hubID?: Resolver<ResolversTypes['UUID_NAMEID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChallengeTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ChallengeTemplate'] = ResolversParentTypes['ChallengeTemplate']
> = {
  feedback?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['FeedbackTemplate']>>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollaborationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Collaboration'] = ResolversParentTypes['Collaboration']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  callouts?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Callout']>>,
    ParentType,
    ContextType,
    Partial<SchemaTypes.CollaborationCalloutsArgs>
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  relations?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Relation']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Comments'] = ResolversParentTypes['Comments']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  commentsCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  messages?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Message']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunicationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Communication'] = ResolversParentTypes['Communication']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  discussion?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Discussion']>,
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.CommunicationDiscussionArgs, 'ID'>
  >;
  discussionCategories?: Resolver<
    Array<ResolversTypes['DiscussionCategory']>,
    ParentType,
    ContextType
  >;
  discussions?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Discussion']>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  updates?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Updates']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunicationAdminMembershipResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommunicationAdminMembershipResult'] = ResolversParentTypes['CommunicationAdminMembershipResult']
> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rooms?: Resolver<
    Array<ResolversTypes['CommunicationAdminRoomMembershipResult']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunicationAdminOrphanedUsageResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommunicationAdminOrphanedUsageResult'] = ResolversParentTypes['CommunicationAdminOrphanedUsageResult']
> = {
  rooms?: Resolver<
    Array<ResolversTypes['CommunicationAdminRoomResult']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunicationAdminRoomMembershipResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommunicationAdminRoomMembershipResult'] = ResolversParentTypes['CommunicationAdminRoomMembershipResult']
> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extraMembers?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  joinRule?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  missingMembers?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  roomID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunicationAdminRoomResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommunicationAdminRoomResult'] = ResolversParentTypes['CommunicationAdminRoomResult']
> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunicationDiscussionMessageReceivedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommunicationDiscussionMessageReceived'] = ResolversParentTypes['CommunicationDiscussionMessageReceived']
> = {
  discussionID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['Message'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunicationRoomResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommunicationRoom'] = ResolversParentTypes['CommunicationRoom']
> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  messages?: Resolver<
    Array<ResolversTypes['Message']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunicationUpdateMessageReceivedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommunicationUpdateMessageReceived'] = ResolversParentTypes['CommunicationUpdateMessageReceived']
> = {
  message?: Resolver<ResolversTypes['Message'], ParentType, ContextType>;
  updatesID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Community'] = ResolversParentTypes['Community']
> = {
  applicationForm?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Form']>,
    ParentType,
    ContextType
  >;
  applications?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Application']>>,
    ParentType,
    ContextType
  >;
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  availableLeadUsers?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['PaginatedUsers']>,
    ParentType,
    ContextType,
    Partial<SchemaTypes.CommunityAvailableLeadUsersArgs>
  >;
  availableMemberUsers?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['PaginatedUsers']>,
    ParentType,
    ContextType,
    Partial<SchemaTypes.CommunityAvailableMemberUsersArgs>
  >;
  communication?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Communication']>,
    ParentType,
    ContextType
  >;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  groups?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['UserGroup']>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  leadOrganizations?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Organization']>>,
    ParentType,
    ContextType
  >;
  leadUsers?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['User']>>,
    ParentType,
    ContextType
  >;
  memberOrganizations?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Organization']>>,
    ParentType,
    ContextType
  >;
  memberUsers?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['User']>>,
    ParentType,
    ContextType,
    Partial<SchemaTypes.CommunityMemberUsersArgs>
  >;
  policy?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['CommunityPolicy']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunityPolicyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommunityPolicy'] = ResolversParentTypes['CommunityPolicy']
> = {
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  lead?: Resolver<
    ResolversTypes['CommunityRolePolicy'],
    ParentType,
    ContextType
  >;
  member?: Resolver<
    ResolversTypes['CommunityRolePolicy'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommunityRolePolicyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommunityRolePolicy'] = ResolversParentTypes['CommunityRolePolicy']
> = {
  credential?: Resolver<
    ResolversTypes['CredentialDefinition'],
    ParentType,
    ContextType
  >;
  maxOrg?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  maxUser?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minOrg?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minUser?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  parentCredentials?: Resolver<
    Array<ResolversTypes['CredentialDefinition']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Config'] = ResolversParentTypes['Config']
> = {
  apm?: Resolver<ResolversTypes['APM'], ParentType, ContextType>;
  authentication?: Resolver<
    ResolversTypes['AuthenticationConfig'],
    ParentType,
    ContextType
  >;
  geo?: Resolver<ResolversTypes['Geo'], ParentType, ContextType>;
  platform?: Resolver<
    ResolversTypes['PlatformLocations'],
    ParentType,
    ContextType
  >;
  sentry?: Resolver<ResolversTypes['Sentry'], ParentType, ContextType>;
  storage?: Resolver<ResolversTypes['StorageConfig'], ParentType, ContextType>;
  template?: Resolver<ResolversTypes['Template'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContextResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Context'] = ResolversParentTypes['Context']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  background?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Markdown']>,
    ParentType,
    ContextType
  >;
  ecosystemModel?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['EcosystemModel']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  impact?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Markdown']>,
    ParentType,
    ContextType
  >;
  location?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Location']>,
    ParentType,
    ContextType
  >;
  recommendations?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Reference']>>,
    ParentType,
    ContextType
  >;
  references?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Reference']>>,
    ParentType,
    ContextType
  >;
  tagline?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  vision?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Markdown']>,
    ParentType,
    ContextType
  >;
  visuals?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Visual']>>,
    ParentType,
    ContextType
  >;
  who?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Markdown']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributorRolesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ContributorRoles'] = ResolversParentTypes['ContributorRoles']
> = {
  applications?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['ApplicationForRoleResult']>>,
    ParentType,
    ContextType
  >;
  hubs?: Resolver<
    Array<ResolversTypes['RolesResultHub']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  organizations?: Resolver<
    Array<ResolversTypes['RolesResultOrganization']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CredentialResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Credential'] = ResolversParentTypes['Credential']
> = {
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  resourceID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<
    ResolversTypes['AuthorizationCredential'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CredentialDefinitionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CredentialDefinition'] = ResolversParentTypes['CredentialDefinition']
> = {
  resourceID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CredentialMetadataOutputResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CredentialMetadataOutput'] = ResolversParentTypes['CredentialMetadataOutput']
> = {
  context?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schema?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  types?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  uniqueType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DID'], any> {
  name: 'DID';
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DirectRoomResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DirectRoom'] = ResolversParentTypes['DirectRoom']
> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  messages?: Resolver<
    Array<ResolversTypes['Message']>,
    ParentType,
    ContextType
  >;
  receiverID?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiscussionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Discussion'] = ResolversParentTypes['Discussion']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  category?: Resolver<
    ResolversTypes['DiscussionCategory'],
    ParentType,
    ContextType
  >;
  commentsCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdBy?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['UUID']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  messages?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Message']>>,
    ParentType,
    ContextType
  >;
  timestamp?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EcosystemModelResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['EcosystemModel'] = ResolversParentTypes['EcosystemModel']
> = {
  actorGroups?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['ActorGroup']>>,
    ParentType,
    ContextType
  >;
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeatureFlagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FeatureFlag'] = ResolversParentTypes['FeatureFlag']
> = {
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeedbackTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FeedbackTemplate'] = ResolversParentTypes['FeedbackTemplate']
> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  questions?: Resolver<
    Array<ResolversTypes['QuestionTemplate']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileStorageConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FileStorageConfig'] = ResolversParentTypes['FileStorageConfig']
> = {
  maxFileSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  mimeTypes?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FormResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Form'] = ResolversParentTypes['Form']
> = {
  description?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Markdown']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  questions?: Resolver<
    Array<ResolversTypes['FormQuestion']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FormQuestionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FormQuestion'] = ResolversParentTypes['FormQuestion']
> = {
  explanation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maxLength?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sortOrder?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Geo'] = ResolversParentTypes['Geo']
> = {
  endpoint?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupableResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Groupable'] = ResolversParentTypes['Groupable']
> = {
  __resolveType: TypeResolveFn<
    'Community' | 'Organization',
    ParentType,
    ContextType
  >;
  groups?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['UserGroup']>>,
    ParentType,
    ContextType
  >;
};

export type HubResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Hub'] = ResolversParentTypes['Hub']
> = {
  agent?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Agent']>,
    ParentType,
    ContextType
  >;
  application?: Resolver<
    ResolversTypes['Application'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.HubApplicationArgs, 'ID'>
  >;
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  challenge?: Resolver<
    ResolversTypes['Challenge'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.HubChallengeArgs, 'ID'>
  >;
  challenges?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Challenge']>>,
    ParentType,
    ContextType,
    Partial<SchemaTypes.HubChallengesArgs>
  >;
  collaboration?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Collaboration']>,
    ParentType,
    ContextType
  >;
  community?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Community']>,
    ParentType,
    ContextType,
    Partial<SchemaTypes.HubCommunityArgs>
  >;
  context?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Context']>,
    ParentType,
    ContextType
  >;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  group?: Resolver<
    ResolversTypes['UserGroup'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.HubGroupArgs, 'ID'>
  >;
  groups?: Resolver<
    Array<ResolversTypes['UserGroup']>,
    ParentType,
    ContextType
  >;
  groupsWithTag?: Resolver<
    Array<ResolversTypes['UserGroup']>,
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.HubGroupsWithTagArgs, 'tag'>
  >;
  host?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Organization']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  metrics?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['NVP']>>,
    ParentType,
    ContextType
  >;
  nameID?: Resolver<ResolversTypes['NameID'], ParentType, ContextType>;
  opportunities?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Opportunity']>>,
    ParentType,
    ContextType,
    Partial<SchemaTypes.HubOpportunitiesArgs>
  >;
  opportunity?: Resolver<
    ResolversTypes['Opportunity'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.HubOpportunityArgs, 'ID'>
  >;
  preferences?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Preference']>>,
    ParentType,
    ContextType
  >;
  project?: Resolver<
    ResolversTypes['Project'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.HubProjectArgs, 'ID'>
  >;
  projects?: Resolver<
    Array<ResolversTypes['Project']>,
    ParentType,
    ContextType
  >;
  tagset?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Tagset']>,
    ParentType,
    ContextType
  >;
  templates?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['TemplatesSet']>,
    ParentType,
    ContextType
  >;
  timeline?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Timeline']>,
    ParentType,
    ContextType
  >;
  visibility?: Resolver<
    ResolversTypes['HubVisibility'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HubAspectTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HubAspectTemplate'] = ResolversParentTypes['HubAspectTemplate']
> = {
  defaultDescription?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  typeDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ISearchResultsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ISearchResults'] = ResolversParentTypes['ISearchResults']
> = {
  contributionResults?: Resolver<
    Array<ResolversTypes['SearchResult']>,
    ParentType,
    ContextType
  >;
  contributionResultsCount?: Resolver<
    ResolversTypes['Float'],
    ParentType,
    ContextType
  >;
  contributorResults?: Resolver<
    Array<ResolversTypes['SearchResult']>,
    ParentType,
    ContextType
  >;
  contributorResultsCount?: Resolver<
    ResolversTypes['Float'],
    ParentType,
    ContextType
  >;
  groupResults?: Resolver<
    Array<ResolversTypes['SearchResult']>,
    ParentType,
    ContextType
  >;
  journeyResults?: Resolver<
    Array<ResolversTypes['SearchResult']>,
    ParentType,
    ContextType
  >;
  journeyResultsCount?: Resolver<
    ResolversTypes['Float'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InnovatonPackResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['InnovatonPack'] = ResolversParentTypes['InnovatonPack']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  nameID?: Resolver<ResolversTypes['NameID'], ParentType, ContextType>;
  provider?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Organization']>,
    ParentType,
    ContextType
  >;
  templates?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['TemplatesSet']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LibraryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Library'] = ResolversParentTypes['Library']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  innovationPack?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['InnovatonPack']>,
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.LibraryInnovationPackArgs, 'ID'>
  >;
  innovationPacks?: Resolver<
    Array<ResolversTypes['InnovatonPack']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LifecycleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Lifecycle'] = ResolversParentTypes['Lifecycle']
> = {
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  machineDef?: Resolver<
    ResolversTypes['LifecycleDefinition'],
    ParentType,
    ContextType
  >;
  nextEvents?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  state?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  stateIsFinal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  templateName?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LifecycleDefinitionScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['LifecycleDefinition'], any> {
  name: 'LifecycleDefinition';
}

export type LifecycleTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LifecycleTemplate'] = ResolversParentTypes['LifecycleTemplate']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  definition?: Resolver<
    ResolversTypes['LifecycleDefinition'],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  info?: Resolver<ResolversTypes['TemplateInfo'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['LifecycleType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']
> = {
  addressLine1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addressLine2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stateOrProvince?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface MarkdownScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Markdown'], any> {
  name: 'Markdown';
}

export type MessageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']
> = {
  id?: Resolver<ResolversTypes['MessageID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['Markdown'], ParentType, ContextType>;
  sender?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType
  >;
  timestamp?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface MessageIdScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['MessageID'], any> {
  name: 'MessageID';
}

export type MetadataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Metadata'] = ResolversParentTypes['Metadata']
> = {
  metrics?: Resolver<Array<ResolversTypes['NVP']>, ParentType, ContextType>;
  services?: Resolver<
    Array<ResolversTypes['ServiceMetadata']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  adminCommunicationEnsureAccessToCommunications?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAdminCommunicationEnsureAccessToCommunicationsArgs,
      'communicationData'
    >
  >;
  adminCommunicationRemoveOrphanedRoom?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAdminCommunicationRemoveOrphanedRoomArgs,
      'orphanedRoomData'
    >
  >;
  adminCommunicationUpdateRoomsJoinRule?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAdminCommunicationUpdateRoomsJoinRuleArgs,
      'changeRoomAccessData'
    >
  >;
  applyForCommunityMembership?: Resolver<
    ResolversTypes['Application'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationApplyForCommunityMembershipArgs,
      'applicationData'
    >
  >;
  assignOrganizationAsCommunityLead?: Resolver<
    ResolversTypes['Community'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAssignOrganizationAsCommunityLeadArgs,
      'leadershipData'
    >
  >;
  assignOrganizationAsCommunityMember?: Resolver<
    ResolversTypes['Community'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAssignOrganizationAsCommunityMemberArgs,
      'membershipData'
    >
  >;
  assignUserAsChallengeAdmin?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAssignUserAsChallengeAdminArgs,
      'membershipData'
    >
  >;
  assignUserAsCommunityLead?: Resolver<
    ResolversTypes['Community'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAssignUserAsCommunityLeadArgs,
      'leadershipData'
    >
  >;
  assignUserAsCommunityMember?: Resolver<
    ResolversTypes['Community'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAssignUserAsCommunityMemberArgs,
      'membershipData'
    >
  >;
  assignUserAsGlobalAdmin?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAssignUserAsGlobalAdminArgs,
      'membershipData'
    >
  >;
  assignUserAsGlobalCommunityAdmin?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAssignUserAsGlobalCommunityAdminArgs,
      'membershipData'
    >
  >;
  assignUserAsGlobalHubsAdmin?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAssignUserAsGlobalHubsAdminArgs,
      'membershipData'
    >
  >;
  assignUserAsHubAdmin?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAssignUserAsHubAdminArgs,
      'membershipData'
    >
  >;
  assignUserAsOpportunityAdmin?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAssignUserAsOpportunityAdminArgs,
      'membershipData'
    >
  >;
  assignUserAsOrganizationAdmin?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAssignUserAsOrganizationAdminArgs,
      'membershipData'
    >
  >;
  assignUserAsOrganizationOwner?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAssignUserAsOrganizationOwnerArgs,
      'membershipData'
    >
  >;
  assignUserToGroup?: Resolver<
    ResolversTypes['UserGroup'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationAssignUserToGroupArgs, 'membershipData'>
  >;
  assignUserToOrganization?: Resolver<
    ResolversTypes['Organization'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAssignUserToOrganizationArgs,
      'membershipData'
    >
  >;
  authorizationPolicyResetOnHub?: Resolver<
    ResolversTypes['Hub'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAuthorizationPolicyResetOnHubArgs,
      'authorizationResetData'
    >
  >;
  authorizationPolicyResetOnOrganization?: Resolver<
    ResolversTypes['Organization'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAuthorizationPolicyResetOnOrganizationArgs,
      'authorizationResetData'
    >
  >;
  authorizationPolicyResetOnPlatform?: Resolver<
    ResolversTypes['Platform'],
    ParentType,
    ContextType
  >;
  authorizationPolicyResetOnUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationAuthorizationPolicyResetOnUserArgs,
      'authorizationResetData'
    >
  >;
  beginAlkemioUserVerifiedCredentialOfferInteraction?: Resolver<
    ResolversTypes['AgentBeginVerifiedCredentialOfferOutput'],
    ParentType,
    ContextType
  >;
  beginCommunityMemberVerifiedCredentialOfferInteraction?: Resolver<
    ResolversTypes['AgentBeginVerifiedCredentialOfferOutput'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationBeginCommunityMemberVerifiedCredentialOfferInteractionArgs,
      'communityID'
    >
  >;
  beginVerifiedCredentialRequestInteraction?: Resolver<
    ResolversTypes['AgentBeginVerifiedCredentialRequestOutput'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationBeginVerifiedCredentialRequestInteractionArgs,
      'types'
    >
  >;
  convertChallengeToHub?: Resolver<
    ResolversTypes['Hub'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationConvertChallengeToHubArgs, 'convertData'>
  >;
  convertOpportunityToChallenge?: Resolver<
    ResolversTypes['Challenge'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationConvertOpportunityToChallengeArgs,
      'convertData'
    >
  >;
  createActor?: Resolver<
    ResolversTypes['Actor'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationCreateActorArgs, 'actorData'>
  >;
  createActorGroup?: Resolver<
    ResolversTypes['ActorGroup'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationCreateActorGroupArgs, 'actorGroupData'>
  >;
  createAspectOnCallout?: Resolver<
    ResolversTypes['Aspect'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationCreateAspectOnCalloutArgs, 'aspectData'>
  >;
  createAspectTemplate?: Resolver<
    ResolversTypes['AspectTemplate'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationCreateAspectTemplateArgs,
      'aspectTemplateInput'
    >
  >;
  createCalloutOnCollaboration?: Resolver<
    ResolversTypes['Callout'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationCreateCalloutOnCollaborationArgs,
      'calloutData'
    >
  >;
  createCanvasOnCallout?: Resolver<
    ResolversTypes['Canvas'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationCreateCanvasOnCalloutArgs, 'canvasData'>
  >;
  createCanvasTemplate?: Resolver<
    ResolversTypes['CanvasTemplate'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationCreateCanvasTemplateArgs,
      'canvasTemplateInput'
    >
  >;
  createChallenge?: Resolver<
    ResolversTypes['Challenge'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationCreateChallengeArgs, 'challengeData'>
  >;
  createChildChallenge?: Resolver<
    ResolversTypes['Challenge'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationCreateChildChallengeArgs, 'challengeData'>
  >;
  createDiscussion?: Resolver<
    ResolversTypes['Discussion'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationCreateDiscussionArgs, 'createData'>
  >;
  createEventOnCalendar?: Resolver<
    ResolversTypes['CalendarEvent'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationCreateEventOnCalendarArgs, 'eventData'>
  >;
  createFeedbackOnCommunityContext?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationCreateFeedbackOnCommunityContextArgs,
      'feedbackData'
    >
  >;
  createGroupOnCommunity?: Resolver<
    ResolversTypes['UserGroup'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationCreateGroupOnCommunityArgs, 'groupData'>
  >;
  createGroupOnOrganization?: Resolver<
    ResolversTypes['UserGroup'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationCreateGroupOnOrganizationArgs,
      'groupData'
    >
  >;
  createHub?: Resolver<
    ResolversTypes['Hub'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationCreateHubArgs, 'hubData'>
  >;
  createInnovationPackOnLibrary?: Resolver<
    ResolversTypes['InnovatonPack'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationCreateInnovationPackOnLibraryArgs,
      'packData'
    >
  >;
  createLifecycleTemplate?: Resolver<
    ResolversTypes['LifecycleTemplate'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationCreateLifecycleTemplateArgs,
      'lifecycleTemplateInput'
    >
  >;
  createOpportunity?: Resolver<
    ResolversTypes['Opportunity'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationCreateOpportunityArgs, 'opportunityData'>
  >;
  createOrganization?: Resolver<
    ResolversTypes['Organization'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationCreateOrganizationArgs,
      'organizationData'
    >
  >;
  createProject?: Resolver<
    ResolversTypes['Project'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationCreateProjectArgs, 'projectData'>
  >;
  createReferenceOnContext?: Resolver<
    ResolversTypes['Reference'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationCreateReferenceOnContextArgs,
      'referenceInput'
    >
  >;
  createReferenceOnProfile?: Resolver<
    ResolversTypes['Reference'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationCreateReferenceOnProfileArgs,
      'referenceInput'
    >
  >;
  createRelationOnCollaboration?: Resolver<
    ResolversTypes['Relation'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationCreateRelationOnCollaborationArgs,
      'relationData'
    >
  >;
  createTagsetOnProfile?: Resolver<
    ResolversTypes['Tagset'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationCreateTagsetOnProfileArgs, 'tagsetData'>
  >;
  createUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationCreateUserArgs, 'userData'>
  >;
  createUserNewRegistration?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType
  >;
  deleteActor?: Resolver<
    ResolversTypes['Actor'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteActorArgs, 'deleteData'>
  >;
  deleteActorGroup?: Resolver<
    ResolversTypes['ActorGroup'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteActorGroupArgs, 'deleteData'>
  >;
  deleteAspect?: Resolver<
    ResolversTypes['Aspect'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteAspectArgs, 'deleteData'>
  >;
  deleteAspectTemplate?: Resolver<
    ResolversTypes['AspectTemplate'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteAspectTemplateArgs, 'deleteData'>
  >;
  deleteCalendarEvent?: Resolver<
    ResolversTypes['CalendarEvent'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteCalendarEventArgs, 'deleteData'>
  >;
  deleteCallout?: Resolver<
    ResolversTypes['Callout'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteCalloutArgs, 'deleteData'>
  >;
  deleteCanvas?: Resolver<
    ResolversTypes['Canvas'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteCanvasArgs, 'canvasData'>
  >;
  deleteCanvasTemplate?: Resolver<
    ResolversTypes['CanvasTemplate'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteCanvasTemplateArgs, 'deleteData'>
  >;
  deleteChallenge?: Resolver<
    ResolversTypes['Challenge'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteChallengeArgs, 'deleteData'>
  >;
  deleteCollaboration?: Resolver<
    ResolversTypes['Collaboration'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteCollaborationArgs, 'deleteData'>
  >;
  deleteDiscussion?: Resolver<
    ResolversTypes['Discussion'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteDiscussionArgs, 'deleteData'>
  >;
  deleteFile?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteFileArgs, 'deleteData'>
  >;
  deleteHub?: Resolver<
    ResolversTypes['Hub'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteHubArgs, 'deleteData'>
  >;
  deleteInnovationPack?: Resolver<
    ResolversTypes['InnovatonPack'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteInnovationPackArgs, 'deleteData'>
  >;
  deleteLifecycleTemplate?: Resolver<
    ResolversTypes['LifecycleTemplate'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteLifecycleTemplateArgs, 'deleteData'>
  >;
  deleteOpportunity?: Resolver<
    ResolversTypes['Opportunity'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteOpportunityArgs, 'deleteData'>
  >;
  deleteOrganization?: Resolver<
    ResolversTypes['Organization'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteOrganizationArgs, 'deleteData'>
  >;
  deleteProject?: Resolver<
    ResolversTypes['Project'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteProjectArgs, 'deleteData'>
  >;
  deleteReference?: Resolver<
    ResolversTypes['Reference'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteReferenceArgs, 'deleteData'>
  >;
  deleteRelation?: Resolver<
    ResolversTypes['Relation'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteRelationArgs, 'deleteData'>
  >;
  deleteUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteUserArgs, 'deleteData'>
  >;
  deleteUserApplication?: Resolver<
    ResolversTypes['Application'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteUserApplicationArgs, 'deleteData'>
  >;
  deleteUserGroup?: Resolver<
    ResolversTypes['UserGroup'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationDeleteUserGroupArgs, 'deleteData'>
  >;
  eventOnApplication?: Resolver<
    ResolversTypes['Application'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationEventOnApplicationArgs,
      'applicationEventData'
    >
  >;
  eventOnCanvasCheckout?: Resolver<
    ResolversTypes['CanvasCheckout'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationEventOnCanvasCheckoutArgs,
      'canvasCheckoutEventData'
    >
  >;
  eventOnChallenge?: Resolver<
    ResolversTypes['Challenge'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationEventOnChallengeArgs,
      'challengeEventData'
    >
  >;
  eventOnOpportunity?: Resolver<
    ResolversTypes['Opportunity'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationEventOnOpportunityArgs,
      'opportunityEventData'
    >
  >;
  eventOnOrganizationVerification?: Resolver<
    ResolversTypes['OrganizationVerification'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationEventOnOrganizationVerificationArgs,
      'organizationVerificationEventData'
    >
  >;
  eventOnProject?: Resolver<
    ResolversTypes['Project'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationEventOnProjectArgs, 'projectEventData'>
  >;
  grantCredentialToUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationGrantCredentialToUserArgs,
      'grantCredentialData'
    >
  >;
  joinCommunity?: Resolver<
    ResolversTypes['Community'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationJoinCommunityArgs, 'joinCommunityData'>
  >;
  messageUser?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationMessageUserArgs, 'messageData'>
  >;
  moveAspectToCallout?: Resolver<
    ResolversTypes['Aspect'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationMoveAspectToCalloutArgs, 'moveAspectData'>
  >;
  removeComment?: Resolver<
    ResolversTypes['MessageID'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationRemoveCommentArgs, 'messageData'>
  >;
  removeMessageFromDiscussion?: Resolver<
    ResolversTypes['MessageID'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationRemoveMessageFromDiscussionArgs,
      'messageData'
    >
  >;
  removeOrganizationAsCommunityLead?: Resolver<
    ResolversTypes['Community'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationRemoveOrganizationAsCommunityLeadArgs,
      'leadershipData'
    >
  >;
  removeOrganizationAsCommunityMember?: Resolver<
    ResolversTypes['Community'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationRemoveOrganizationAsCommunityMemberArgs,
      'membershipData'
    >
  >;
  removeUpdate?: Resolver<
    ResolversTypes['MessageID'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationRemoveUpdateArgs, 'messageData'>
  >;
  removeUserAsChallengeAdmin?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationRemoveUserAsChallengeAdminArgs,
      'membershipData'
    >
  >;
  removeUserAsCommunityLead?: Resolver<
    ResolversTypes['Community'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationRemoveUserAsCommunityLeadArgs,
      'leadershipData'
    >
  >;
  removeUserAsCommunityMember?: Resolver<
    ResolversTypes['Community'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationRemoveUserAsCommunityMemberArgs,
      'membershipData'
    >
  >;
  removeUserAsGlobalAdmin?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationRemoveUserAsGlobalAdminArgs,
      'membershipData'
    >
  >;
  removeUserAsGlobalCommunityAdmin?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationRemoveUserAsGlobalCommunityAdminArgs,
      'membershipData'
    >
  >;
  removeUserAsGlobalHubsAdmin?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationRemoveUserAsGlobalHubsAdminArgs,
      'membershipData'
    >
  >;
  removeUserAsHubAdmin?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationRemoveUserAsHubAdminArgs,
      'membershipData'
    >
  >;
  removeUserAsOpportunityAdmin?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationRemoveUserAsOpportunityAdminArgs,
      'membershipData'
    >
  >;
  removeUserAsOrganizationAdmin?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationRemoveUserAsOrganizationAdminArgs,
      'membershipData'
    >
  >;
  removeUserAsOrganizationOwner?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationRemoveUserAsOrganizationOwnerArgs,
      'membershipData'
    >
  >;
  removeUserFromGroup?: Resolver<
    ResolversTypes['UserGroup'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationRemoveUserFromGroupArgs, 'membershipData'>
  >;
  removeUserFromOrganization?: Resolver<
    ResolversTypes['Organization'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationRemoveUserFromOrganizationArgs,
      'membershipData'
    >
  >;
  revokeCredentialFromUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationRevokeCredentialFromUserArgs,
      'revokeCredentialData'
    >
  >;
  sendComment?: Resolver<
    ResolversTypes['Message'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationSendCommentArgs, 'messageData'>
  >;
  sendMessageOnCallout?: Resolver<
    ResolversTypes['Message'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationSendMessageOnCalloutArgs, 'data'>
  >;
  sendMessageToCommunityLeads?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationSendMessageToCommunityLeadsArgs,
      'messageData'
    >
  >;
  sendMessageToDiscussion?: Resolver<
    ResolversTypes['Message'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationSendMessageToDiscussionArgs,
      'messageData'
    >
  >;
  sendMessageToOrganization?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationSendMessageToOrganizationArgs,
      'messageData'
    >
  >;
  sendMessageToUser?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationSendMessageToUserArgs, 'messageData'>
  >;
  sendUpdate?: Resolver<
    ResolversTypes['Message'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationSendUpdateArgs, 'messageData'>
  >;
  updateActor?: Resolver<
    ResolversTypes['Actor'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationUpdateActorArgs, 'actorData'>
  >;
  updateAspect?: Resolver<
    ResolversTypes['Aspect'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationUpdateAspectArgs, 'aspectData'>
  >;
  updateAspectTemplate?: Resolver<
    ResolversTypes['AspectTemplate'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationUpdateAspectTemplateArgs,
      'aspectTemplateInput'
    >
  >;
  updateCalendarEvent?: Resolver<
    ResolversTypes['CalendarEvent'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationUpdateCalendarEventArgs, 'eventData'>
  >;
  updateCallout?: Resolver<
    ResolversTypes['Callout'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationUpdateCalloutArgs, 'calloutData'>
  >;
  updateCalloutPublishInfo?: Resolver<
    ResolversTypes['Callout'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationUpdateCalloutPublishInfoArgs,
      'calloutData'
    >
  >;
  updateCalloutVisibility?: Resolver<
    ResolversTypes['Callout'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationUpdateCalloutVisibilityArgs,
      'calloutData'
    >
  >;
  updateCanvas?: Resolver<
    ResolversTypes['Canvas'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationUpdateCanvasArgs, 'canvasData'>
  >;
  updateCanvasTemplate?: Resolver<
    ResolversTypes['CanvasTemplate'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationUpdateCanvasTemplateArgs,
      'canvasTemplateInput'
    >
  >;
  updateChallenge?: Resolver<
    ResolversTypes['Challenge'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationUpdateChallengeArgs, 'challengeData'>
  >;
  updateChallengeInnovationFlow?: Resolver<
    ResolversTypes['Challenge'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationUpdateChallengeInnovationFlowArgs,
      'challengeData'
    >
  >;
  updateCommunityApplicationForm?: Resolver<
    ResolversTypes['Community'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationUpdateCommunityApplicationFormArgs,
      'applicationFormData'
    >
  >;
  updateDiscussion?: Resolver<
    ResolversTypes['Discussion'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationUpdateDiscussionArgs, 'updateData'>
  >;
  updateEcosystemModel?: Resolver<
    ResolversTypes['EcosystemModel'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationUpdateEcosystemModelArgs,
      'ecosystemModelData'
    >
  >;
  updateHub?: Resolver<
    ResolversTypes['Hub'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationUpdateHubArgs, 'hubData'>
  >;
  updateHubVisibility?: Resolver<
    ResolversTypes['Hub'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationUpdateHubVisibilityArgs, 'visibilityData'>
  >;
  updateInnovationPack?: Resolver<
    ResolversTypes['InnovatonPack'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationUpdateInnovationPackArgs,
      'innovationPackData'
    >
  >;
  updateLifecycleTemplate?: Resolver<
    ResolversTypes['LifecycleTemplate'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationUpdateLifecycleTemplateArgs,
      'lifecycleTemplateInput'
    >
  >;
  updateOpportunity?: Resolver<
    ResolversTypes['Opportunity'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationUpdateOpportunityArgs, 'opportunityData'>
  >;
  updateOpportunityInnovationFlow?: Resolver<
    ResolversTypes['Opportunity'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationUpdateOpportunityInnovationFlowArgs,
      'opportunityData'
    >
  >;
  updateOrganization?: Resolver<
    ResolversTypes['Organization'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationUpdateOrganizationArgs,
      'organizationData'
    >
  >;
  updatePreferenceOnChallenge?: Resolver<
    ResolversTypes['Preference'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationUpdatePreferenceOnChallengeArgs,
      'preferenceData'
    >
  >;
  updatePreferenceOnHub?: Resolver<
    ResolversTypes['Preference'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationUpdatePreferenceOnHubArgs,
      'preferenceData'
    >
  >;
  updatePreferenceOnOrganization?: Resolver<
    ResolversTypes['Preference'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationUpdatePreferenceOnOrganizationArgs,
      'preferenceData'
    >
  >;
  updatePreferenceOnUser?: Resolver<
    ResolversTypes['Preference'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationUpdatePreferenceOnUserArgs,
      'preferenceData'
    >
  >;
  updateProfile?: Resolver<
    ResolversTypes['Profile'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationUpdateProfileArgs, 'profileData'>
  >;
  updateProject?: Resolver<
    ResolversTypes['Project'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationUpdateProjectArgs, 'projectData'>
  >;
  updateUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationUpdateUserArgs, 'userData'>
  >;
  updateUserGroup?: Resolver<
    ResolversTypes['UserGroup'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationUpdateUserGroupArgs, 'userGroupData'>
  >;
  updateVisual?: Resolver<
    ResolversTypes['Visual'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationUpdateVisualArgs, 'updateData'>
  >;
  uploadFile?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.MutationUploadFileArgs, 'file'>
  >;
  uploadImageOnVisual?: Resolver<
    ResolversTypes['Visual'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.MutationUploadImageOnVisualArgs,
      'file' | 'uploadData'
    >
  >;
};

export type NvpResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NVP'] = ResolversParentTypes['NVP']
> = {
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface NameIdScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['NameID'], any> {
  name: 'NameID';
}

export type OpportunityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Opportunity'] = ResolversParentTypes['Opportunity']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  collaboration?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Collaboration']>,
    ParentType,
    ContextType
  >;
  community?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Community']>,
    ParentType,
    ContextType
  >;
  context?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Context']>,
    ParentType,
    ContextType
  >;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  lifecycle?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Lifecycle']>,
    ParentType,
    ContextType
  >;
  metrics?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['NVP']>>,
    ParentType,
    ContextType
  >;
  nameID?: Resolver<ResolversTypes['NameID'], ParentType, ContextType>;
  parentNameID?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  projects?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Project']>>,
    ParentType,
    ContextType
  >;
  tagset?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Tagset']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityCreatedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OpportunityCreated'] = ResolversParentTypes['OpportunityCreated']
> = {
  challengeID?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  opportunity?: Resolver<
    ResolversTypes['Opportunity'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OpportunityTemplate'] = ResolversParentTypes['OpportunityTemplate']
> = {
  actorGroups?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relations?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']
> = {
  agent?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Agent']>,
    ParentType,
    ContextType
  >;
  associates?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['User']>>,
    ParentType,
    ContextType
  >;
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  contactEmail?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  domain?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  group?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['UserGroup']>,
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.OrganizationGroupArgs, 'ID'>
  >;
  groups?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['UserGroup']>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  legalEntityName?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  metrics?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['NVP']>>,
    ParentType,
    ContextType
  >;
  nameID?: Resolver<ResolversTypes['NameID'], ParentType, ContextType>;
  preferences?: Resolver<
    Array<ResolversTypes['Preference']>,
    ParentType,
    ContextType
  >;
  profile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  verification?: Resolver<
    ResolversTypes['OrganizationVerification'],
    ParentType,
    ContextType
  >;
  website?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OrganizationTemplate'] = ResolversParentTypes['OrganizationTemplate']
> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tagsets?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['TagsetTemplate']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationVerificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OrganizationVerification'] = ResolversParentTypes['OrganizationVerification']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  lifecycle?: Resolver<ResolversTypes['Lifecycle'], ParentType, ContextType>;
  status?: Resolver<
    ResolversTypes['OrganizationVerificationEnum'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OryConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OryConfig'] = ResolversParentTypes['OryConfig']
> = {
  issuer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kratosPublicBaseURL?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']
> = {
  endCursor?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  startCursor?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedOrganizationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaginatedOrganization'] = ResolversParentTypes['PaginatedOrganization']
> = {
  organization?: Resolver<
    Array<ResolversTypes['Organization']>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedUsersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PaginatedUsers'] = ResolversParentTypes['PaginatedUsers']
> = {
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlatformResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Platform'] = ResolversParentTypes['Platform']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  communication?: Resolver<
    ResolversTypes['Communication'],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  library?: Resolver<ResolversTypes['Library'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlatformLocationsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PlatformLocations'] = ResolversParentTypes['PlatformLocations']
> = {
  about?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  aup?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  community?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  environment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  featureFlags?: Resolver<
    Array<ResolversTypes['FeatureFlag']>,
    ParentType,
    ContextType
  >;
  feedback?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  foundation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  help?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  impact?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  newuser?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  opensource?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  privacy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releases?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  security?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  support?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  terms?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tips?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PreferenceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Preference'] = ResolversParentTypes['Preference']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  definition?: Resolver<
    ResolversTypes['PreferenceDefinition'],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PreferenceDefinitionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PreferenceDefinition'] = ResolversParentTypes['PreferenceDefinition']
> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['PreferenceType'], ParentType, ContextType>;
  valueType?: Resolver<
    ResolversTypes['PreferenceValueType'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Markdown']>,
    ParentType,
    ContextType
  >;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  location?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Location']>,
    ParentType,
    ContextType
  >;
  references?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Reference']>>,
    ParentType,
    ContextType
  >;
  tagline?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tagset?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Tagset']>,
    ParentType,
    ContextType
  >;
  tagsets?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Tagset']>>,
    ParentType,
    ContextType
  >;
  visual?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Visual']>,
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.ProfileVisualArgs, 'type'>
  >;
  visuals?: Resolver<Array<ResolversTypes['Visual']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileCredentialVerifiedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProfileCredentialVerified'] = ResolversParentTypes['ProfileCredentialVerified']
> = {
  userEmail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vc?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  lifecycle?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Lifecycle']>,
    ParentType,
    ContextType
  >;
  nameID?: Resolver<ResolversTypes['NameID'], ParentType, ContextType>;
  tagset?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Tagset']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  activityLogOnCollaboration?: Resolver<
    Array<ResolversTypes['ActivityLogEntry']>,
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.QueryActivityLogOnCollaborationArgs, 'queryData'>
  >;
  adminCommunicationMembership?: Resolver<
    ResolversTypes['CommunicationAdminMembershipResult'],
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.QueryAdminCommunicationMembershipArgs,
      'communicationData'
    >
  >;
  adminCommunicationOrphanedUsage?: Resolver<
    ResolversTypes['CommunicationAdminOrphanedUsageResult'],
    ParentType,
    ContextType
  >;
  authorization?: Resolver<
    ResolversTypes['Authorization'],
    ParentType,
    ContextType
  >;
  collaboration?: Resolver<
    ResolversTypes['Collaboration'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.QueryCollaborationArgs, 'ID'>
  >;
  community?: Resolver<
    ResolversTypes['Community'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.QueryCommunityArgs, 'ID'>
  >;
  configuration?: Resolver<ResolversTypes['Config'], ParentType, ContextType>;
  context?: Resolver<
    ResolversTypes['Context'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.QueryContextArgs, 'ID'>
  >;
  getSupportedVerifiedCredentialMetadata?: Resolver<
    Array<ResolversTypes['CredentialMetadataOutput']>,
    ParentType,
    ContextType
  >;
  hub?: Resolver<
    ResolversTypes['Hub'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.QueryHubArgs, 'ID'>
  >;
  hubs?: Resolver<
    Array<ResolversTypes['Hub']>,
    ParentType,
    ContextType,
    Partial<SchemaTypes.QueryHubsArgs>
  >;
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  meHasProfile?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['Metadata'], ParentType, ContextType>;
  organization?: Resolver<
    ResolversTypes['Organization'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.QueryOrganizationArgs, 'ID'>
  >;
  organizations?: Resolver<
    Array<ResolversTypes['Organization']>,
    ParentType,
    ContextType,
    Partial<SchemaTypes.QueryOrganizationsArgs>
  >;
  organizationsPaginated?: Resolver<
    ResolversTypes['PaginatedOrganization'],
    ParentType,
    ContextType,
    Partial<SchemaTypes.QueryOrganizationsPaginatedArgs>
  >;
  platform?: Resolver<ResolversTypes['Platform'], ParentType, ContextType>;
  rolesOrganization?: Resolver<
    ResolversTypes['ContributorRoles'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.QueryRolesOrganizationArgs, 'rolesData'>
  >;
  rolesUser?: Resolver<
    ResolversTypes['ContributorRoles'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.QueryRolesUserArgs, 'rolesData'>
  >;
  search?: Resolver<
    ResolversTypes['ISearchResults'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.QuerySearchArgs, 'searchData'>
  >;
  user?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.QueryUserArgs, 'ID'>
  >;
  userAuthorizationPrivileges?: Resolver<
    Array<ResolversTypes['AuthorizationPrivilege']>,
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.QueryUserAuthorizationPrivilegesArgs,
      'userAuthorizationPrivilegesData'
    >
  >;
  users?: Resolver<
    Array<ResolversTypes['User']>,
    ParentType,
    ContextType,
    Partial<SchemaTypes.QueryUsersArgs>
  >;
  usersById?: Resolver<
    Array<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.QueryUsersByIdArgs, 'IDs'>
  >;
  usersPaginated?: Resolver<
    ResolversTypes['PaginatedUsers'],
    ParentType,
    ContextType,
    Partial<SchemaTypes.QueryUsersPaginatedArgs>
  >;
  usersWithAuthorizationCredential?: Resolver<
    Array<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.QueryUsersWithAuthorizationCredentialArgs,
      'credentialsCriteriaData'
    >
  >;
};

export type QuestionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']
> = {
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuestionTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['QuestionTemplate'] = ResolversParentTypes['QuestionTemplate']
> = {
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sortOrder?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReferenceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Reference'] = ResolversParentTypes['Reference']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RelationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Relation'] = ResolversParentTypes['Relation']
> = {
  actorName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  actorRole?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  actorType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RelayPaginatedUserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RelayPaginatedUser'] = ResolversParentTypes['RelayPaginatedUser']
> = {
  accountUpn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  agent?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Agent']>,
    ParentType,
    ContextType
  >;
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  communityRooms?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['CommunicationRoom']>>,
    ParentType,
    ContextType
  >;
  directRooms?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['DirectRoom']>>,
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  isContactable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameID?: Resolver<ResolversTypes['NameID'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preferences?: Resolver<
    Array<ResolversTypes['Preference']>,
    ParentType,
    ContextType
  >;
  profile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RelayPaginatedUserEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RelayPaginatedUserEdge'] = ResolversParentTypes['RelayPaginatedUserEdge']
> = {
  node?: Resolver<
    ResolversTypes['RelayPaginatedUser'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RelayPaginatedUserPageInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RelayPaginatedUserPageInfo'] = ResolversParentTypes['RelayPaginatedUserPageInfo']
> = {
  endCursor?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  startCursor?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RolesResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RolesResult'] = ResolversParentTypes['RolesResult']
> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameID?: Resolver<ResolversTypes['NameID'], ParentType, ContextType>;
  roles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RolesResultCommunityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RolesResultCommunity'] = ResolversParentTypes['RolesResultCommunity']
> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameID?: Resolver<ResolversTypes['NameID'], ParentType, ContextType>;
  roles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  userGroups?: Resolver<
    Array<ResolversTypes['RolesResult']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RolesResultHubResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RolesResultHub'] = ResolversParentTypes['RolesResultHub']
> = {
  challenges?: Resolver<
    Array<ResolversTypes['RolesResultCommunity']>,
    ParentType,
    ContextType
  >;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hubID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameID?: Resolver<ResolversTypes['NameID'], ParentType, ContextType>;
  opportunities?: Resolver<
    Array<ResolversTypes['RolesResultCommunity']>,
    ParentType,
    ContextType
  >;
  roles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  userGroups?: Resolver<
    Array<ResolversTypes['RolesResult']>,
    ParentType,
    ContextType
  >;
  visibility?: Resolver<
    ResolversTypes['HubVisibility'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RolesResultOrganizationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RolesResultOrganization'] = ResolversParentTypes['RolesResultOrganization']
> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameID?: Resolver<ResolversTypes['NameID'], ParentType, ContextType>;
  organizationID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  userGroups?: Resolver<
    Array<ResolversTypes['RolesResult']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']
> = {
  __resolveType: TypeResolveFn<
    | 'SearchResultCard'
    | 'SearchResultChallenge'
    | 'SearchResultHub'
    | 'SearchResultOpportunity'
    | 'SearchResultOrganization'
    | 'SearchResultUser'
    | 'SearchResultUserGroup',
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  terms?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SearchResultType'], ParentType, ContextType>;
};

export type SearchResultCardResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchResultCard'] = ResolversParentTypes['SearchResultCard']
> = {
  callout?: Resolver<ResolversTypes['Callout'], ParentType, ContextType>;
  card?: Resolver<ResolversTypes['Aspect'], ParentType, ContextType>;
  challenge?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Challenge']>,
    ParentType,
    ContextType
  >;
  hub?: Resolver<ResolversTypes['Hub'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  opportunity?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Opportunity']>,
    ParentType,
    ContextType
  >;
  score?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  terms?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SearchResultType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultChallengeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchResultChallenge'] = ResolversParentTypes['SearchResultChallenge']
> = {
  challenge?: Resolver<ResolversTypes['Challenge'], ParentType, ContextType>;
  hub?: Resolver<ResolversTypes['Hub'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  terms?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SearchResultType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultHubResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchResultHub'] = ResolversParentTypes['SearchResultHub']
> = {
  hub?: Resolver<ResolversTypes['Hub'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  terms?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SearchResultType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultOpportunityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchResultOpportunity'] = ResolversParentTypes['SearchResultOpportunity']
> = {
  challenge?: Resolver<ResolversTypes['Challenge'], ParentType, ContextType>;
  hub?: Resolver<ResolversTypes['Hub'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  opportunity?: Resolver<
    ResolversTypes['Opportunity'],
    ParentType,
    ContextType
  >;
  score?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  terms?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SearchResultType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultOrganizationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchResultOrganization'] = ResolversParentTypes['SearchResultOrganization']
> = {
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  organization?: Resolver<
    ResolversTypes['Organization'],
    ParentType,
    ContextType
  >;
  score?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  terms?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SearchResultType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultUserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchResultUser'] = ResolversParentTypes['SearchResultUser']
> = {
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  terms?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SearchResultType'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultUserGroupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchResultUserGroup'] = ResolversParentTypes['SearchResultUserGroup']
> = {
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  terms?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SearchResultType'], ParentType, ContextType>;
  userGroup?: Resolver<ResolversTypes['UserGroup'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SentryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Sentry'] = ResolversParentTypes['Sentry']
> = {
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  endpoint?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  submitPII?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceMetadataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ServiceMetadata'] = ResolversParentTypes['ServiceMetadata']
> = {
  name?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  version?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StorageConfigResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StorageConfig'] = ResolversParentTypes['StorageConfig']
> = {
  file?: Resolver<ResolversTypes['FileStorageConfig'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']
> = {
  activityCreated?: SubscriptionResolver<
    ResolversTypes['ActivityCreatedSubscriptionResult'],
    'activityCreated',
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.SubscriptionActivityCreatedArgs,
      'collaborationID'
    >
  >;
  aspectCommentsMessageReceived?: SubscriptionResolver<
    ResolversTypes['AspectCommentsMessageReceived'],
    'aspectCommentsMessageReceived',
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.SubscriptionAspectCommentsMessageReceivedArgs,
      'aspectID'
    >
  >;
  calendarEventCommentsMessageReceived?: SubscriptionResolver<
    ResolversTypes['CalendarEventCommentsMessageReceived'],
    'calendarEventCommentsMessageReceived',
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.SubscriptionCalendarEventCommentsMessageReceivedArgs,
      'calendarEventID'
    >
  >;
  calloutAspectCreated?: SubscriptionResolver<
    ResolversTypes['CalloutAspectCreated'],
    'calloutAspectCreated',
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.SubscriptionCalloutAspectCreatedArgs, 'calloutID'>
  >;
  calloutMessageReceived?: SubscriptionResolver<
    ResolversTypes['CalloutMessageReceived'],
    'calloutMessageReceived',
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.SubscriptionCalloutMessageReceivedArgs,
      'calloutIDs'
    >
  >;
  canvasContentUpdated?: SubscriptionResolver<
    ResolversTypes['CanvasContentUpdated'],
    'canvasContentUpdated',
    ParentType,
    ContextType,
    Partial<SchemaTypes.SubscriptionCanvasContentUpdatedArgs>
  >;
  challengeCreated?: SubscriptionResolver<
    ResolversTypes['ChallengeCreated'],
    'challengeCreated',
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.SubscriptionChallengeCreatedArgs, 'hubID'>
  >;
  communicationDiscussionMessageReceived?: SubscriptionResolver<
    ResolversTypes['CommunicationDiscussionMessageReceived'],
    'communicationDiscussionMessageReceived',
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.SubscriptionCommunicationDiscussionMessageReceivedArgs,
      'discussionID'
    >
  >;
  communicationDiscussionUpdated?: SubscriptionResolver<
    ResolversTypes['Discussion'],
    'communicationDiscussionUpdated',
    ParentType,
    ContextType,
    RequireFields<
      SchemaTypes.SubscriptionCommunicationDiscussionUpdatedArgs,
      'communicationID'
    >
  >;
  communicationUpdateMessageReceived?: SubscriptionResolver<
    ResolversTypes['CommunicationUpdateMessageReceived'],
    'communicationUpdateMessageReceived',
    ParentType,
    ContextType,
    Partial<SchemaTypes.SubscriptionCommunicationUpdateMessageReceivedArgs>
  >;
  opportunityCreated?: SubscriptionResolver<
    ResolversTypes['OpportunityCreated'],
    'opportunityCreated',
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.SubscriptionOpportunityCreatedArgs, 'challengeID'>
  >;
  profileVerifiedCredential?: SubscriptionResolver<
    ResolversTypes['ProfileCredentialVerified'],
    'profileVerifiedCredential',
    ParentType,
    ContextType
  >;
};

export type TagsetResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Tagset'] = ResolversParentTypes['Tagset']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagsetTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TagsetTemplate'] = ResolversParentTypes['TagsetTemplate']
> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  placeholder?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Template'] = ResolversParentTypes['Template']
> = {
  challenges?: Resolver<
    Array<ResolversTypes['ChallengeTemplate']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  opportunities?: Resolver<
    Array<ResolversTypes['OpportunityTemplate']>,
    ParentType,
    ContextType
  >;
  organizations?: Resolver<
    Array<ResolversTypes['OrganizationTemplate']>,
    ParentType,
    ContextType
  >;
  users?: Resolver<
    Array<ResolversTypes['UserTemplate']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplateInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TemplateInfo'] = ResolversParentTypes['TemplateInfo']
> = {
  description?: Resolver<ResolversTypes['Markdown'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  tagset?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Tagset']>,
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  visual?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Visual']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplatesSetResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TemplatesSet'] = ResolversParentTypes['TemplatesSet']
> = {
  aspectTemplate?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['AspectTemplate']>,
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.TemplatesSetAspectTemplateArgs, 'ID'>
  >;
  aspectTemplates?: Resolver<
    Array<ResolversTypes['AspectTemplate']>,
    ParentType,
    ContextType
  >;
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  canvasTemplate?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['CanvasTemplate']>,
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.TemplatesSetCanvasTemplateArgs, 'ID'>
  >;
  canvasTemplates?: Resolver<
    Array<ResolversTypes['CanvasTemplate']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  lifecycleTemplate?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['LifecycleTemplate']>,
    ParentType,
    ContextType,
    RequireFields<SchemaTypes.TemplatesSetLifecycleTemplateArgs, 'ID'>
  >;
  lifecycleTemplates?: Resolver<
    Array<ResolversTypes['LifecycleTemplate']>,
    ParentType,
    ContextType
  >;
  policy?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['TemplatesSetPolicy']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TemplatesSetPolicyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TemplatesSetPolicy'] = ResolversParentTypes['TemplatesSetPolicy']
> = {
  minInnovationFlow?: Resolver<
    ResolversTypes['Float'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimelineResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Timeline'] = ResolversParentTypes['Timeline']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  calendar?: Resolver<ResolversTypes['Calendar'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export interface Uuid_NameidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['UUID_NAMEID'], any> {
  name: 'UUID_NAMEID';
}

export interface Uuid_Nameid_EmailScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['UUID_NAMEID_EMAIL'], any> {
  name: 'UUID_NAMEID_EMAIL';
}

export type UpdatesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Updates'] = ResolversParentTypes['Updates']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  messages?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['Message']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  accountUpn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  agent?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Agent']>,
    ParentType,
    ContextType
  >;
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  communityRooms?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['CommunicationRoom']>>,
    ParentType,
    ContextType
  >;
  directRooms?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['DirectRoom']>>,
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  isContactable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameID?: Resolver<ResolversTypes['NameID'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preferences?: Resolver<
    Array<ResolversTypes['Preference']>,
    ParentType,
    ContextType
  >;
  profile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserGroupResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserGroup'] = ResolversParentTypes['UserGroup']
> = {
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  members?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['User']>>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Groupable']>,
    ParentType,
    ContextType
  >;
  profile?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Profile']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserTemplate'] = ResolversParentTypes['UserTemplate']
> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tagsets?: Resolver<
    SchemaTypes.Maybe<Array<ResolversTypes['TagsetTemplate']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerifiedCredentialResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['VerifiedCredential'] = ResolversParentTypes['VerifiedCredential']
> = {
  claims?: Resolver<
    Array<ResolversTypes['VerifiedCredentialClaim']>,
    ParentType,
    ContextType
  >;
  context?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  expires?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  issued?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  issuer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerifiedCredentialClaimResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['VerifiedCredentialClaim'] = ResolversParentTypes['VerifiedCredentialClaim']
> = {
  name?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VisualResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Visual'] = ResolversParentTypes['Visual']
> = {
  allowedTypes?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  aspectRatio?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  authorization?: Resolver<
    SchemaTypes.Maybe<ResolversTypes['Authorization']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  maxHeight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  maxWidth?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minHeight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minWidth?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  APM?: ApmResolvers<ContextType>;
  ActivityCreatedSubscriptionResult?: ActivityCreatedSubscriptionResultResolvers<ContextType>;
  ActivityLogEntry?: ActivityLogEntryResolvers<ContextType>;
  ActivityLogEntryCalloutCanvasCreated?: ActivityLogEntryCalloutCanvasCreatedResolvers<ContextType>;
  ActivityLogEntryCalloutCardComment?: ActivityLogEntryCalloutCardCommentResolvers<ContextType>;
  ActivityLogEntryCalloutCardCreated?: ActivityLogEntryCalloutCardCreatedResolvers<ContextType>;
  ActivityLogEntryCalloutDiscussionComment?: ActivityLogEntryCalloutDiscussionCommentResolvers<ContextType>;
  ActivityLogEntryCalloutPublished?: ActivityLogEntryCalloutPublishedResolvers<ContextType>;
  ActivityLogEntryChallengeCreated?: ActivityLogEntryChallengeCreatedResolvers<ContextType>;
  ActivityLogEntryMemberJoined?: ActivityLogEntryMemberJoinedResolvers<ContextType>;
  ActivityLogEntryOpportunityCreated?: ActivityLogEntryOpportunityCreatedResolvers<ContextType>;
  ActivityLogEntryUpdateSent?: ActivityLogEntryUpdateSentResolvers<ContextType>;
  Actor?: ActorResolvers<ContextType>;
  ActorGroup?: ActorGroupResolvers<ContextType>;
  Agent?: AgentResolvers<ContextType>;
  AgentBeginVerifiedCredentialOfferOutput?: AgentBeginVerifiedCredentialOfferOutputResolvers<ContextType>;
  AgentBeginVerifiedCredentialRequestOutput?: AgentBeginVerifiedCredentialRequestOutputResolvers<ContextType>;
  Application?: ApplicationResolvers<ContextType>;
  ApplicationForRoleResult?: ApplicationForRoleResultResolvers<ContextType>;
  ApplicationTemplate?: ApplicationTemplateResolvers<ContextType>;
  Aspect?: AspectResolvers<ContextType>;
  AspectCommentsMessageReceived?: AspectCommentsMessageReceivedResolvers<ContextType>;
  AspectTemplate?: AspectTemplateResolvers<ContextType>;
  AuthenticationConfig?: AuthenticationConfigResolvers<ContextType>;
  AuthenticationProviderConfig?: AuthenticationProviderConfigResolvers<ContextType>;
  AuthenticationProviderConfigUnion?: AuthenticationProviderConfigUnionResolvers<ContextType>;
  Authorization?: AuthorizationResolvers<ContextType>;
  AuthorizationPolicyRuleCredential?: AuthorizationPolicyRuleCredentialResolvers<ContextType>;
  AuthorizationPolicyRulePrivilege?: AuthorizationPolicyRulePrivilegeResolvers<ContextType>;
  AuthorizationPolicyRuleVerifiedCredential?: AuthorizationPolicyRuleVerifiedCredentialResolvers<ContextType>;
  CID?: GraphQLScalarType;
  Calendar?: CalendarResolvers<ContextType>;
  CalendarEvent?: CalendarEventResolvers<ContextType>;
  CalendarEventCommentsMessageReceived?: CalendarEventCommentsMessageReceivedResolvers<ContextType>;
  Callout?: CalloutResolvers<ContextType>;
  CalloutAspectCreated?: CalloutAspectCreatedResolvers<ContextType>;
  CalloutMessageReceived?: CalloutMessageReceivedResolvers<ContextType>;
  Canvas?: CanvasResolvers<ContextType>;
  CanvasCheckout?: CanvasCheckoutResolvers<ContextType>;
  CanvasContentUpdated?: CanvasContentUpdatedResolvers<ContextType>;
  CanvasTemplate?: CanvasTemplateResolvers<ContextType>;
  Challenge?: ChallengeResolvers<ContextType>;
  ChallengeCreated?: ChallengeCreatedResolvers<ContextType>;
  ChallengeTemplate?: ChallengeTemplateResolvers<ContextType>;
  Collaboration?: CollaborationResolvers<ContextType>;
  Comments?: CommentsResolvers<ContextType>;
  Communication?: CommunicationResolvers<ContextType>;
  CommunicationAdminMembershipResult?: CommunicationAdminMembershipResultResolvers<ContextType>;
  CommunicationAdminOrphanedUsageResult?: CommunicationAdminOrphanedUsageResultResolvers<ContextType>;
  CommunicationAdminRoomMembershipResult?: CommunicationAdminRoomMembershipResultResolvers<ContextType>;
  CommunicationAdminRoomResult?: CommunicationAdminRoomResultResolvers<ContextType>;
  CommunicationDiscussionMessageReceived?: CommunicationDiscussionMessageReceivedResolvers<ContextType>;
  CommunicationRoom?: CommunicationRoomResolvers<ContextType>;
  CommunicationUpdateMessageReceived?: CommunicationUpdateMessageReceivedResolvers<ContextType>;
  Community?: CommunityResolvers<ContextType>;
  CommunityPolicy?: CommunityPolicyResolvers<ContextType>;
  CommunityRolePolicy?: CommunityRolePolicyResolvers<ContextType>;
  Config?: ConfigResolvers<ContextType>;
  Context?: ContextResolvers<ContextType>;
  ContributorRoles?: ContributorRolesResolvers<ContextType>;
  Credential?: CredentialResolvers<ContextType>;
  CredentialDefinition?: CredentialDefinitionResolvers<ContextType>;
  CredentialMetadataOutput?: CredentialMetadataOutputResolvers<ContextType>;
  DID?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DirectRoom?: DirectRoomResolvers<ContextType>;
  Discussion?: DiscussionResolvers<ContextType>;
  EcosystemModel?: EcosystemModelResolvers<ContextType>;
  FeatureFlag?: FeatureFlagResolvers<ContextType>;
  FeedbackTemplate?: FeedbackTemplateResolvers<ContextType>;
  FileStorageConfig?: FileStorageConfigResolvers<ContextType>;
  Form?: FormResolvers<ContextType>;
  FormQuestion?: FormQuestionResolvers<ContextType>;
  Geo?: GeoResolvers<ContextType>;
  Groupable?: GroupableResolvers<ContextType>;
  Hub?: HubResolvers<ContextType>;
  HubAspectTemplate?: HubAspectTemplateResolvers<ContextType>;
  ISearchResults?: ISearchResultsResolvers<ContextType>;
  InnovatonPack?: InnovatonPackResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Library?: LibraryResolvers<ContextType>;
  Lifecycle?: LifecycleResolvers<ContextType>;
  LifecycleDefinition?: GraphQLScalarType;
  LifecycleTemplate?: LifecycleTemplateResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  Markdown?: GraphQLScalarType;
  Message?: MessageResolvers<ContextType>;
  MessageID?: GraphQLScalarType;
  Metadata?: MetadataResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NVP?: NvpResolvers<ContextType>;
  NameID?: GraphQLScalarType;
  Opportunity?: OpportunityResolvers<ContextType>;
  OpportunityCreated?: OpportunityCreatedResolvers<ContextType>;
  OpportunityTemplate?: OpportunityTemplateResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  OrganizationTemplate?: OrganizationTemplateResolvers<ContextType>;
  OrganizationVerification?: OrganizationVerificationResolvers<ContextType>;
  OryConfig?: OryConfigResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PaginatedOrganization?: PaginatedOrganizationResolvers<ContextType>;
  PaginatedUsers?: PaginatedUsersResolvers<ContextType>;
  Platform?: PlatformResolvers<ContextType>;
  PlatformLocations?: PlatformLocationsResolvers<ContextType>;
  Preference?: PreferenceResolvers<ContextType>;
  PreferenceDefinition?: PreferenceDefinitionResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  ProfileCredentialVerified?: ProfileCredentialVerifiedResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  QuestionTemplate?: QuestionTemplateResolvers<ContextType>;
  Reference?: ReferenceResolvers<ContextType>;
  Relation?: RelationResolvers<ContextType>;
  RelayPaginatedUser?: RelayPaginatedUserResolvers<ContextType>;
  RelayPaginatedUserEdge?: RelayPaginatedUserEdgeResolvers<ContextType>;
  RelayPaginatedUserPageInfo?: RelayPaginatedUserPageInfoResolvers<ContextType>;
  RolesResult?: RolesResultResolvers<ContextType>;
  RolesResultCommunity?: RolesResultCommunityResolvers<ContextType>;
  RolesResultHub?: RolesResultHubResolvers<ContextType>;
  RolesResultOrganization?: RolesResultOrganizationResolvers<ContextType>;
  SearchResult?: SearchResultResolvers<ContextType>;
  SearchResultCard?: SearchResultCardResolvers<ContextType>;
  SearchResultChallenge?: SearchResultChallengeResolvers<ContextType>;
  SearchResultHub?: SearchResultHubResolvers<ContextType>;
  SearchResultOpportunity?: SearchResultOpportunityResolvers<ContextType>;
  SearchResultOrganization?: SearchResultOrganizationResolvers<ContextType>;
  SearchResultUser?: SearchResultUserResolvers<ContextType>;
  SearchResultUserGroup?: SearchResultUserGroupResolvers<ContextType>;
  Sentry?: SentryResolvers<ContextType>;
  ServiceMetadata?: ServiceMetadataResolvers<ContextType>;
  StorageConfig?: StorageConfigResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Tagset?: TagsetResolvers<ContextType>;
  TagsetTemplate?: TagsetTemplateResolvers<ContextType>;
  Template?: TemplateResolvers<ContextType>;
  TemplateInfo?: TemplateInfoResolvers<ContextType>;
  TemplatesSet?: TemplatesSetResolvers<ContextType>;
  TemplatesSetPolicy?: TemplatesSetPolicyResolvers<ContextType>;
  Timeline?: TimelineResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  UUID_NAMEID?: GraphQLScalarType;
  UUID_NAMEID_EMAIL?: GraphQLScalarType;
  Updates?: UpdatesResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserGroup?: UserGroupResolvers<ContextType>;
  UserTemplate?: UserTemplateResolvers<ContextType>;
  VerifiedCredential?: VerifiedCredentialResolvers<ContextType>;
  VerifiedCredentialClaim?: VerifiedCredentialClaimResolvers<ContextType>;
  Visual?: VisualResolvers<ContextType>;
};

export type ChallengeDetailsFragment = {
  id: string;
  nameID: string;
  tagset?: { tags: Array<string>; id: string; name: string } | undefined;
  community?:
    | { id: string; groups?: Array<{ id: string; name: string }> | undefined }
    | undefined;
  context?:
    | {
        id: string;
        visuals?: Array<{ name: string; id: string }> | undefined;
        ecosystemModel?:
          | {
              id: string;
              actorGroups?: Array<{ name: string; id: string }> | undefined;
            }
          | undefined;
      }
    | undefined;
};

export type OpportunityDetailsFragment = {
  id: string;
  nameID: string;
  tagset?: { tags: Array<string>; id: string; name: string } | undefined;
  community?:
    | { id: string; groups?: Array<{ id: string; name: string }> | undefined }
    | undefined;
};

export type UserDetailsFragment = {
  id: string;
  nameID: string;
  firstName: string;
  lastName: string;
  email: string;
  profile: {
    id: string;
    displayName: string;
    description?: any | undefined;
    visual?: { id: string; uri: string } | undefined;
  };
  agent?:
    | {
        id: string;
        credentials?:
          | Array<{
              type: SchemaTypes.AuthorizationCredential;
              resourceID: string;
            }>
          | undefined;
      }
    | undefined;
};

export type AssignOrgAsMemberMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.AssignCommunityMemberOrganizationInput;
}>;

export type AssignOrgAsMemberMutation = {
  assignOrganizationAsCommunityMember: { id: string };
};

export type AssignOrgAsLeadMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.AssignCommunityLeadOrganizationInput;
}>;

export type AssignOrgAsLeadMutation = {
  assignOrganizationAsCommunityLead: { id: string };
};

export type AssignUserAsCommunityLeadMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.AssignCommunityLeadUserInput;
}>;

export type AssignUserAsCommunityLeadMutation = {
  assignUserAsCommunityLead: { id: string };
};

export type AssignUserToCommunityMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.AssignCommunityMemberUserInput;
}>;

export type AssignUserToCommunityMutation = {
  assignUserAsCommunityMember: { displayName: string; id: string };
};

export type AssignUserToGroupMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.AssignUserGroupMemberInput;
}>;

export type AssignUserToGroupMutation = {
  assignUserToGroup: {
    id: string;
    members?:
      | Array<{
          id: string;
          email: string;
          firstName: string;
          lastName: string;
        }>
      | undefined;
  };
};

export type AssignUserToOrganizationMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.AssignOrganizationAssociateInput;
}>;

export type AssignUserToOrganizationMutation = {
  assignUserToOrganization: {
    id: string;
    profile: { id: string; displayName: string };
  };
};

export type AssignUserAsChallengeAdminMutationVariables = SchemaTypes.Exact<{
  membershipData: SchemaTypes.AssignChallengeAdminInput;
}>;

export type AssignUserAsChallengeAdminMutation = {
  assignUserAsChallengeAdmin: { id: string };
};

export type AssignUserAsHubAdminMutationVariables = SchemaTypes.Exact<{
  membershipData: SchemaTypes.AssignHubAdminInput;
}>;

export type AssignUserAsHubAdminMutation = {
  assignUserAsHubAdmin: { id: string };
};

export type AssignUserAsOrganizationAdminMutationVariables = SchemaTypes.Exact<{
  membershipData: SchemaTypes.AssignOrganizationAdminInput;
}>;

export type AssignUserAsOrganizationAdminMutation = {
  assignUserAsOrganizationAdmin: { id: string };
};

export type AgrantCredentialToUserMutationVariables = SchemaTypes.Exact<{
  grantCredentialData: SchemaTypes.GrantAuthorizationCredentialInput;
}>;

export type AgrantCredentialToUserMutation = {
  grantCredentialToUser: {
    id: string;
    profile: { id: string; displayName: string };
    agent?:
      | {
          credentials?:
            | Array<{
                id: string;
                resourceID: string;
                type: SchemaTypes.AuthorizationCredential;
              }>
            | undefined;
        }
      | undefined;
  };
};

export type RevokeCredentialFromUserMutationVariables = SchemaTypes.Exact<{
  revokeCredentialData: SchemaTypes.RevokeAuthorizationCredentialInput;
}>;

export type RevokeCredentialFromUserMutation = {
  revokeCredentialFromUser: {
    id: string;
    profile: { id: string; displayName: string };
    agent?:
      | {
          credentials?:
            | Array<{
                id: string;
                resourceID: string;
                type: SchemaTypes.AuthorizationCredential;
              }>
            | undefined;
        }
      | undefined;
  };
};

export type CreateActorGroupMutationVariables = SchemaTypes.Exact<{
  actorGroupData: SchemaTypes.CreateActorGroupInput;
}>;

export type CreateActorGroupMutation = {
  createActorGroup: { id: string; name: string };
};

export type CreateActorMutationVariables = SchemaTypes.Exact<{
  actorData: SchemaTypes.CreateActorInput;
}>;

export type CreateActorMutation = {
  createActor: {
    id: string;
    name: string;
    description?: string | undefined;
    value?: string | undefined;
    impact?: string | undefined;
  };
};

export type CreateAspectOnCalloutMutationVariables = SchemaTypes.Exact<{
  aspectData: SchemaTypes.CreateAspectOnCalloutInput;
}>;

export type CreateAspectOnCalloutMutation = {
  createAspectOnCallout: {
    id: string;
    nameID: string;
    profile: {
      id: string;
      displayName: string;
      description?: any | undefined;
      tagset?: { tags: Array<string> } | undefined;
    };
    banner?: { id: string } | undefined;
    bannerNarrow?: { id: string } | undefined;
  };
};

export type CreateCalloutOnCollaborationMutationVariables = SchemaTypes.Exact<{
  calloutData: SchemaTypes.CreateCalloutOnCollaborationInput;
}>;

export type CreateCalloutOnCollaborationMutation = {
  createCalloutOnCollaboration: {
    id: string;
    nameID: string;
    type: SchemaTypes.CalloutType;
  };
};

export type CreateChallengeMutationVariables = SchemaTypes.Exact<{
  challengeData: SchemaTypes.CreateChallengeOnHubInput;
}>;

export type CreateChallengeMutation = {
  createChallenge: {
    id: string;
    nameID: string;
    context?:
      | { visuals?: Array<{ name: string; id: string }> | undefined }
      | undefined;
    community?: { id: string } | undefined;
    collaboration?: { id: string } | undefined;
  };
};

export type CreateChildChallengeMutationVariables = SchemaTypes.Exact<{
  childChallengeData: SchemaTypes.CreateChallengeOnChallengeInput;
}>;

export type CreateChildChallengeMutation = {
  createChildChallenge: {
    id: string;
    nameID: string;
    displayName: string;
    context?:
      | { visuals?: Array<{ name: string; id: string }> | undefined }
      | undefined;
  };
};

export type CreateGroupOnCommunityMutationVariables = SchemaTypes.Exact<{
  groupData: SchemaTypes.CreateUserGroupInput;
}>;

export type CreateGroupOnCommunityMutation = {
  createGroupOnCommunity: {
    name: string;
    id: string;
    profile?: { id: string; visual?: { id: string } | undefined } | undefined;
  };
};

export type CreateGroupOnOrganizationMutationVariables = SchemaTypes.Exact<{
  groupData: SchemaTypes.CreateUserGroupInput;
}>;

export type CreateGroupOnOrganizationMutation = {
  createGroupOnOrganization: {
    id: string;
    name: string;
    profile?: { id: string; visual?: { id: string } | undefined } | undefined;
  };
};

export type CreateHubMutationVariables = SchemaTypes.Exact<{
  hubData: SchemaTypes.CreateHubInput;
}>;

export type CreateHubMutation = {
  createHub: {
    id: string;
    nameID: string;
    context?:
      | { visuals?: Array<{ name: string; id: string }> | undefined }
      | undefined;
  };
};

export type CreateOpportunityMutationVariables = SchemaTypes.Exact<{
  opportunityData: SchemaTypes.CreateOpportunityInput;
}>;

export type CreateOpportunityMutation = {
  createOpportunity: {
    id: string;
    displayName: string;
    nameID: string;
    context?:
      | { visuals?: Array<{ name: string; id: string }> | undefined }
      | undefined;
    community?: { id: string } | undefined;
  };
};

export type CreateOrganizationMutationVariables = SchemaTypes.Exact<{
  organizationData: SchemaTypes.CreateOrganizationInput;
}>;

export type CreateOrganizationMutation = {
  createOrganization: {
    nameID: string;
    id: string;
    profile: {
      id: string;
      displayName: string;
      visual?: { id: string } | undefined;
    };
  };
};

export type CreateReferenceOnContextMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.CreateReferenceOnContextInput;
}>;

export type CreateReferenceOnContextMutation = {
  createReferenceOnContext: {
    id: string;
    name: string;
    description?: string | undefined;
    uri: string;
  };
};

export type CreateReferenceOnProfileMutationVariables = SchemaTypes.Exact<{
  referenceInput: SchemaTypes.CreateReferenceOnProfileInput;
}>;

export type CreateReferenceOnProfileMutation = {
  createReferenceOnProfile: {
    name: string;
    uri: string;
    description?: string | undefined;
  };
};

export type CreateRelationOnCollaborationMutationVariables = SchemaTypes.Exact<{
  relationData: SchemaTypes.CreateRelationOnCollaborationInput;
}>;

export type CreateRelationOnCollaborationMutation = {
  createRelationOnCollaboration: { type: string };
};

export type CreateTagsetOnProfileMutationVariables = SchemaTypes.Exact<{
  tagsetData: SchemaTypes.CreateTagsetOnProfileInput;
}>;

export type CreateTagsetOnProfileMutation = {
  createTagsetOnProfile: { id: string; tags: Array<string> };
};

export type CreateUserMutationVariables = SchemaTypes.Exact<{
  userData: SchemaTypes.CreateUserInput;
}>;

export type CreateUserMutation = {
  createUser: {
    nameID: string;
    id: string;
    profile: { id: string; visual?: { id: string } | undefined };
  };
};

export type DeleteChallengeMutationVariables = SchemaTypes.Exact<{
  deleteData: SchemaTypes.DeleteChallengeInput;
}>;

export type DeleteChallengeMutation = { deleteChallenge: { id: string } };

export type DeleteOpportunityMutationVariables = SchemaTypes.Exact<{
  deleteData: SchemaTypes.DeleteOpportunityInput;
}>;

export type DeleteOpportunityMutation = { deleteOpportunity: { id: string } };

export type DeleteOrganizationMutationVariables = SchemaTypes.Exact<{
  deleteData: SchemaTypes.DeleteOrganizationInput;
}>;

export type DeleteOrganizationMutation = { deleteOrganization: { id: string } };

export type DeleteReferenceMutationVariables = SchemaTypes.Exact<{
  input: SchemaTypes.DeleteReferenceInput;
}>;

export type DeleteReferenceMutation = {
  deleteReference: {
    id: string;
    name: string;
    description?: string | undefined;
    uri: string;
  };
};

export type UpdateActorMutationVariables = SchemaTypes.Exact<{
  actorData: SchemaTypes.UpdateActorInput;
}>;

export type UpdateActorMutation = { updateActor: { name: string } };

export type UpdateChallengeMutationVariables = SchemaTypes.Exact<{
  challengeData: SchemaTypes.UpdateChallengeInput;
}>;

export type UpdateChallengeMutation = {
  updateChallenge: {
    id: string;
    nameID: string;
    tagset?: { tags: Array<string>; id: string; name: string } | undefined;
    community?:
      | { id: string; groups?: Array<{ id: string; name: string }> | undefined }
      | undefined;
    context?:
      | {
          id: string;
          visuals?: Array<{ name: string; id: string }> | undefined;
          ecosystemModel?:
            | {
                id: string;
                actorGroups?: Array<{ name: string; id: string }> | undefined;
              }
            | undefined;
        }
      | undefined;
  };
};

export type UpdateHubMutationVariables = SchemaTypes.Exact<{
  hubData: SchemaTypes.UpdateHubInput;
}>;

export type UpdateHubMutation = {
  updateHub: {
    nameID: string;
    host?: { nameID: string } | undefined;
    community?: { id: string } | undefined;
    context?:
      | {
          tagline?: string | undefined;
          visuals?: Array<{ id: string; name: string }> | undefined;
        }
      | undefined;
  };
};

export type UpdateOpportunityMutationVariables = SchemaTypes.Exact<{
  opportunityData: SchemaTypes.UpdateOpportunityInput;
}>;

export type UpdateOpportunityMutation = {
  updateOpportunity: {
    id: string;
    displayName: string;
    nameID: string;
    community?:
      | { id: string; groups?: Array<{ id: string; name: string }> | undefined }
      | undefined;
    context?:
      | { visuals?: Array<{ id: string; name: string }> | undefined }
      | undefined;
  };
};

export type UpdateOrganizationMutationVariables = SchemaTypes.Exact<{
  organizationData: SchemaTypes.UpdateOrganizationInput;
}>;

export type UpdateOrganizationMutation = {
  updateOrganization: {
    id: string;
    nameID: string;
    profile: {
      id: string;
      references?: Array<{ id: string; name: string; uri: string }> | undefined;
    };
  };
};

export type UpdateProfileMutationVariables = SchemaTypes.Exact<{
  profileData: SchemaTypes.UpdateProfileDirectInput;
}>;

export type UpdateProfileMutation = { updateProfile: { id: string } };

export type UpdateVisualMutationVariables = SchemaTypes.Exact<{
  updateData: SchemaTypes.UpdateVisualInput;
}>;

export type UpdateVisualMutation = { updateVisual: { id: string } };

export type ChallengeQueryVariables = SchemaTypes.Exact<{
  hubID: SchemaTypes.Scalars['UUID_NAMEID'];
  challengeID: SchemaTypes.Scalars['UUID_NAMEID'];
}>;

export type ChallengeQuery = {
  hub: {
    challenge: {
      nameID: string;
      id: string;
      displayName: string;
      community?:
        | {
            id: string;
            displayName: string;
            memberUsers?: Array<{ nameID: string }> | undefined;
            memberOrganizations?: Array<{ nameID: string }> | undefined;
            leadUsers?: Array<{ nameID: string }> | undefined;
            leadOrganizations?: Array<{ nameID: string }> | undefined;
          }
        | undefined;
      collaboration?:
        | {
            id: string;
            callouts?:
              | Array<{
                  id: string;
                  nameID: string;
                  type: SchemaTypes.CalloutType;
                }>
              | undefined;
          }
        | undefined;
      context?: { id: string } | undefined;
    };
  };
};

export type ChallengesQueryVariables = SchemaTypes.Exact<{
  hubID: SchemaTypes.Scalars['UUID_NAMEID'];
}>;

export type ChallengesQuery = {
  hub: {
    challenges?:
      | Array<{
          id: string;
          nameID: string;
          displayName: string;
          context?:
            | { visuals?: Array<{ name: string; id: string }> | undefined }
            | undefined;
          community?: { id: string; displayName: string } | undefined;
          collaboration?: { id: string } | undefined;
        }>
      | undefined;
  };
};

export type ConfigurationQueryVariables = SchemaTypes.Exact<{
  [key: string]: never;
}>;

export type ConfigurationQuery = {
  configuration: {
    authentication: {
      providers: Array<{
        name: string;
        label: string;
        icon: string;
        enabled: boolean;
        config: {
          __typename: 'OryConfig';
          issuer: string;
          kratosPublicBaseURL: string;
        };
      }>;
    };
  };
};

export type FeatureFlagsQueryVariables = SchemaTypes.Exact<{
  [key: string]: never;
}>;

export type FeatureFlagsQuery = {
  configuration: {
    platform: { featureFlags: Array<{ name: string; enabled: boolean }> };
  };
};

export type GroupsQueryVariables = SchemaTypes.Exact<{
  hubID: SchemaTypes.Scalars['UUID_NAMEID'];
}>;

export type GroupsQuery = {
  hub: {
    community?:
      | { groups?: Array<{ id: string; name: string }> | undefined }
      | undefined;
  };
};

export type HostInfoQueryVariables = SchemaTypes.Exact<{
  hubID: SchemaTypes.Scalars['UUID_NAMEID'];
}>;

export type HostInfoQuery = {
  hub: {
    host?:
      | {
          id: string;
          nameID: string;
          profile: {
            id: string;
            displayName: string;
            tagsets?:
              | Array<{ id: string; name: string; tags: Array<string> }>
              | undefined;
          };
        }
      | undefined;
  };
};

export type HubQueryVariables = SchemaTypes.Exact<{
  id: SchemaTypes.Scalars['UUID_NAMEID'];
}>;

export type HubQuery = {
  hub: {
    id: string;
    nameID: string;
    displayName: string;
    templates?:
      | {
          id: string;
          lifecycleTemplates: Array<{
            id: string;
            type: SchemaTypes.LifecycleType;
          }>;
        }
      | undefined;
    community?:
      | {
          id: string;
          displayName: string;
          memberUsers?: Array<{ nameID: string }> | undefined;
          memberOrganizations?: Array<{ nameID: string }> | undefined;
          leadUsers?: Array<{ nameID: string }> | undefined;
          leadOrganizations?: Array<{ nameID: string }> | undefined;
        }
      | undefined;
    context?:
      | {
          id: string;
          references?:
            | Array<{
                id: string;
                name: string;
                description?: string | undefined;
                uri: string;
              }>
            | undefined;
          visuals?: Array<{ name: string; uri: string }> | undefined;
        }
      | undefined;
    collaboration?: { id: string } | undefined;
  };
};

export type HubsQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>;

export type HubsQuery = {
  hubs: Array<{
    displayName: string;
    id: string;
    nameID: string;
    context?:
      | { visuals?: Array<{ name: string; id: string }> | undefined }
      | undefined;
  }>;
};

export type MetadataQueryVariables = SchemaTypes.Exact<{
  [key: string]: never;
}>;

export type MetadataQuery = {
  metadata: {
    services: Array<{
      name?: string | undefined;
      version?: string | undefined;
    }>;
  };
};

export type OpportunitiesQueryVariables = SchemaTypes.Exact<{
  hubID: SchemaTypes.Scalars['UUID_NAMEID'];
}>;

export type OpportunitiesQuery = {
  hub: {
    opportunities?:
      | Array<{
          id: string;
          nameID: string;
          displayName: string;
          context?:
            | {
                tagline?: string | undefined;
                background?: any | undefined;
                vision?: any | undefined;
                impact?: any | undefined;
                who?: any | undefined;
                ecosystemModel?:
                  | {
                      actorGroups?:
                        | Array<{ id: string; name: string }>
                        | undefined;
                    }
                  | undefined;
                visuals?: Array<{ name: string; id: string }> | undefined;
                references?:
                  | Array<{
                      name: string;
                      uri: string;
                      description?: string | undefined;
                    }>
                  | undefined;
              }
            | undefined;
          lifecycle?: { state?: string | undefined } | undefined;
        }>
      | undefined;
  };
};

export type OpportunityProfileFragment = {
  nameID: string;
  displayName: string;
  lifecycle?: { state?: string | undefined } | undefined;
  context?:
    | {
        tagline?: string | undefined;
        background?: any | undefined;
        vision?: any | undefined;
        impact?: any | undefined;
        who?: any | undefined;
        visuals?: Array<{ name: string; id: string }> | undefined;
        references?:
          | Array<{
              name: string;
              uri: string;
              description?: string | undefined;
            }>
          | undefined;
      }
    | undefined;
};

export type OpportunityQueryVariables = SchemaTypes.Exact<{
  hubID: SchemaTypes.Scalars['UUID_NAMEID'];
  opportunityID: SchemaTypes.Scalars['UUID_NAMEID'];
}>;

export type OpportunityQuery = {
  hub: {
    opportunity: {
      displayName: string;
      id: string;
      nameID: string;
      community?:
        | {
            id: string;
            displayName: string;
            memberUsers?: Array<{ nameID: string }> | undefined;
            memberOrganizations?: Array<{ nameID: string }> | undefined;
            leadUsers?: Array<{ nameID: string }> | undefined;
            leadOrganizations?: Array<{ nameID: string }> | undefined;
          }
        | undefined;
      context?:
        | {
            id: string;
            visuals?: Array<{ name: string; id: string }> | undefined;
            ecosystemModel?:
              | {
                  id: string;
                  actorGroups?:
                    | Array<{
                        id: string;
                        name: string;
                        actors?: Array<{ name: string }> | undefined;
                      }>
                    | undefined;
                }
              | undefined;
          }
        | undefined;
      collaboration?: { id: string } | undefined;
    };
  };
};

export type OrganizationQueryVariables = SchemaTypes.Exact<{
  id: SchemaTypes.Scalars['UUID_NAMEID'];
}>;

export type OrganizationQuery = {
  organization: {
    id: string;
    nameID: string;
    profile: { id: string; displayName: string };
  };
};

export type OrganizationsQueryVariables = SchemaTypes.Exact<{
  [key: string]: never;
}>;

export type OrganizationsQuery = {
  organizations: Array<{
    id: string;
    nameID: string;
    profile: {
      id: string;
      displayName: string;
      description?: any | undefined;
      visual?: { id: string; uri: string } | undefined;
    };
    agent?:
      | {
          id: string;
          credentials?:
            | Array<{
                type: SchemaTypes.AuthorizationCredential;
                resourceID: string;
              }>
            | undefined;
        }
      | undefined;
  }>;
};

export type UserQueryVariables = SchemaTypes.Exact<{
  userID: SchemaTypes.Scalars['UUID_NAMEID_EMAIL'];
}>;

export type UserQuery = {
  user: {
    id: string;
    nameID: string;
    firstName: string;
    lastName: string;
    email: string;
    profile: {
      id: string;
      displayName: string;
      description?: any | undefined;
      visual?: { id: string; uri: string } | undefined;
    };
    agent?:
      | {
          id: string;
          credentials?:
            | Array<{
                type: SchemaTypes.AuthorizationCredential;
                resourceID: string;
              }>
            | undefined;
        }
      | undefined;
  };
};

export type UsersQueryVariables = SchemaTypes.Exact<{ [key: string]: never }>;

export type UsersQuery = {
  users: Array<{
    id: string;
    nameID: string;
    firstName: string;
    lastName: string;
    email: string;
    profile: {
      id: string;
      displayName: string;
      description?: any | undefined;
      visual?: { id: string; uri: string } | undefined;
    };
    agent?:
      | {
          id: string;
          credentials?:
            | Array<{
                type: SchemaTypes.AuthorizationCredential;
                resourceID: string;
              }>
            | undefined;
        }
      | undefined;
  }>;
};

export type UsersWithAuthorizationCredentialQueryVariables = SchemaTypes.Exact<{
  credentialsCriteriaData: SchemaTypes.UsersWithAuthorizationCredentialInput;
}>;

export type UsersWithAuthorizationCredentialQuery = {
  usersWithAuthorizationCredential: Array<{
    id: string;
    nameID: string;
    firstName: string;
    lastName: string;
    email: string;
    profile: {
      id: string;
      displayName: string;
      description?: any | undefined;
      visual?: { id: string; uri: string } | undefined;
    };
    agent?:
      | {
          id: string;
          credentials?:
            | Array<{
                type: SchemaTypes.AuthorizationCredential;
                resourceID: string;
              }>
            | undefined;
        }
      | undefined;
  }>;
};

export type UsersWithAuthorizationCredentialWithPreferencesQueryVariables =
  SchemaTypes.Exact<{
    credentialsCriteriaData: SchemaTypes.UsersWithAuthorizationCredentialInput;
  }>;

export type UsersWithAuthorizationCredentialWithPreferencesQuery = {
  usersWithAuthorizationCredential: Array<{
    id: string;
    nameID: string;
    firstName: string;
    lastName: string;
    email: string;
    preferences: Array<{
      value: string;
      definition: {
        group: string;
        displayName: string;
        description: string;
        valueType: SchemaTypes.PreferenceValueType;
        type: SchemaTypes.PreferenceType;
      };
    }>;
    profile: {
      id: string;
      displayName: string;
      description?: any | undefined;
      visual?: { id: string; uri: string } | undefined;
    };
    agent?:
      | {
          id: string;
          credentials?:
            | Array<{
                type: SchemaTypes.AuthorizationCredential;
                resourceID: string;
              }>
            | undefined;
        }
      | undefined;
  }>;
};

export const ChallengeDetailsFragmentDoc = gql`
  fragment ChallengeDetails on Challenge {
    id
    nameID
    tagset {
      tags
      id
      name
    }
    community {
      id
      groups {
        id
        name
      }
    }
    context {
      id
      visuals {
        name
        id
      }
      ecosystemModel {
        id
        actorGroups {
          name
          id
        }
      }
    }
  }
`;
export const OpportunityDetailsFragmentDoc = gql`
  fragment OpportunityDetails on Opportunity {
    id
    nameID
    tagset {
      tags
      id
      name
    }
    community {
      id
      groups {
        id
        name
      }
    }
  }
`;
export const UserDetailsFragmentDoc = gql`
  fragment UserDetails on User {
    id
    nameID
    firstName
    lastName
    email
    profile {
      id
      displayName
      visual(type: AVATAR) {
        id
        uri
      }
      description
    }
    agent {
      id
      credentials {
        type
        resourceID
      }
    }
  }
`;
export const OpportunityProfileFragmentDoc = gql`
  fragment OpportunityProfile on Opportunity {
    nameID
    displayName
    lifecycle {
      state
    }
    context {
      tagline
      background
      vision
      impact
      who
      visuals {
        name
        id
      }
      references {
        name
        uri
        description
      }
    }
  }
`;
export const AssignOrgAsMemberDocument = gql`
  mutation assignOrgAsMember($input: AssignCommunityMemberOrganizationInput!) {
    assignOrganizationAsCommunityMember(membershipData: $input) {
      id
    }
  }
`;
export const AssignOrgAsLeadDocument = gql`
  mutation assignOrgAsLead($input: AssignCommunityLeadOrganizationInput!) {
    assignOrganizationAsCommunityLead(leadershipData: $input) {
      id
    }
  }
`;
export const AssignUserAsCommunityLeadDocument = gql`
  mutation assignUserAsCommunityLead($input: AssignCommunityLeadUserInput!) {
    assignUserAsCommunityLead(leadershipData: $input) {
      id
    }
  }
`;
export const AssignUserToCommunityDocument = gql`
  mutation assignUserToCommunity($input: AssignCommunityMemberUserInput!) {
    assignUserAsCommunityMember(membershipData: $input) {
      displayName
      id
    }
  }
`;
export const AssignUserToGroupDocument = gql`
  mutation assignUserToGroup($input: AssignUserGroupMemberInput!) {
    assignUserToGroup(membershipData: $input) {
      id
      members {
        id
        email
        firstName
        lastName
      }
    }
  }
`;
export const AssignUserToOrganizationDocument = gql`
  mutation assignUserToOrganization($input: AssignOrganizationAssociateInput!) {
    assignUserToOrganization(membershipData: $input) {
      id
      profile {
        id
        displayName
      }
    }
  }
`;
export const AssignUserAsChallengeAdminDocument = gql`
  mutation assignUserAsChallengeAdmin(
    $membershipData: AssignChallengeAdminInput!
  ) {
    assignUserAsChallengeAdmin(membershipData: $membershipData) {
      id
    }
  }
`;
export const AssignUserAsHubAdminDocument = gql`
  mutation assignUserAsHubAdmin($membershipData: AssignHubAdminInput!) {
    assignUserAsHubAdmin(membershipData: $membershipData) {
      id
    }
  }
`;
export const AssignUserAsOrganizationAdminDocument = gql`
  mutation assignUserAsOrganizationAdmin(
    $membershipData: AssignOrganizationAdminInput!
  ) {
    assignUserAsOrganizationAdmin(membershipData: $membershipData) {
      id
    }
  }
`;
export const AgrantCredentialToUserDocument = gql`
  mutation agrantCredentialToUser(
    $grantCredentialData: GrantAuthorizationCredentialInput!
  ) {
    grantCredentialToUser(grantCredentialData: $grantCredentialData) {
      id
      profile {
        id
        displayName
      }
      agent {
        credentials {
          id
          resourceID
          type
        }
      }
    }
  }
`;
export const RevokeCredentialFromUserDocument = gql`
  mutation revokeCredentialFromUser(
    $revokeCredentialData: RevokeAuthorizationCredentialInput!
  ) {
    revokeCredentialFromUser(revokeCredentialData: $revokeCredentialData) {
      id
      profile {
        id
        displayName
      }
      agent {
        credentials {
          id
          resourceID
          type
        }
      }
    }
  }
`;
export const CreateActorGroupDocument = gql`
  mutation createActorGroup($actorGroupData: CreateActorGroupInput!) {
    createActorGroup(actorGroupData: $actorGroupData) {
      id
      name
    }
  }
`;
export const CreateActorDocument = gql`
  mutation createActor($actorData: CreateActorInput!) {
    createActor(actorData: $actorData) {
      id
      name
      description
      value
      impact
    }
  }
`;
export const CreateAspectOnCalloutDocument = gql`
  mutation createAspectOnCallout($aspectData: CreateAspectOnCalloutInput!) {
    createAspectOnCallout(aspectData: $aspectData) {
      id
      nameID
      profile {
        id
        displayName
        tagset {
          tags
        }
        description
      }
      banner {
        id
      }
      bannerNarrow {
        id
      }
    }
  }
`;
export const CreateCalloutOnCollaborationDocument = gql`
  mutation createCalloutOnCollaboration(
    $calloutData: CreateCalloutOnCollaborationInput!
  ) {
    createCalloutOnCollaboration(calloutData: $calloutData) {
      id
      nameID
      type
    }
  }
`;
export const CreateChallengeDocument = gql`
  mutation createChallenge($challengeData: CreateChallengeOnHubInput!) {
    createChallenge(challengeData: $challengeData) {
      id
      nameID
      context {
        visuals {
          name
          id
        }
      }
      community {
        id
      }
      collaboration {
        id
      }
    }
  }
`;
export const CreateChildChallengeDocument = gql`
  mutation createChildChallenge(
    $childChallengeData: CreateChallengeOnChallengeInput!
  ) {
    createChildChallenge(challengeData: $childChallengeData) {
      id
      nameID
      displayName
      context {
        visuals {
          name
          id
        }
      }
    }
  }
`;
export const CreateGroupOnCommunityDocument = gql`
  mutation createGroupOnCommunity($groupData: CreateUserGroupInput!) {
    createGroupOnCommunity(groupData: $groupData) {
      name
      id
      profile {
        id
        visual(type: AVATAR) {
          id
        }
      }
    }
  }
`;
export const CreateGroupOnOrganizationDocument = gql`
  mutation createGroupOnOrganization($groupData: CreateUserGroupInput!) {
    createGroupOnOrganization(groupData: $groupData) {
      id
      name
      profile {
        id
        visual(type: AVATAR) {
          id
        }
      }
    }
  }
`;
export const CreateHubDocument = gql`
  mutation createHub($hubData: CreateHubInput!) {
    createHub(hubData: $hubData) {
      id
      nameID
      context {
        visuals {
          name
          id
        }
      }
    }
  }
`;
export const CreateOpportunityDocument = gql`
  mutation createOpportunity($opportunityData: CreateOpportunityInput!) {
    createOpportunity(opportunityData: $opportunityData) {
      id
      displayName
      nameID
      context {
        visuals {
          name
          id
        }
      }
      community {
        id
      }
    }
  }
`;
export const CreateOrganizationDocument = gql`
  mutation createOrganization($organizationData: CreateOrganizationInput!) {
    createOrganization(organizationData: $organizationData) {
      nameID
      id
      profile {
        id
        displayName
        visual(type: AVATAR) {
          id
        }
      }
    }
  }
`;
export const CreateReferenceOnContextDocument = gql`
  mutation createReferenceOnContext($input: CreateReferenceOnContextInput!) {
    createReferenceOnContext(referenceInput: $input) {
      id
      name
      description
      uri
    }
  }
`;
export const CreateReferenceOnProfileDocument = gql`
  mutation createReferenceOnProfile(
    $referenceInput: CreateReferenceOnProfileInput!
  ) {
    createReferenceOnProfile(referenceInput: $referenceInput) {
      name
      uri
      description
    }
  }
`;
export const CreateRelationOnCollaborationDocument = gql`
  mutation createRelationOnCollaboration(
    $relationData: CreateRelationOnCollaborationInput!
  ) {
    createRelationOnCollaboration(relationData: $relationData) {
      type
    }
  }
`;
export const CreateTagsetOnProfileDocument = gql`
  mutation createTagsetOnProfile($tagsetData: CreateTagsetOnProfileInput!) {
    createTagsetOnProfile(tagsetData: $tagsetData) {
      id
      tags
    }
  }
`;
export const CreateUserDocument = gql`
  mutation createUser($userData: CreateUserInput!) {
    createUser(userData: $userData) {
      nameID
      id
      profile {
        id
        visual(type: AVATAR) {
          id
        }
      }
    }
  }
`;
export const DeleteChallengeDocument = gql`
  mutation deleteChallenge($deleteData: DeleteChallengeInput!) {
    deleteChallenge(deleteData: $deleteData) {
      id
    }
  }
`;
export const DeleteOpportunityDocument = gql`
  mutation deleteOpportunity($deleteData: DeleteOpportunityInput!) {
    deleteOpportunity(deleteData: $deleteData) {
      id
    }
  }
`;
export const DeleteOrganizationDocument = gql`
  mutation deleteOrganization($deleteData: DeleteOrganizationInput!) {
    deleteOrganization(deleteData: $deleteData) {
      id
    }
  }
`;
export const DeleteReferenceDocument = gql`
  mutation deleteReference($input: DeleteReferenceInput!) {
    deleteReference(deleteData: $input) {
      id
      name
      description
      uri
    }
  }
`;
export const UpdateActorDocument = gql`
  mutation updateActor($actorData: UpdateActorInput!) {
    updateActor(actorData: $actorData) {
      name
    }
  }
`;
export const UpdateChallengeDocument = gql`
  mutation updateChallenge($challengeData: UpdateChallengeInput!) {
    updateChallenge(challengeData: $challengeData) {
      ...ChallengeDetails
    }
  }
  ${ChallengeDetailsFragmentDoc}
`;
export const UpdateHubDocument = gql`
  mutation updateHub($hubData: UpdateHubInput!) {
    updateHub(hubData: $hubData) {
      nameID
      host {
        nameID
      }
      community {
        id
      }
      context {
        tagline
        visuals {
          id
          name
        }
      }
    }
  }
`;
export const UpdateOpportunityDocument = gql`
  mutation updateOpportunity($opportunityData: UpdateOpportunityInput!) {
    updateOpportunity(opportunityData: $opportunityData) {
      id
      displayName
      nameID
      community {
        id
        groups {
          id
          name
        }
      }
      context {
        visuals {
          id
          name
        }
      }
    }
  }
`;
export const UpdateOrganizationDocument = gql`
  mutation updateOrganization($organizationData: UpdateOrganizationInput!) {
    updateOrganization(organizationData: $organizationData) {
      id
      nameID
      profile {
        id
        references {
          id
          name
          uri
        }
      }
    }
  }
`;
export const UpdateProfileDocument = gql`
  mutation updateProfile($profileData: UpdateProfileDirectInput!) {
    updateProfile(profileData: $profileData) {
      id
    }
  }
`;
export const UpdateVisualDocument = gql`
  mutation updateVisual($updateData: UpdateVisualInput!) {
    updateVisual(updateData: $updateData) {
      id
    }
  }
`;
export const ChallengeDocument = gql`
  query challenge($hubID: UUID_NAMEID!, $challengeID: UUID_NAMEID!) {
    hub(ID: $hubID) {
      challenge(ID: $challengeID) {
        nameID
        id
        displayName
        community {
          id
          displayName
          memberUsers {
            nameID
          }
          memberOrganizations {
            nameID
          }
          leadUsers {
            nameID
          }
          leadOrganizations {
            nameID
          }
        }
        collaboration {
          id
          callouts {
            id
            nameID
            type
          }
        }
        context {
          id
        }
      }
    }
  }
`;
export const ChallengesDocument = gql`
  query challenges($hubID: UUID_NAMEID!) {
    hub(ID: $hubID) {
      challenges {
        id
        nameID
        displayName
        context {
          visuals {
            name
            id
          }
        }
        community {
          id
          displayName
        }
        collaboration {
          id
        }
      }
    }
  }
`;
export const ConfigurationDocument = gql`
  query configuration {
    configuration {
      authentication {
        providers {
          name
          label
          icon
          enabled
          config {
            __typename
            ... on OryConfig {
              issuer
              kratosPublicBaseURL
            }
          }
        }
      }
    }
  }
`;
export const FeatureFlagsDocument = gql`
  query featureFlags {
    configuration {
      platform {
        featureFlags {
          name
          enabled
        }
      }
    }
  }
`;
export const GroupsDocument = gql`
  query groups($hubID: UUID_NAMEID!) {
    hub(ID: $hubID) {
      community {
        groups {
          id
          name
        }
      }
    }
  }
`;
export const HostInfoDocument = gql`
  query hostInfo($hubID: UUID_NAMEID!) {
    hub(ID: $hubID) {
      host {
        id
        nameID
        profile {
          id
          displayName
          tagsets {
            id
            name
            tags
          }
        }
      }
    }
  }
`;
export const HubDocument = gql`
  query hub($id: UUID_NAMEID!) {
    hub(ID: $id) {
      id
      nameID
      displayName
      templates {
        id
        lifecycleTemplates {
          id
          type
        }
      }
      community {
        id
        displayName
        memberUsers {
          nameID
        }
        memberOrganizations {
          nameID
        }
        leadUsers {
          nameID
        }
        leadOrganizations {
          nameID
        }
      }
      context {
        id
        references {
          id
          name
          description
          uri
        }
        visuals {
          name
          uri
        }
      }
      collaboration {
        id
      }
    }
  }
`;
export const HubsDocument = gql`
  query hubs {
    hubs {
      displayName
      id
      nameID
      context {
        visuals {
          name
          id
        }
      }
    }
  }
`;
export const MetadataDocument = gql`
  query metadata {
    metadata {
      services {
        name
        version
      }
    }
  }
`;
export const OpportunitiesDocument = gql`
  query opportunities($hubID: UUID_NAMEID!) {
    hub(ID: $hubID) {
      opportunities {
        id
        ...OpportunityProfile
        context {
          ecosystemModel {
            actorGroups {
              id
              name
            }
          }
        }
      }
    }
  }
  ${OpportunityProfileFragmentDoc}
`;
export const OpportunityDocument = gql`
  query opportunity($hubID: UUID_NAMEID!, $opportunityID: UUID_NAMEID!) {
    hub(ID: $hubID) {
      opportunity(ID: $opportunityID) {
        displayName
        id
        nameID
        community {
          id
          displayName
          memberUsers {
            nameID
          }
          memberOrganizations {
            nameID
          }
          leadUsers {
            nameID
          }
          leadOrganizations {
            nameID
          }
        }
        context {
          id
          visuals {
            name
            id
          }
          ecosystemModel {
            id
            actorGroups {
              id
              name
              actors {
                name
              }
            }
          }
        }
        collaboration {
          id
        }
      }
    }
  }
`;
export const OrganizationDocument = gql`
  query organization($id: UUID_NAMEID!) {
    organization(ID: $id) {
      id
      nameID
      profile {
        id
        displayName
      }
    }
  }
`;
export const OrganizationsDocument = gql`
  query organizations {
    organizations {
      id
      nameID
      profile {
        id
        displayName
        visual(type: AVATAR) {
          id
          uri
        }
        description
      }
      agent {
        id
        credentials {
          type
          resourceID
        }
      }
    }
  }
`;
export const UserDocument = gql`
  query user($userID: UUID_NAMEID_EMAIL!) {
    user(ID: $userID) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`;
export const UsersDocument = gql`
  query users {
    users {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`;
export const UsersWithAuthorizationCredentialDocument = gql`
  query usersWithAuthorizationCredential(
    $credentialsCriteriaData: UsersWithAuthorizationCredentialInput!
  ) {
    usersWithAuthorizationCredential(
      credentialsCriteriaData: $credentialsCriteriaData
    ) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`;
export const UsersWithAuthorizationCredentialWithPreferencesDocument = gql`
  query usersWithAuthorizationCredentialWithPreferences(
    $credentialsCriteriaData: UsersWithAuthorizationCredentialInput!
  ) {
    usersWithAuthorizationCredential(
      credentialsCriteriaData: $credentialsCriteriaData
    ) {
      ...UserDetails
      preferences {
        definition {
          group
          displayName
          description
          valueType
          type
        }
        value
      }
    }
  }
  ${UserDetailsFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();
const AssignOrgAsMemberDocumentString = print(AssignOrgAsMemberDocument);
const AssignOrgAsLeadDocumentString = print(AssignOrgAsLeadDocument);
const AssignUserAsCommunityLeadDocumentString = print(
  AssignUserAsCommunityLeadDocument
);
const AssignUserToCommunityDocumentString = print(
  AssignUserToCommunityDocument
);
const AssignUserToGroupDocumentString = print(AssignUserToGroupDocument);
const AssignUserToOrganizationDocumentString = print(
  AssignUserToOrganizationDocument
);
const AssignUserAsChallengeAdminDocumentString = print(
  AssignUserAsChallengeAdminDocument
);
const AssignUserAsHubAdminDocumentString = print(AssignUserAsHubAdminDocument);
const AssignUserAsOrganizationAdminDocumentString = print(
  AssignUserAsOrganizationAdminDocument
);
const AgrantCredentialToUserDocumentString = print(
  AgrantCredentialToUserDocument
);
const RevokeCredentialFromUserDocumentString = print(
  RevokeCredentialFromUserDocument
);
const CreateActorGroupDocumentString = print(CreateActorGroupDocument);
const CreateActorDocumentString = print(CreateActorDocument);
const CreateAspectOnCalloutDocumentString = print(
  CreateAspectOnCalloutDocument
);
const CreateCalloutOnCollaborationDocumentString = print(
  CreateCalloutOnCollaborationDocument
);
const CreateChallengeDocumentString = print(CreateChallengeDocument);
const CreateChildChallengeDocumentString = print(CreateChildChallengeDocument);
const CreateGroupOnCommunityDocumentString = print(
  CreateGroupOnCommunityDocument
);
const CreateGroupOnOrganizationDocumentString = print(
  CreateGroupOnOrganizationDocument
);
const CreateHubDocumentString = print(CreateHubDocument);
const CreateOpportunityDocumentString = print(CreateOpportunityDocument);
const CreateOrganizationDocumentString = print(CreateOrganizationDocument);
const CreateReferenceOnContextDocumentString = print(
  CreateReferenceOnContextDocument
);
const CreateReferenceOnProfileDocumentString = print(
  CreateReferenceOnProfileDocument
);
const CreateRelationOnCollaborationDocumentString = print(
  CreateRelationOnCollaborationDocument
);
const CreateTagsetOnProfileDocumentString = print(
  CreateTagsetOnProfileDocument
);
const CreateUserDocumentString = print(CreateUserDocument);
const DeleteChallengeDocumentString = print(DeleteChallengeDocument);
const DeleteOpportunityDocumentString = print(DeleteOpportunityDocument);
const DeleteOrganizationDocumentString = print(DeleteOrganizationDocument);
const DeleteReferenceDocumentString = print(DeleteReferenceDocument);
const UpdateActorDocumentString = print(UpdateActorDocument);
const UpdateChallengeDocumentString = print(UpdateChallengeDocument);
const UpdateHubDocumentString = print(UpdateHubDocument);
const UpdateOpportunityDocumentString = print(UpdateOpportunityDocument);
const UpdateOrganizationDocumentString = print(UpdateOrganizationDocument);
const UpdateProfileDocumentString = print(UpdateProfileDocument);
const UpdateVisualDocumentString = print(UpdateVisualDocument);
const ChallengeDocumentString = print(ChallengeDocument);
const ChallengesDocumentString = print(ChallengesDocument);
const ConfigurationDocumentString = print(ConfigurationDocument);
const FeatureFlagsDocumentString = print(FeatureFlagsDocument);
const GroupsDocumentString = print(GroupsDocument);
const HostInfoDocumentString = print(HostInfoDocument);
const HubDocumentString = print(HubDocument);
const HubsDocumentString = print(HubsDocument);
const MetadataDocumentString = print(MetadataDocument);
const OpportunitiesDocumentString = print(OpportunitiesDocument);
const OpportunityDocumentString = print(OpportunityDocument);
const OrganizationDocumentString = print(OrganizationDocument);
const OrganizationsDocumentString = print(OrganizationsDocument);
const UserDocumentString = print(UserDocument);
const UsersDocumentString = print(UsersDocument);
const UsersWithAuthorizationCredentialDocumentString = print(
  UsersWithAuthorizationCredentialDocument
);
const UsersWithAuthorizationCredentialWithPreferencesDocumentString = print(
  UsersWithAuthorizationCredentialWithPreferencesDocument
);
export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    assignOrgAsMember(
      variables: SchemaTypes.AssignOrgAsMemberMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.AssignOrgAsMemberMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.AssignOrgAsMemberMutation>(
            AssignOrgAsMemberDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'assignOrgAsMember',
        'mutation'
      );
    },
    assignOrgAsLead(
      variables: SchemaTypes.AssignOrgAsLeadMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.AssignOrgAsLeadMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.AssignOrgAsLeadMutation>(
            AssignOrgAsLeadDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'assignOrgAsLead',
        'mutation'
      );
    },
    assignUserAsCommunityLead(
      variables: SchemaTypes.AssignUserAsCommunityLeadMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.AssignUserAsCommunityLeadMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.AssignUserAsCommunityLeadMutation>(
            AssignUserAsCommunityLeadDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'assignUserAsCommunityLead',
        'mutation'
      );
    },
    assignUserToCommunity(
      variables: SchemaTypes.AssignUserToCommunityMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.AssignUserToCommunityMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.AssignUserToCommunityMutation>(
            AssignUserToCommunityDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'assignUserToCommunity',
        'mutation'
      );
    },
    assignUserToGroup(
      variables: SchemaTypes.AssignUserToGroupMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.AssignUserToGroupMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.AssignUserToGroupMutation>(
            AssignUserToGroupDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'assignUserToGroup',
        'mutation'
      );
    },
    assignUserToOrganization(
      variables: SchemaTypes.AssignUserToOrganizationMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.AssignUserToOrganizationMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.AssignUserToOrganizationMutation>(
            AssignUserToOrganizationDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'assignUserToOrganization',
        'mutation'
      );
    },
    assignUserAsChallengeAdmin(
      variables: SchemaTypes.AssignUserAsChallengeAdminMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.AssignUserAsChallengeAdminMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.AssignUserAsChallengeAdminMutation>(
            AssignUserAsChallengeAdminDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'assignUserAsChallengeAdmin',
        'mutation'
      );
    },
    assignUserAsHubAdmin(
      variables: SchemaTypes.AssignUserAsHubAdminMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.AssignUserAsHubAdminMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.AssignUserAsHubAdminMutation>(
            AssignUserAsHubAdminDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'assignUserAsHubAdmin',
        'mutation'
      );
    },
    assignUserAsOrganizationAdmin(
      variables: SchemaTypes.AssignUserAsOrganizationAdminMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.AssignUserAsOrganizationAdminMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.AssignUserAsOrganizationAdminMutation>(
            AssignUserAsOrganizationAdminDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'assignUserAsOrganizationAdmin',
        'mutation'
      );
    },
    agrantCredentialToUser(
      variables: SchemaTypes.AgrantCredentialToUserMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.AgrantCredentialToUserMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.AgrantCredentialToUserMutation>(
            AgrantCredentialToUserDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'agrantCredentialToUser',
        'mutation'
      );
    },
    revokeCredentialFromUser(
      variables: SchemaTypes.RevokeCredentialFromUserMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.RevokeCredentialFromUserMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.RevokeCredentialFromUserMutation>(
            RevokeCredentialFromUserDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'revokeCredentialFromUser',
        'mutation'
      );
    },
    createActorGroup(
      variables: SchemaTypes.CreateActorGroupMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.CreateActorGroupMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.CreateActorGroupMutation>(
            CreateActorGroupDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createActorGroup',
        'mutation'
      );
    },
    createActor(
      variables: SchemaTypes.CreateActorMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.CreateActorMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.CreateActorMutation>(
            CreateActorDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createActor',
        'mutation'
      );
    },
    createAspectOnCallout(
      variables: SchemaTypes.CreateAspectOnCalloutMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.CreateAspectOnCalloutMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.CreateAspectOnCalloutMutation>(
            CreateAspectOnCalloutDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createAspectOnCallout',
        'mutation'
      );
    },
    createCalloutOnCollaboration(
      variables: SchemaTypes.CreateCalloutOnCollaborationMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.CreateCalloutOnCollaborationMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.CreateCalloutOnCollaborationMutation>(
            CreateCalloutOnCollaborationDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createCalloutOnCollaboration',
        'mutation'
      );
    },
    createChallenge(
      variables: SchemaTypes.CreateChallengeMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.CreateChallengeMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.CreateChallengeMutation>(
            CreateChallengeDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createChallenge',
        'mutation'
      );
    },
    createChildChallenge(
      variables: SchemaTypes.CreateChildChallengeMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.CreateChildChallengeMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.CreateChildChallengeMutation>(
            CreateChildChallengeDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createChildChallenge',
        'mutation'
      );
    },
    createGroupOnCommunity(
      variables: SchemaTypes.CreateGroupOnCommunityMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.CreateGroupOnCommunityMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.CreateGroupOnCommunityMutation>(
            CreateGroupOnCommunityDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createGroupOnCommunity',
        'mutation'
      );
    },
    createGroupOnOrganization(
      variables: SchemaTypes.CreateGroupOnOrganizationMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.CreateGroupOnOrganizationMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.CreateGroupOnOrganizationMutation>(
            CreateGroupOnOrganizationDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createGroupOnOrganization',
        'mutation'
      );
    },
    createHub(
      variables: SchemaTypes.CreateHubMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.CreateHubMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.CreateHubMutation>(
            CreateHubDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createHub',
        'mutation'
      );
    },
    createOpportunity(
      variables: SchemaTypes.CreateOpportunityMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.CreateOpportunityMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.CreateOpportunityMutation>(
            CreateOpportunityDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createOpportunity',
        'mutation'
      );
    },
    createOrganization(
      variables: SchemaTypes.CreateOrganizationMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.CreateOrganizationMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.CreateOrganizationMutation>(
            CreateOrganizationDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createOrganization',
        'mutation'
      );
    },
    createReferenceOnContext(
      variables: SchemaTypes.CreateReferenceOnContextMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.CreateReferenceOnContextMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.CreateReferenceOnContextMutation>(
            CreateReferenceOnContextDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createReferenceOnContext',
        'mutation'
      );
    },
    createReferenceOnProfile(
      variables: SchemaTypes.CreateReferenceOnProfileMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.CreateReferenceOnProfileMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.CreateReferenceOnProfileMutation>(
            CreateReferenceOnProfileDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createReferenceOnProfile',
        'mutation'
      );
    },
    createRelationOnCollaboration(
      variables: SchemaTypes.CreateRelationOnCollaborationMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.CreateRelationOnCollaborationMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.CreateRelationOnCollaborationMutation>(
            CreateRelationOnCollaborationDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createRelationOnCollaboration',
        'mutation'
      );
    },
    createTagsetOnProfile(
      variables: SchemaTypes.CreateTagsetOnProfileMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.CreateTagsetOnProfileMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.CreateTagsetOnProfileMutation>(
            CreateTagsetOnProfileDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createTagsetOnProfile',
        'mutation'
      );
    },
    createUser(
      variables: SchemaTypes.CreateUserMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.CreateUserMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.CreateUserMutation>(
            CreateUserDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createUser',
        'mutation'
      );
    },
    deleteChallenge(
      variables: SchemaTypes.DeleteChallengeMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.DeleteChallengeMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.DeleteChallengeMutation>(
            DeleteChallengeDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'deleteChallenge',
        'mutation'
      );
    },
    deleteOpportunity(
      variables: SchemaTypes.DeleteOpportunityMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.DeleteOpportunityMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.DeleteOpportunityMutation>(
            DeleteOpportunityDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'deleteOpportunity',
        'mutation'
      );
    },
    deleteOrganization(
      variables: SchemaTypes.DeleteOrganizationMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.DeleteOrganizationMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.DeleteOrganizationMutation>(
            DeleteOrganizationDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'deleteOrganization',
        'mutation'
      );
    },
    deleteReference(
      variables: SchemaTypes.DeleteReferenceMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.DeleteReferenceMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.DeleteReferenceMutation>(
            DeleteReferenceDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'deleteReference',
        'mutation'
      );
    },
    updateActor(
      variables: SchemaTypes.UpdateActorMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.UpdateActorMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.UpdateActorMutation>(
            UpdateActorDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'updateActor',
        'mutation'
      );
    },
    updateChallenge(
      variables: SchemaTypes.UpdateChallengeMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.UpdateChallengeMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.UpdateChallengeMutation>(
            UpdateChallengeDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'updateChallenge',
        'mutation'
      );
    },
    updateHub(
      variables: SchemaTypes.UpdateHubMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.UpdateHubMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.UpdateHubMutation>(
            UpdateHubDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'updateHub',
        'mutation'
      );
    },
    updateOpportunity(
      variables: SchemaTypes.UpdateOpportunityMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.UpdateOpportunityMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.UpdateOpportunityMutation>(
            UpdateOpportunityDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'updateOpportunity',
        'mutation'
      );
    },
    updateOrganization(
      variables: SchemaTypes.UpdateOrganizationMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.UpdateOrganizationMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.UpdateOrganizationMutation>(
            UpdateOrganizationDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'updateOrganization',
        'mutation'
      );
    },
    updateProfile(
      variables: SchemaTypes.UpdateProfileMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.UpdateProfileMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.UpdateProfileMutation>(
            UpdateProfileDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'updateProfile',
        'mutation'
      );
    },
    updateVisual(
      variables: SchemaTypes.UpdateVisualMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.UpdateVisualMutation;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.UpdateVisualMutation>(
            UpdateVisualDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'updateVisual',
        'mutation'
      );
    },
    challenge(
      variables: SchemaTypes.ChallengeQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.ChallengeQuery;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.ChallengeQuery>(
            ChallengeDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'challenge',
        'query'
      );
    },
    challenges(
      variables: SchemaTypes.ChallengesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.ChallengesQuery;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.ChallengesQuery>(
            ChallengesDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'challenges',
        'query'
      );
    },
    configuration(
      variables?: SchemaTypes.ConfigurationQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.ConfigurationQuery;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.ConfigurationQuery>(
            ConfigurationDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'configuration',
        'query'
      );
    },
    featureFlags(
      variables?: SchemaTypes.FeatureFlagsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.FeatureFlagsQuery;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.FeatureFlagsQuery>(
            FeatureFlagsDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'featureFlags',
        'query'
      );
    },
    groups(
      variables: SchemaTypes.GroupsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.GroupsQuery;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.GroupsQuery>(
            GroupsDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'groups',
        'query'
      );
    },
    hostInfo(
      variables: SchemaTypes.HostInfoQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.HostInfoQuery;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.HostInfoQuery>(
            HostInfoDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'hostInfo',
        'query'
      );
    },
    hub(
      variables: SchemaTypes.HubQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.HubQuery;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.HubQuery>(
            HubDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'hub',
        'query'
      );
    },
    hubs(
      variables?: SchemaTypes.HubsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.HubsQuery;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.HubsQuery>(
            HubsDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'hubs',
        'query'
      );
    },
    metadata(
      variables?: SchemaTypes.MetadataQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.MetadataQuery;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.MetadataQuery>(
            MetadataDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'metadata',
        'query'
      );
    },
    opportunities(
      variables: SchemaTypes.OpportunitiesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.OpportunitiesQuery;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.OpportunitiesQuery>(
            OpportunitiesDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'opportunities',
        'query'
      );
    },
    opportunity(
      variables: SchemaTypes.OpportunityQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.OpportunityQuery;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.OpportunityQuery>(
            OpportunityDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'opportunity',
        'query'
      );
    },
    organization(
      variables: SchemaTypes.OrganizationQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.OrganizationQuery;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.OrganizationQuery>(
            OrganizationDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'organization',
        'query'
      );
    },
    organizations(
      variables?: SchemaTypes.OrganizationsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.OrganizationsQuery;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.OrganizationsQuery>(
            OrganizationsDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'organizations',
        'query'
      );
    },
    user(
      variables: SchemaTypes.UserQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.UserQuery;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.UserQuery>(
            UserDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'user',
        'query'
      );
    },
    users(
      variables?: SchemaTypes.UsersQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.UsersQuery;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.UsersQuery>(
            UsersDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'users',
        'query'
      );
    },
    usersWithAuthorizationCredential(
      variables: SchemaTypes.UsersWithAuthorizationCredentialQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.UsersWithAuthorizationCredentialQuery;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.UsersWithAuthorizationCredentialQuery>(
            UsersWithAuthorizationCredentialDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'usersWithAuthorizationCredential',
        'query'
      );
    },
    usersWithAuthorizationCredentialWithPreferences(
      variables: SchemaTypes.UsersWithAuthorizationCredentialWithPreferencesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<{
      data: SchemaTypes.UsersWithAuthorizationCredentialWithPreferencesQuery;
      extensions?: any;
      headers: Dom.Headers;
      status: number;
    }> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.rawRequest<SchemaTypes.UsersWithAuthorizationCredentialWithPreferencesQuery>(
            UsersWithAuthorizationCredentialWithPreferencesDocumentString,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'usersWithAuthorizationCredentialWithPreferences',
        'query'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
