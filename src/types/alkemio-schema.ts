export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A decentralized identifier (DID) as per the W3C standard. */
  DID: string;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: Date;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: string;
  /** A decentralized identifier (DID) as per the W3C standard. */
  Markdown: any;
  /** An identifier that originates from the underlying messaging platform. */
  MessageID: any;
  /** A human readable identifier, 3 <= length <= 25. Used for URL paths in clients. Characters allowed: a-z,A-Z,0-9. */
  NameID: string;
  /** A uuid identifier. Length 36 charachters. */
  UUID: string;
  /** A UUID or NameID identifier. */
  UUID_NAMEID: string;
  /** A UUID or Email identifier. */
  UUID_NAMEID_EMAIL: string;
  /** The `Upload` scalar type represents a file upload. */
  Upload: File;
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

export type ApplicationResultEntry = {
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
  /** The comments for this Aspect. */
  comments?: Maybe<Comments>;
  /** The id of the user that created this Aspect */
  createdBy: Scalars['UUID'];
  createdDate: Scalars['DateTime'];
  description: Scalars['String'];
  /** The display name. */
  displayName: Scalars['String'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** A name identifier of the entity, unique within a given scope. */
  nameID: Scalars['NameID'];
  /** The References for this Aspect. */
  references?: Maybe<Array<Reference>>;
  /** The set of tags for the Aspect */
  tagset?: Maybe<Tagset>;
  type: Scalars['String'];
};

export type AspectTemplate = {
  description: Scalars['String'];
  type: Scalars['String'];
};

export type AssignChallengeAdminInput = {
  challengeID: Scalars['UUID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type AssignCommunityMemberInput = {
  communityID: Scalars['UUID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type AssignGlobalAdminInput = {
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type AssignGlobalCommunityAdminInput = {
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

export type AssignOrganizationMemberInput = {
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
  /** The set of verified credential rules that are contained by this Authorization Policy. */
  verifiedCredentialRules?: Maybe<Array<AuthorizationPolicyRuleCredential>>;
};

export enum AuthorizationCredential {
  ChallengeAdmin = 'CHALLENGE_ADMIN',
  ChallengeLead = 'CHALLENGE_LEAD',
  ChallengeMember = 'CHALLENGE_MEMBER',
  GlobalAdmin = 'GLOBAL_ADMIN',
  GlobalAdminCommunity = 'GLOBAL_ADMIN_COMMUNITY',
  GlobalRegistered = 'GLOBAL_REGISTERED',
  HubAdmin = 'HUB_ADMIN',
  HubHost = 'HUB_HOST',
  HubMember = 'HUB_MEMBER',
  OpportunityAdmin = 'OPPORTUNITY_ADMIN',
  OpportunityMember = 'OPPORTUNITY_MEMBER',
  OrganizationAdmin = 'ORGANIZATION_ADMIN',
  OrganizationMember = 'ORGANIZATION_MEMBER',
  OrganizationOwner = 'ORGANIZATION_OWNER',
  UserGroupMember = 'USER_GROUP_MEMBER',
  UserSelfManagement = 'USER_SELF_MANAGEMENT',
}

export type AuthorizationPolicyRuleCredential = {
  grantedPrivileges: Array<Scalars['String']>;
  resourceID: Scalars['String'];
  type: Scalars['String'];
};

export enum AuthorizationPrivilege {
  Create = 'CREATE',
  CreateAspect = 'CREATE_ASPECT',
  CreateCanvas = 'CREATE_CANVAS',
  CreateComment = 'CREATE_COMMENT',
  CreateHub = 'CREATE_HUB',
  CreateOrganization = 'CREATE_ORGANIZATION',
  Delete = 'DELETE',
  Grant = 'GRANT',
  Read = 'READ',
  ReadUsers = 'READ_USERS',
  Update = 'UPDATE',
  UpdateCanvas = 'UPDATE_CANVAS',
}

export type Canvas = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The checkout out state of this Canvas. */
  checkout?: Maybe<CanvasCheckout>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** Is the Canvas a template? */
  isTemplate: Scalars['Boolean'];
  /** The name of the Canvas. */
  name: Scalars['String'];
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
  /** Checked out status of the Canvas */
  status: CanvasCheckoutStateEnum;
};

export type CanvasCheckoutEventInput = {
  canvasCheckoutID: Scalars['UUID'];
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

export type Challenge = Searchable & {
  /** The activity within this Challenge. */
  activity?: Maybe<Array<Nvp>>;
  /** The Agent representing this Challenge. */
  agent?: Maybe<Agent>;
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The set of child Challenges within this challenge. */
  challenges?: Maybe<Array<Challenge>>;
  /** The community for the challenge. */
  community?: Maybe<Community>;
  /** The context for the challenge. */
  context?: Maybe<Context>;
  /** The display name. */
  displayName: Scalars['String'];
  hubID: Scalars['String'];
  id: Scalars['UUID'];
  /** The Organizations that are leading this Challenge. */
  leadOrganizations: Array<Organization>;
  /** The lifeycle for the Challenge. */
  lifecycle?: Maybe<Lifecycle>;
  /** A name identifier of the entity, unique within a given scope. */
  nameID: Scalars['NameID'];
  /** The Opportunities for the challenge. */
  opportunities?: Maybe<Array<Opportunity>>;
  /** The set of tags for the challenge */
  tagset?: Maybe<Tagset>;
};

export type ChallengeAuthorizeStateModificationInput = {
  /** The challenge whose state can be udpated. */
  challengeID: Scalars['UUID'];
  /** The user who is being authorized to update the Challenge state. */
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type ChallengeEventInput = {
  ID: Scalars['UUID'];
  eventName: Scalars['String'];
};

export type ChallengeTemplate = {
  /** Application templates. */
  applications?: Maybe<Array<ApplicationTemplate>>;
  /** Challenge template name. */
  name: Scalars['String'];
};

export type Comments = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** Messages in this Comments. */
  messages?: Maybe<Array<Message>>;
};

export type CommentsMessageReceived = {
  /** The identifier for the Comments on which the message was sent. */
  commentsID: Scalars['String'];
  /** The message that has been sent. */
  message: Message;
};

export type CommentsRemoveMessageInput = {
  /** The Comments the message is being removed from. */
  commentsID: Scalars['UUID'];
  /** The message id that should be removed */
  messageID: Scalars['String'];
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
  description?: Maybe<Scalars['String']>;
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

export type CommunicationUpdateMessageReceived = {
  /** The message that has been sent. */
  message: Message;
  /** The identifier for the Updates on which the message was sent. */
  updatesID: Scalars['String'];
};

export type Community = Groupable & {
  /** Application available for this community. */
  applications?: Maybe<Array<Application>>;
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The Communications for this Community. */
  communication?: Maybe<Communication>;
  /** The name of the Community */
  displayName: Scalars['String'];
  /** Groups of users related to a Community. */
  groups?: Maybe<Array<UserGroup>>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** All users that are contributing to this Community. */
  members?: Maybe<Array<User>>;
};

export type Config = {
  /** Authentication configuration. */
  authentication: AuthenticationConfig;
  /** Platform related resources. */
  platform: Platform;
  /** Sentry (client monitoring) related configuration. */
  sentry: Sentry;
  /** Alkemio template configuration. */
  template: Template;
};

export type Context = {
  /** The Aspects for this Context. */
  aspects?: Maybe<Array<Aspect>>;
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** A detailed description of the current situation */
  background?: Maybe<Scalars['String']>;
  /** The Canvas entities for this Context. */
  canvases?: Maybe<Array<Canvas>>;
  /** The EcosystemModel for this Context. */
  ecosystemModel?: Maybe<EcosystemModel>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** What is the potential impact? */
  impact?: Maybe<Scalars['Markdown']>;
  /** The References for this Context. */
  references?: Maybe<Array<Reference>>;
  /** A one line description */
  tagline?: Maybe<Scalars['String']>;
  /** The goal that is being pursued */
  vision?: Maybe<Scalars['Markdown']>;
  /** The Visual assets for this Context. */
  visuals?: Maybe<Array<Visual>>;
  /** Who should get involved in this challenge */
  who?: Maybe<Scalars['String']>;
};

export type ContextAspectsArgs = {
  IDs?: Maybe<Array<Scalars['UUID_NAMEID']>>;
};

export type ContextCanvasesArgs = {
  IDs?: Maybe<Array<Scalars['UUID']>>;
};

export type CreateActorGroupInput = {
  description?: Maybe<Scalars['String']>;
  ecosystemModelID: Scalars['UUID'];
  name: Scalars['String'];
};

export type CreateActorInput = {
  actorGroupID: Scalars['UUID'];
  description?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type CreateApplicationInput = {
  parentID: Scalars['UUID'];
  questions: Array<CreateNvpInput>;
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type CreateAspectOnContextInput = {
  contextID: Scalars['UUID'];
  description: Scalars['String'];
  /** The display name for the entity. */
  displayName: Scalars['String'];
  /** A readable identifier, unique within the containing scope. If not provided generate based on the displayName */
  nameID?: Maybe<Scalars['NameID']>;
  tags?: Maybe<Array<Scalars['String']>>;
  type: Scalars['String'];
};

export type CreateCanvasOnContextInput = {
  contextID: Scalars['UUID'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type CreateChallengeOnChallengeInput = {
  challengeID: Scalars['UUID'];
  context?: Maybe<CreateContextInput>;
  /** The display name for the entity. */
  displayName?: Maybe<Scalars['String']>;
  /** Set lead Organizations for the Challenge. */
  leadOrganizations?: Maybe<Array<Scalars['UUID_NAMEID']>>;
  lifecycleTemplate?: Maybe<Scalars['String']>;
  /** A readable identifier, unique within the containing scope. */
  nameID: Scalars['NameID'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type CreateChallengeOnHubInput = {
  context?: Maybe<CreateContextInput>;
  /** The display name for the entity. */
  displayName?: Maybe<Scalars['String']>;
  hubID: Scalars['UUID_NAMEID'];
  /** Set lead Organizations for the Challenge. */
  leadOrganizations?: Maybe<Array<Scalars['UUID_NAMEID']>>;
  lifecycleTemplate?: Maybe<Scalars['String']>;
  /** A readable identifier, unique within the containing scope. */
  nameID: Scalars['NameID'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type CreateContextInput = {
  background?: Maybe<Scalars['Markdown']>;
  impact?: Maybe<Scalars['Markdown']>;
  /** Set of References for the new Context. */
  references?: Maybe<Array<CreateReferenceInput>>;
  tagline?: Maybe<Scalars['String']>;
  vision?: Maybe<Scalars['Markdown']>;
  who?: Maybe<Scalars['Markdown']>;
};

export type CreateHubInput = {
  context?: Maybe<CreateContextInput>;
  /** The display name for the entity. */
  displayName?: Maybe<Scalars['String']>;
  /** The host Organization for the hub */
  hostID: Scalars['UUID_NAMEID'];
  lifecycleTemplate?: Maybe<Scalars['String']>;
  /** A readable identifier, unique within the containing scope. */
  nameID: Scalars['NameID'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type CreateNvpInput = {
  name: Scalars['String'];
  sortOrder: Scalars['Float'];
  value: Scalars['String'];
};

export type CreateOpportunityInput = {
  challengeID: Scalars['UUID'];
  context?: Maybe<CreateContextInput>;
  /** The display name for the entity. */
  displayName?: Maybe<Scalars['String']>;
  lifecycleTemplate?: Maybe<Scalars['String']>;
  /** A readable identifier, unique within the containing scope. */
  nameID: Scalars['NameID'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type CreateOrganizationInput = {
  contactEmail?: Maybe<Scalars['String']>;
  /** The display name for the entity. */
  displayName?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  legalEntityName?: Maybe<Scalars['String']>;
  /** A readable identifier, unique within the containing scope. */
  nameID: Scalars['NameID'];
  profileData?: Maybe<CreateProfileInput>;
  website?: Maybe<Scalars['String']>;
};

export type CreateProfileInput = {
  description?: Maybe<Scalars['String']>;
  referencesData?: Maybe<Array<CreateReferenceInput>>;
  tagsetsData?: Maybe<Array<CreateTagsetInput>>;
};

export type CreateProjectInput = {
  description?: Maybe<Scalars['String']>;
  /** The display name for the entity. */
  displayName?: Maybe<Scalars['String']>;
  /** A readable identifier, unique within the containing scope. */
  nameID: Scalars['NameID'];
  opportunityID: Scalars['UUID_NAMEID'];
};

export type CreateReferenceInput = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  uri?: Maybe<Scalars['String']>;
};

export type CreateReferenceOnAspectInput = {
  aspectID: Scalars['UUID'];
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  uri?: Maybe<Scalars['String']>;
};

export type CreateReferenceOnContextInput = {
  contextID: Scalars['UUID'];
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  uri?: Maybe<Scalars['String']>;
};

export type CreateReferenceOnProfileInput = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  profileID: Scalars['UUID'];
  uri?: Maybe<Scalars['String']>;
};

export type CreateRelationInput = {
  actorName: Scalars['String'];
  actorRole?: Maybe<Scalars['String']>;
  actorType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  parentID: Scalars['String'];
  type: Scalars['String'];
};

export type CreateTagsetInput = {
  name: Scalars['String'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type CreateTagsetOnProfileInput = {
  name: Scalars['String'];
  profileID?: Maybe<Scalars['UUID']>;
  tags?: Maybe<Array<Scalars['String']>>;
};

export type CreateUserGroupInput = {
  /** The name of the UserGroup. Minimum length 2. */
  name: Scalars['String'];
  parentID: Scalars['UUID'];
  profileData?: Maybe<CreateProfileInput>;
};

export type CreateUserInput = {
  accountUpn?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** The display name for the entity. */
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** A readable identifier, unique within the containing scope. */
  nameID: Scalars['NameID'];
  phone?: Maybe<Scalars['String']>;
  profileData?: Maybe<CreateProfileInput>;
};

export type Credential = {
  /** The ID of the entity */
  id: Scalars['UUID'];
  resourceID: Scalars['String'];
  type: AuthorizationCredential;
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

export type DeleteCanvasOnContextInput = {
  canvasID: Scalars['UUID'];
  contextID: Scalars['UUID'];
};

export type DeleteChallengeInput = {
  ID: Scalars['UUID'];
};

export type DeleteDiscussionInput = {
  ID: Scalars['UUID'];
};

export type DeleteHubInput = {
  ID: Scalars['UUID_NAMEID'];
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
  createdBy: Scalars['UUID'];
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
  General = 'GENERAL',
  Ideas = 'IDEAS',
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
  /** The Canvas for visualizing this Ecosystem Model. */
  canvas?: Maybe<Canvas>;
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

export type GrantAuthorizationCredentialInput = {
  /** The resource to which this credential is tied. */
  resourceID?: Maybe<Scalars['UUID']>;
  type: AuthorizationCredential;
  /** The user to whom the credential is being granted. */
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type Groupable = {
  /** The groups contained by this entity. */
  groups?: Maybe<Array<UserGroup>>;
};

export type Hub = {
  /** The activity within this Hub. */
  activity?: Maybe<Array<Nvp>>;
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
  /** A name identifier of the entity, unique within a given scope. */
  nameID: Scalars['NameID'];
  /** All opportunities within the hub */
  opportunities: Array<Opportunity>;
  /** A particular Opportunity, either by its ID or nameID */
  opportunity: Opportunity;
  /** A particular Project, identified by the ID */
  project: Project;
  /** All projects within this hub */
  projects: Array<Project>;
  /** The set of tags for the  hub. */
  tagset?: Maybe<Tagset>;
  /** The template for this Hub. */
  template: HubTemplate;
};

export type HubApplicationArgs = {
  ID: Scalars['UUID'];
};

export type HubChallengeArgs = {
  ID: Scalars['UUID_NAMEID'];
};

export type HubCommunityArgs = {
  ID?: Maybe<Scalars['UUID']>;
};

export type HubGroupArgs = {
  ID: Scalars['UUID'];
};

export type HubGroupsWithTagArgs = {
  tag: Scalars['String'];
};

export type HubOpportunityArgs = {
  ID: Scalars['UUID_NAMEID'];
};

export type HubProjectArgs = {
  ID: Scalars['UUID_NAMEID'];
};

export type HubAuthorizationResetInput = {
  /** The identifier of the Hub whose Authorization Policy should be reset. */
  hubID: Scalars['UUID_NAMEID'];
};

export type HubTemplate = {
  aspectTemplates: Array<AspectTemplate>;
};

export type Lifecycle = {
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** The machine definition, describing the states, transitions etc for this Lifeycle. */
  machineDef: Scalars['JSON'];
  /** The next events of this Lifecycle. */
  nextEvents?: Maybe<Array<Scalars['String']>>;
  /** The current state of this Lifecycle. */
  state?: Maybe<Scalars['String']>;
  /** Is this lifecycle in a final state (done). */
  stateIsFinal: Scalars['Boolean'];
  /** The Lifecycle template name. */
  templateName?: Maybe<Scalars['String']>;
};

export type MembershipCommunityResultEntry = {
  /** Display name of the community */
  displayName: Scalars['String'];
  /** The ID of the community the user is a member of. */
  id: Scalars['UUID'];
};

export type MembershipOrganizationInput = {
  /** The ID of the organization to retrieve the membership of. */
  organizationID: Scalars['UUID_NAMEID'];
};

export type MembershipOrganizationResultEntryChallenge = {
  /** Display name of the entity */
  displayName: Scalars['String'];
  /** The ID of the Hub hosting this Challenge. */
  hubID: Scalars['String'];
  /** A unique identifier for this membership result. */
  id: Scalars['String'];
  /** Name Identifier of the entity */
  nameID: Scalars['NameID'];
};

export type MembershipResultEntry = {
  /** Display name of the entity */
  displayName: Scalars['String'];
  /** A unique identifier for this membership result. */
  id: Scalars['String'];
  /** Name Identifier of the entity */
  nameID: Scalars['NameID'];
};

export type MembershipUserInput = {
  /** The ID of the user to retrieve the membership of. */
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type MembershipUserResultEntryHub = {
  /** Details of the Challenges the user is a member of */
  challenges: Array<MembershipResultEntry>;
  /** Display name of the entity */
  displayName: Scalars['String'];
  /** The Hub ID */
  hubID: Scalars['String'];
  /** A unique identifier for this membership result. */
  id: Scalars['String'];
  /** Name Identifier of the entity */
  nameID: Scalars['NameID'];
  /** Details of the Opportunities the user is a member of */
  opportunities: Array<MembershipResultEntry>;
  /** Details of the UserGroups the user is a member of */
  userGroups: Array<MembershipResultEntry>;
};

export type MembershipUserResultEntryOrganization = {
  /** Display name of the entity */
  displayName: Scalars['String'];
  /** A unique identifier for this membership result. */
  id: Scalars['String'];
  /** Name Identifier of the entity */
  nameID: Scalars['NameID'];
  /** The Organization ID. */
  organizationID: Scalars['String'];
  /** Details of the Organizations the user is a member of */
  userGroups: Array<MembershipResultEntry>;
};

/** A message that was sent either as an Update or as part of a Discussion. */
export type Message = {
  /** The id for the message event. */
  id: Scalars['MessageID'];
  /** The message being sent */
  message: Scalars['Markdown'];
  /** The sender user ID */
  sender: Scalars['UUID'];
  /** The server timestamp in UTC */
  timestamp: Scalars['Float'];
};

export type Metadata = {
  /** Metrics about the activity on the platform */
  activity: Array<Nvp>;
  /** Collection of metadata about Alkemio services. */
  services: Array<ServiceMetadata>;
};

export type Mutation = {
  /** Ensure all community members are registered for communications. */
  adminCommunicationEnsureAccessToCommunications: Scalars['Boolean'];
  /** Remove an orphaned room from messaging platform. */
  adminCommunicationRemoveOrphanedRoom: Scalars['Boolean'];
  /** Allow updating the rule for joining rooms: public or invite. */
  adminCommunicationUpdateRoomsJoinRule: Scalars['Boolean'];
  /** Assigns a User as an Challenge Admin. */
  assignUserAsChallengeAdmin: User;
  /** Assigns a User as a Global Admin. */
  assignUserAsGlobalAdmin: User;
  /** Assigns a User as a Global Community Admin. */
  assignUserAsGlobalCommunityAdmin: User;
  /** Assigns a User as an Hub Admin. */
  assignUserAsHubAdmin: User;
  /** Assigns a User as an Opportunity Admin. */
  assignUserAsOpportunityAdmin: User;
  /** Assigns a User as an Organization Admin. */
  assignUserAsOrganizationAdmin: User;
  /** Assigns a User as an Organization Owner. */
  assignUserAsOrganizationOwner: User;
  /** Assigns a User as a member of the specified Community. */
  assignUserToCommunity: Community;
  /** Assigns a User as a member of the specified User Group. */
  assignUserToGroup: UserGroup;
  /** Assigns a User as a member of the specified Organization. */
  assignUserToOrganization: Organization;
  /** Reset the Authorization Policy on the specified Hub. */
  authorizationPolicyResetOnHub: Hub;
  /** Reset the Authorization Policy on the specified Organization. */
  authorizationPolicyResetOnOrganization: Organization;
  /** Reset the Authorization policy on the specified User. */
  authorizationPolicyResetOnUser: User;
  /** Creates a new Actor in the specified ActorGroup. */
  createActor: Actor;
  /** Create a new Actor Group on the EcosystemModel. */
  createActorGroup: ActorGroup;
  /** Creates Application for a User to join this Community. */
  createApplication: Application;
  /** Create a new Aspect on the Context. */
  createAspectOnContext: Aspect;
  /** Create a new Canvas on the Context. */
  createCanvasOnContext: Canvas;
  /** Creates a new Challenge within the specified Hub. */
  createChallenge: Challenge;
  /** Creates a new child challenge within the parent Challenge. */
  createChildChallenge: Challenge;
  /** Creates a new Discussion as part of this Communication. */
  createDiscussion: Discussion;
  /** Creates a new User Group in the specified Community. */
  createGroupOnCommunity: UserGroup;
  /** Creates a new User Group for the specified Organization. */
  createGroupOnOrganization: UserGroup;
  /** Creates a new Hub. */
  createHub: Hub;
  /** Creates a new Opportunity within the parent Challenge. */
  createOpportunity: Opportunity;
  /** Creates a new Organization on the platform. */
  createOrganization: Organization;
  /** Create a new Project on the Opportunity */
  createProject: Project;
  /** Creates a new Reference on the specified Aspect. */
  createReferenceOnAspect: Reference;
  /** Creates a new Reference on the specified Context. */
  createReferenceOnContext: Reference;
  /** Creates a new Reference on the specified Profile. */
  createReferenceOnProfile: Reference;
  /** Create a new Relation on the Opportunity. */
  createRelation: Relation;
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
  /** Deletes the specified Canvas. */
  deleteCanvasOnContext: Canvas;
  /** Deletes the specified Challenge. */
  deleteChallenge: Challenge;
  /** Deletes the specified Discussion. */
  deleteDiscussion: Discussion;
  /** Deletes the specified Hub. */
  deleteHub: Hub;
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
  /** Authorizes a User to be able to modify the state on the specified Challenge. */
  grantStateModificationOnChallenge: User;
  /** Sends a message on the specified User`s behalf and returns the room id */
  messageUser: Scalars['String'];
  /** Removes a comment message. */
  removeComment: Scalars['MessageID'];
  /** Removes a message from the specified Discussion. */
  removeMessageFromDiscussion: Scalars['MessageID'];
  /** Removes an update message. */
  removeUpdate: Scalars['MessageID'];
  /** Removes a User from being an Challenge Admin. */
  removeUserAsChallengeAdmin: User;
  /** Removes a User from being a Global Admin. */
  removeUserAsGlobalAdmin: User;
  /** Removes a User from being a Global Community Admin. */
  removeUserAsGlobalCommunityAdmin: User;
  /** Removes a User from being an Hub Admin. */
  removeUserAsHubAdmin: User;
  /** Removes a User from being an Opportunity Admin. */
  removeUserAsOpportunityAdmin: User;
  /** Removes a User from being an Organization Admin. */
  removeUserAsOrganizationAdmin: User;
  /** Removes a User from being an Organization Owner. */
  removeUserAsOrganizationOwner: User;
  /** Removes a User as a member of the specified Community. */
  removeUserFromCommunity: Community;
  /** Removes the specified User from specified user group */
  removeUserFromGroup: UserGroup;
  /** Removes a User as a member of the specified Organization. */
  removeUserFromOrganization: Organization;
  /** Removes an authorization credential from a User. */
  revokeCredentialFromUser: User;
  /** Sends an comment message. Returns the id of the new Update message. */
  sendComment: Message;
  /** Sends a message to the specified Discussion.  */
  sendMessageToDiscussion: Message;
  /** Sends an update message. Returns the id of the new Update message. */
  sendUpdate: Message;
  /** Updates the specified Actor. */
  updateActor: Actor;
  /** Updates the specified Aspect. */
  updateAspect: Aspect;
  /** Updates the specified Canvas. */
  updateCanvas: Canvas;
  /** Updates the specified Challenge. */
  updateChallenge: Challenge;
  /** Updates the specified Discussion. */
  updateDiscussion: Discussion;
  /** Updates the specified EcosystemModel. */
  updateEcosystemModel: EcosystemModel;
  /** Updates the Hub. */
  updateHub: Hub;
  /** Updates the specified Opportunity. */
  updateOpportunity: Opportunity;
  /** Updates the specified Organization. */
  updateOrganization: Organization;
  /** Updates the specified Profile. */
  updateProfile: Profile;
  /** Updates the specified Project. */
  updateProject: Project;
  /** Updates the User. */
  updateUser: User;
  /** Updates the specified User Group. */
  updateUserGroup: UserGroup;
  /** Updates an user preference */
  updateUserPreference: UserPreference;
  /** Updates the image URI for the specified Visual. */
  updateVisual: Visual;
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

export type MutationAssignUserAsChallengeAdminArgs = {
  membershipData: AssignChallengeAdminInput;
};

export type MutationAssignUserAsGlobalAdminArgs = {
  membershipData: AssignGlobalAdminInput;
};

export type MutationAssignUserAsGlobalCommunityAdminArgs = {
  membershipData: AssignGlobalCommunityAdminInput;
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

export type MutationAssignUserToCommunityArgs = {
  membershipData: AssignCommunityMemberInput;
};

export type MutationAssignUserToGroupArgs = {
  membershipData: AssignUserGroupMemberInput;
};

export type MutationAssignUserToOrganizationArgs = {
  membershipData: AssignOrganizationMemberInput;
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

export type MutationCreateActorArgs = {
  actorData: CreateActorInput;
};

export type MutationCreateActorGroupArgs = {
  actorGroupData: CreateActorGroupInput;
};

export type MutationCreateApplicationArgs = {
  applicationData: CreateApplicationInput;
};

export type MutationCreateAspectOnContextArgs = {
  aspectData: CreateAspectOnContextInput;
};

export type MutationCreateCanvasOnContextArgs = {
  canvasData: CreateCanvasOnContextInput;
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

export type MutationCreateGroupOnCommunityArgs = {
  groupData: CreateUserGroupInput;
};

export type MutationCreateGroupOnOrganizationArgs = {
  groupData: CreateUserGroupInput;
};

export type MutationCreateHubArgs = {
  hubData: CreateHubInput;
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

export type MutationCreateReferenceOnAspectArgs = {
  referenceData: CreateReferenceOnAspectInput;
};

export type MutationCreateReferenceOnContextArgs = {
  referenceInput: CreateReferenceOnContextInput;
};

export type MutationCreateReferenceOnProfileArgs = {
  referenceInput: CreateReferenceOnProfileInput;
};

export type MutationCreateRelationArgs = {
  relationData: CreateRelationInput;
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

export type MutationDeleteCanvasOnContextArgs = {
  deleteData: DeleteCanvasOnContextInput;
};

export type MutationDeleteChallengeArgs = {
  deleteData: DeleteChallengeInput;
};

export type MutationDeleteDiscussionArgs = {
  deleteData: DeleteDiscussionInput;
};

export type MutationDeleteHubArgs = {
  deleteData: DeleteHubInput;
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

export type MutationGrantStateModificationOnChallengeArgs = {
  grantStateModificationVCData: ChallengeAuthorizeStateModificationInput;
};

export type MutationMessageUserArgs = {
  messageData: UserSendMessageInput;
};

export type MutationRemoveCommentArgs = {
  messageData: CommentsRemoveMessageInput;
};

export type MutationRemoveMessageFromDiscussionArgs = {
  messageData: DiscussionRemoveMessageInput;
};

export type MutationRemoveUpdateArgs = {
  messageData: UpdatesRemoveMessageInput;
};

export type MutationRemoveUserAsChallengeAdminArgs = {
  membershipData: RemoveChallengeAdminInput;
};

export type MutationRemoveUserAsGlobalAdminArgs = {
  membershipData: RemoveGlobalAdminInput;
};

export type MutationRemoveUserAsGlobalCommunityAdminArgs = {
  membershipData: RemoveGlobalCommunityAdminInput;
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

export type MutationRemoveUserFromCommunityArgs = {
  membershipData: RemoveCommunityMemberInput;
};

export type MutationRemoveUserFromGroupArgs = {
  membershipData: RemoveUserGroupMemberInput;
};

export type MutationRemoveUserFromOrganizationArgs = {
  membershipData: RemoveOrganizationMemberInput;
};

export type MutationRevokeCredentialFromUserArgs = {
  revokeCredentialData: RevokeAuthorizationCredentialInput;
};

export type MutationSendCommentArgs = {
  messageData: CommentsSendMessageInput;
};

export type MutationSendMessageToDiscussionArgs = {
  messageData: DiscussionSendMessageInput;
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

export type MutationUpdateCanvasArgs = {
  canvasData: UpdateCanvasDirectInput;
};

export type MutationUpdateChallengeArgs = {
  challengeData: UpdateChallengeInput;
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

export type MutationUpdateOpportunityArgs = {
  opportunityData: UpdateOpportunityInput;
};

export type MutationUpdateOrganizationArgs = {
  organizationData: UpdateOrganizationInput;
};

export type MutationUpdateProfileArgs = {
  profileData: UpdateProfileInput;
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

export type MutationUpdateUserPreferenceArgs = {
  userPreferenceData: UpdateUserPreferenceInput;
};

export type MutationUpdateVisualArgs = {
  updateData: UpdateVisualInput;
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

export type Opportunity = Searchable & {
  /** The activity within this Opportunity. */
  activity?: Maybe<Array<Nvp>>;
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The parent Challenge of the Opportunity */
  challenge?: Maybe<Challenge>;
  /** The community for the Opportunity. */
  community?: Maybe<Community>;
  /** The context for the Opportunity. */
  context?: Maybe<Context>;
  /** The display name. */
  displayName: Scalars['String'];
  id: Scalars['UUID'];
  /** The lifeycle for the Opportunity. */
  lifecycle?: Maybe<Lifecycle>;
  /** A name identifier of the entity, unique within a given scope. */
  nameID: Scalars['NameID'];
  /** The parent entity (challenge) ID. */
  parentId?: Maybe<Scalars['String']>;
  /** The parent entity name (challenge) ID. */
  parentNameID?: Maybe<Scalars['String']>;
  /** The set of projects within the context of this Opportunity */
  projects?: Maybe<Array<Project>>;
  /** The set of Relations within the context of this Opportunity. */
  relations?: Maybe<Array<Relation>>;
  /** The set of tags for the challenge */
  tagset?: Maybe<Tagset>;
};

export type OpportunityEventInput = {
  ID: Scalars['UUID'];
  eventName: Scalars['String'];
};

export type OpportunityTemplate = {
  /** Template actor groups. */
  actorGroups?: Maybe<Array<Scalars['String']>>;
  /** Application templates. */
  applications?: Maybe<Array<ApplicationTemplate>>;
  /** Template aspects. */
  aspects?: Maybe<Array<Scalars['String']>>;
  /** Template opportunity name. */
  name: Scalars['String'];
  /** Template relations. */
  relations?: Maybe<Array<Scalars['String']>>;
};

export type Organization = Groupable &
  Searchable & {
    /** The activity within this Organization. */
    activity?: Maybe<Array<Nvp>>;
    /** The Agent representing this User. */
    agent?: Maybe<Agent>;
    /** The authorization rules for the entity */
    authorization?: Maybe<Authorization>;
    /** Organization contact email */
    contactEmail?: Maybe<Scalars['String']>;
    /** The display name. */
    displayName: Scalars['String'];
    /** Domain name; what is verified, eg. alkem.io */
    domain?: Maybe<Scalars['String']>;
    /** Group defined on this organization. */
    group?: Maybe<UserGroup>;
    /** Groups defined on this organization. */
    groups?: Maybe<Array<UserGroup>>;
    id: Scalars['UUID'];
    /** Legal name - required if hosting an Hub */
    legalEntityName?: Maybe<Scalars['String']>;
    /** All users that are members of this Organization. */
    members?: Maybe<Array<User>>;
    /** A name identifier of the entity, unique within a given scope. */
    nameID: Scalars['NameID'];
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

export type OrganizationMembership = {
  /** Details of the Challenges the Organization is leading. */
  challengesLeading: Array<MembershipOrganizationResultEntryChallenge>;
  /** Details of Hubs the Organization is hosting. */
  hubsHosting: Array<MembershipResultEntry>;
  id: Scalars['UUID'];
};

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

export type Platform = {
  /** URL to a page about the platform */
  about: Scalars['String'];
  /** The feature flags for the platform */
  featureFlags: Array<FeatureFlag>;
  /** URL to a form for providing feedback */
  feedback: Scalars['String'];
  /** URL to the privacy policy for the platform */
  privacy: Scalars['String'];
  /** URL to the security policy for the platform */
  security: Scalars['String'];
  /** URL where users can get support for the platform */
  support: Scalars['String'];
  /** URL to the terms of usage for the platform */
  terms: Scalars['String'];
};

export type PlatformHubTemplate = {
  /** Application templates. */
  applications?: Maybe<Array<ApplicationTemplate>>;
  /** Hub template name. */
  name: Scalars['String'];
};

export type Profile = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The Visual avatar for this Profile. */
  avatar?: Maybe<Visual>;
  /** A short description of the entity associated with this profile. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** A list of URLs to relevant information. */
  references?: Maybe<Array<Reference>>;
  /** A list of named tagsets, each of which has a list of tags. */
  tagsets?: Maybe<Array<Tagset>>;
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
  /** All Users that are members of a given room */
  adminCommunicationMembership: CommunicationAdminMembershipResult;
  /** Usage of the messaging platform that are not tied to the domain model. */
  adminCommunicationOrphanedUsage: CommunicationAdminOrphanedUsageResult;
  /** The authorization policy for the platform */
  authorization: Authorization;
  /** Alkemio configuration. Provides configuration to external services in the Alkemio ecosystem. */
  configuration: Config;
  /** An hub. If no ID is specified then the first Hub is returned. */
  hub: Hub;
  /** The Hubs on this platform */
  hubs: Array<Hub>;
  /** The currently logged in user */
  me: User;
  /** Check if the currently logged in user has a User profile */
  meHasProfile: Scalars['Boolean'];
  /** The memberships for this Organization */
  membershipOrganization: OrganizationMembership;
  /** Search the hub for terms supplied */
  membershipUser: UserMembership;
  /** Alkemio Services Metadata */
  metadata: Metadata;
  /** A particular Organization */
  organization: Organization;
  /** The Organizations on this platform */
  organizations: Array<Organization>;
  /** Search the hub for terms supplied */
  search: Array<SearchResultEntry>;
  /** A particular user, identified by the ID or by email */
  user: User;
  /** Privileges assigned to a User (based on held credentials) given an Authorization defnition. */
  userAuthorizationPrivileges: Array<AuthorizationPrivilege>;
  /** The users who have profiles on this platform */
  users: Array<User>;
  /** The users filtered by list of IDs. */
  usersById: Array<User>;
  /** All Users that hold credentials matching the supplied criteria. */
  usersWithAuthorizationCredential: Array<User>;
};

export type QueryAdminCommunicationMembershipArgs = {
  communicationData: CommunicationAdminMembershipInput;
};

export type QueryHubArgs = {
  ID: Scalars['UUID_NAMEID'];
};

export type QueryMembershipOrganizationArgs = {
  membershipData: MembershipOrganizationInput;
};

export type QueryMembershipUserArgs = {
  membershipData: MembershipUserInput;
};

export type QueryOrganizationArgs = {
  ID: Scalars['UUID_NAMEID'];
};

export type QueryOrganizationsArgs = {
  limit?: Maybe<Scalars['Float']>;
  shuffle?: Maybe<Scalars['Boolean']>;
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
  limit?: Maybe<Scalars['Float']>;
  shuffle?: Maybe<Scalars['Boolean']>;
};

export type QueryUsersByIdArgs = {
  IDs: Array<Scalars['UUID_NAMEID_EMAIL']>;
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
  description: Scalars['String'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  name: Scalars['String'];
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

export type RemoveChallengeAdminInput = {
  challengeID: Scalars['UUID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type RemoveCommunityMemberInput = {
  communityID: Scalars['UUID'];
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type RemoveGlobalAdminInput = {
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type RemoveGlobalCommunityAdminInput = {
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

export type RemoveOrganizationMemberInput = {
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
  resourceID?: Maybe<Scalars['String']>;
  type: AuthorizationCredential;
  /** The user from whom the credential is being removed. */
  userID: Scalars['UUID_NAMEID_EMAIL'];
};

export type SearchInput = {
  /** Restrict the search to only the specified challenges. Default is all Challenges. */
  challengesFilter?: Maybe<Array<Scalars['Float']>>;
  /** Expand the search to includes Tagsets with the provided names. Max 2. */
  tagsetNames?: Maybe<Array<Scalars['String']>>;
  /** The terms to be searched for within this Hub. Max 5. */
  terms: Array<Scalars['String']>;
  /** Restrict the search to only the specified entity types. Values allowed: user, group, organization, Default is all. */
  typesFilter?: Maybe<Array<Scalars['String']>>;
};

export type SearchResultEntry = {
  /** Each search result contains either a User, UserGroup or Organization */
  result?: Maybe<Searchable>;
  /** The score for this search result; more matches means a higher score. */
  score?: Maybe<Scalars['Float']>;
  /** The terms that were matched for this result */
  terms?: Maybe<Array<Scalars['String']>>;
};

export type Searchable = {
  id: Scalars['UUID'];
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

export type Subscription = {
  /** Receive updated content of a canvas */
  canvasContentUpdated: CanvasContentUpdated;
  /** Receive new Discussion messages */
  communicationDiscussionMessageReceived: CommunicationDiscussionMessageReceived;
  /** Receive updates on Discussions */
  communicationDiscussionUpdated: Discussion;
  /** Receive new Update messages on Communities the currently authenticated User is a member of. */
  communicationUpdateMessageReceived: CommunicationUpdateMessageReceived;
};

export type SubscriptionCanvasContentUpdatedArgs = {
  canvasIDs?: Maybe<Array<Scalars['UUID']>>;
};

export type SubscriptionCommunicationDiscussionMessageReceivedArgs = {
  discussionID: Scalars['UUID'];
};

export type SubscriptionCommunicationDiscussionUpdatedArgs = {
  communicationID: Scalars['UUID'];
};

export type SubscriptionCommunicationUpdateMessageReceivedArgs = {
  updatesIDs?: Maybe<Array<Scalars['UUID']>>;
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
  /** Hub templates. */
  hubs: Array<PlatformHubTemplate>;
  /** Template name. */
  name: Scalars['String'];
  /** Opportunity templates. */
  opportunities: Array<OpportunityTemplate>;
  /** Challenge templates. */
  organizations: Array<OrganizationTemplate>;
  /** User templates. */
  users: Array<UserTemplate>;
};

export type UpdateActorInput = {
  ID: Scalars['UUID'];
  description?: Maybe<Scalars['String']>;
  impact?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type UpdateAspectInput = {
  ID: Scalars['UUID'];
  description?: Maybe<Scalars['String']>;
  /** The display name for this entity. */
  displayName?: Maybe<Scalars['String']>;
  /** A display identifier, unique within the containing scope. Note: updating the nameID will affect URL on the client. */
  nameID?: Maybe<Scalars['NameID']>;
  /** Update the set of References for the Aspect. */
  references?: Maybe<Array<UpdateReferenceInput>>;
  /** Update the tags on the Aspect. */
  tags?: Maybe<Array<Scalars['String']>>;
};

export type UpdateAspectTemplateInput = {
  description?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type UpdateAuthorizationPolicyInput = {
  anonymousReadAccess: Scalars['Boolean'];
};

export type UpdateCanvasDirectInput = {
  ID: Scalars['UUID'];
  isTemplate?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type UpdateCanvasInput = {
  isTemplate?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type UpdateChallengeInput = {
  ID: Scalars['UUID'];
  /** Update the contained Context entity. */
  context?: Maybe<UpdateContextInput>;
  /** The display name for this entity. */
  displayName?: Maybe<Scalars['String']>;
  /** Update the lead Organizations for the Challenge. */
  leadOrganizations?: Maybe<Array<Scalars['UUID_NAMEID']>>;
  /** A display identifier, unique within the containing scope. Note: updating the nameID will affect URL on the client. */
  nameID?: Maybe<Scalars['NameID']>;
  /** Update the tags on the Tagset. */
  tags?: Maybe<Array<Scalars['String']>>;
};

export type UpdateContextInput = {
  background?: Maybe<Scalars['Markdown']>;
  impact?: Maybe<Scalars['Markdown']>;
  /** Update the set of References for the Context. */
  references?: Maybe<Array<UpdateReferenceInput>>;
  tagline?: Maybe<Scalars['String']>;
  vision?: Maybe<Scalars['Markdown']>;
  who?: Maybe<Scalars['Markdown']>;
};

export type UpdateDiscussionInput = {
  ID: Scalars['UUID'];
  /** The category for the Discussion */
  category?: Maybe<DiscussionCategory>;
  /** The description for the Discussion */
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateEcosystemModelInput = {
  ID: Scalars['UUID'];
  /** Update the Canvas for this Ecosystem Model. */
  canvas?: Maybe<UpdateCanvasInput>;
  description?: Maybe<Scalars['String']>;
};

export type UpdateHubInput = {
  /** The ID or NameID of the Hub. */
  ID: Scalars['UUID_NAMEID'];
  /** Update anonymous visibility for the Hub. */
  authorizationPolicy?: Maybe<UpdateAuthorizationPolicyInput>;
  /** Update the contained Context entity. */
  context?: Maybe<UpdateContextInput>;
  /** The display name for this entity. */
  displayName?: Maybe<Scalars['String']>;
  /** Update the host Organization for the Hub. */
  hostID?: Maybe<Scalars['UUID_NAMEID']>;
  /** A display identifier, unique within the containing scope. Note: updating the nameID will affect URL on the client. */
  nameID?: Maybe<Scalars['NameID']>;
  /** Update the tags on the Tagset. */
  tags?: Maybe<Array<Scalars['String']>>;
  /** Update the template for this Hub. */
  template?: Maybe<UpdateHubTemplateInput>;
};

export type UpdateHubTemplateInput = {
  /** The set of aspect type definitions to be supported by the Hub. */
  aspectTemplates: Array<UpdateAspectTemplateInput>;
};

export type UpdateOpportunityInput = {
  ID: Scalars['UUID'];
  /** Update the contained Context entity. */
  context?: Maybe<UpdateContextInput>;
  /** The display name for this entity. */
  displayName?: Maybe<Scalars['String']>;
  /** A display identifier, unique within the containing scope. Note: updating the nameID will affect URL on the client. */
  nameID?: Maybe<Scalars['NameID']>;
  /** Update the tags on the Tagset. */
  tags?: Maybe<Array<Scalars['String']>>;
};

export type UpdateOrganizationInput = {
  /** The ID or NameID of the Organization to update. */
  ID: Scalars['UUID_NAMEID'];
  contactEmail?: Maybe<Scalars['String']>;
  /** The display name for this entity. */
  displayName?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  legalEntityName?: Maybe<Scalars['String']>;
  /** A display identifier, unique within the containing scope. Note: updating the nameID will affect URL on the client. */
  nameID?: Maybe<Scalars['NameID']>;
  profileData?: Maybe<UpdateProfileInput>;
  website?: Maybe<Scalars['String']>;
};

export type UpdateProfileInput = {
  ID: Scalars['UUID'];
  description?: Maybe<Scalars['String']>;
  references?: Maybe<Array<UpdateReferenceInput>>;
  tagsets?: Maybe<Array<UpdateTagsetInput>>;
};

export type UpdateProjectInput = {
  ID: Scalars['UUID'];
  description?: Maybe<Scalars['String']>;
  /** The display name for this entity. */
  displayName?: Maybe<Scalars['String']>;
  /** A display identifier, unique within the containing scope. Note: updating the nameID will affect URL on the client. */
  nameID?: Maybe<Scalars['NameID']>;
};

export type UpdateReferenceInput = {
  ID: Scalars['UUID'];
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

export type UpdateTagsetInput = {
  ID: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
};

export type UpdateUserGroupInput = {
  ID: Scalars['UUID'];
  name?: Maybe<Scalars['String']>;
  profileData?: Maybe<UpdateProfileInput>;
};

export type UpdateUserInput = {
  ID: Scalars['UUID_NAMEID_EMAIL'];
  accountUpn?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** The display name for this entity. */
  displayName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** A display identifier, unique within the containing scope. Note: updating the nameID will affect URL on the client. */
  nameID?: Maybe<Scalars['NameID']>;
  phone?: Maybe<Scalars['String']>;
  profileData?: Maybe<UpdateProfileInput>;
  /** Set this user profile as being used as a service account or not. */
  serviceProfile?: Maybe<Scalars['Boolean']>;
};

export type UpdateUserPreferenceInput = {
  /** Type of the user preference */
  type: UserPreferenceType;
  /** ID of the user */
  userID: Scalars['UUID'];
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

export type User = Searchable & {
  /** The unique personal identifier (upn) for the account associated with this user profile */
  accountUpn: Scalars['String'];
  /** The Agent representing this User. */
  agent?: Maybe<Agent>;
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  city: Scalars['String'];
  /** The Community rooms this user is a member of */
  communityRooms?: Maybe<Array<CommunicationRoom>>;
  country: Scalars['String'];
  /** The direct rooms this user is a member of */
  directRooms?: Maybe<Array<DirectRoom>>;
  /** The display name. */
  displayName: Scalars['String'];
  /** The email address for this User. */
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['UUID'];
  lastName: Scalars['String'];
  /** A name identifier of the entity, unique within a given scope. */
  nameID: Scalars['NameID'];
  /** The phone number for this User. */
  phone: Scalars['String'];
  /** The preferences for this user */
  preferences: Array<UserPreference>;
  /** The Profile for this User. */
  profile?: Maybe<Profile>;
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

export type UserGroup = Searchable & {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  id: Scalars['UUID'];
  /** The Users that are members of this User Group. */
  members?: Maybe<Array<User>>;
  name: Scalars['String'];
  /** Containing entity for this UserGroup. */
  parent?: Maybe<Groupable>;
  /** The profile for the user group */
  profile?: Maybe<Profile>;
};

export type UserMembership = {
  /** Open applications for this user. */
  applications?: Maybe<Array<ApplicationResultEntry>>;
  /** All the communitites the user is a part of. */
  communities: Array<MembershipCommunityResultEntry>;
  /** Details of Hubs the user is a member of, with child memberships */
  hubs: Array<MembershipUserResultEntryHub>;
  id: Scalars['UUID'];
  /** Details of the Organizations the user is a member of, with child memberships. */
  organizations: Array<MembershipUserResultEntryOrganization>;
};

export type UserPreference = {
  /** The authorization rules for the entity */
  authorization?: Maybe<Authorization>;
  /** The definition for the Preference */
  definition: UserPreferenceDefinition;
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** Value of the preference */
  value: Scalars['String'];
};

export type UserPreferenceDefinition = {
  /** Preference description */
  description: Scalars['String'];
  /** The name */
  displayName: Scalars['String'];
  /** The group */
  group: Scalars['String'];
  /** The ID of the entity */
  id: Scalars['UUID'];
  /** Type of preference */
  type: UserPreferenceType;
  /** Preference value type */
  valueType: UserPreferenceValueType;
};

export enum UserPreferenceType {
  NotificationApplicationReceived = 'NOTIFICATION_APPLICATION_RECEIVED',
  NotificationApplicationSubmitted = 'NOTIFICATION_APPLICATION_SUBMITTED',
  NotificationCommunicationDiscussionCreated = 'NOTIFICATION_COMMUNICATION_DISCUSSION_CREATED',
  NotificationCommunicationDiscussionCreatedAdmin = 'NOTIFICATION_COMMUNICATION_DISCUSSION_CREATED_ADMIN',
  NotificationCommunicationDiscussionResponse = 'NOTIFICATION_COMMUNICATION_DISCUSSION_RESPONSE',
  NotificationCommunicationUpdates = 'NOTIFICATION_COMMUNICATION_UPDATES',
  NotificationCommunicationUpdateSentAdmin = 'NOTIFICATION_COMMUNICATION_UPDATE_SENT_ADMIN',
  NotificationUserSignUp = 'NOTIFICATION_USER_SIGN_UP',
}

export enum UserPreferenceValueType {
  Boolean = 'BOOLEAN',
  Float = 'FLOAT',
  Int = 'INT',
  String = 'STRING',
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
  resourceID?: Maybe<Scalars['UUID']>;
  /** The type of credential. */
  type: AuthorizationCredential;
};

export type VerifiedCredential = {
  /** JSON for the claim in the credential */
  claim: Scalars['JSON'];
  /** The time at which the credential was issued */
  issued: Scalars['String'];
  /** The challenge issuing the VC */
  issuer: Scalars['String'];
  /** The type of VC */
  type: Scalars['String'];
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

export type VisualUploadImageInput = {
  visualID: Scalars['String'];
};
