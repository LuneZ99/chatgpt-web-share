/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/auth/login": {
    /** Auth:Jwt.Login */
    post: operations["auth_jwt_login_auth_login_post"];
  };
  "/auth/logout": {
    /** Auth:Jwt.Logout */
    post: operations["auth_jwt_logout_auth_logout_post"];
  };
  "/auth/forgot-password": {
    /** Reset:Forgot Password */
    post: operations["reset_forgot_password_auth_forgot_password_post"];
  };
  "/auth/reset-password": {
    /** Reset:Reset Password */
    post: operations["reset_reset_password_auth_reset_password_post"];
  };
  "/auth/register": {
    /** Register:Register */
    post: operations["register_register_auth_register_post"];
  };
  "/user": {
    /** Get All Users */
    get: operations["get_all_users_user_get"];
  };
  "/user/{user_id}/reset-password": {
    /** Reset Password */
    patch: operations["reset_password_user__user_id__reset_password_patch"];
  };
  "/user/{user_id}/limit": {
    /** Update Limit */
    post: operations["update_limit_user__user_id__limit_post"];
  };
  "/user/me": {
    /** Users:Current User */
    get: operations["users_current_user_user_me_get"];
    /** Users:Patch Current User */
    patch: operations["users_patch_current_user_user_me_patch"];
  };
  "/user/{id}": {
    /** Users:User */
    get: operations["users_user_user__id__get"];
    /** Users:Delete User */
    delete: operations["users_delete_user_user__id__delete"];
    /** Users:Patch User */
    patch: operations["users_patch_user_user__id__patch"];
  };
  "/conv": {
    /**
     * Get All Conversations 
     * @description 返回自己的有效会话
     * 对于管理员，返回所有对话，并可以指定是否只返回有效会话
     */
    get: operations["get_all_conversations_conv_get"];
  };
  "/conv/{conversation_id}": {
    /** Get Conversation History */
    get: operations["get_conversation_history_conv__conversation_id__get"];
    /**
     * Delete Conversation 
     * @description remove conversation from database and chatgpt server
     */
    delete: operations["delete_conversation_conv__conversation_id__delete"];
    /** Change Conversation Title */
    patch: operations["change_conversation_title_conv__conversation_id__patch"];
  };
  "/conv/{conversation_id}/vanish": {
    /** Vanish Conversation */
    delete: operations["vanish_conversation_conv__conversation_id__vanish_delete"];
  };
  "/conv/{conversation_id}/assign/{username}": {
    /** Assign Conversation */
    patch: operations["assign_conversation_conv__conversation_id__assign__username__patch"];
  };
  "/conv/{conversation_id}/gen_title": {
    /** Generate Conversation Title */
    patch: operations["generate_conversation_title_conv__conversation_id__gen_title_patch"];
  };
  "/system/info": {
    /** Get System Info */
    get: operations["get_system_info_system_info_get"];
  };
  "/system/request_statistics": {
    /** Get Request Statistics */
    get: operations["get_request_statistics_system_request_statistics_get"];
  };
  "/system/proxy_logs": {
    /** Get Proxy Logs */
    post: operations["get_proxy_logs_system_proxy_logs_post"];
  };
  "/system/server_logs": {
    /** Get Server Logs */
    post: operations["get_server_logs_system_server_logs_post"];
  };
  "/status": {
    /**
     * Get Server Status 
     * @description 普通用户获取服务器状态
     */
    get: operations["get_server_status_status_get"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** Body_auth_jwt_login_auth_login_post */
    Body_auth_jwt_login_auth_login_post: {
      /** Grant Type */
      grant_type?: string;
      /** Username */
      username: string;
      /** Password */
      password: string;
      /**
       * Scope 
       * @default
       */
      scope?: string;
      /** Client Id */
      client_id?: string;
      /** Client Secret */
      client_secret?: string;
    };
    /** Body_reset_forgot_password_auth_forgot_password_post */
    Body_reset_forgot_password_auth_forgot_password_post: {
      /**
       * Email 
       * Format: email
       */
      email: string;
    };
    /** Body_reset_reset_password_auth_reset_password_post */
    Body_reset_reset_password_auth_reset_password_post: {
      /** Token */
      token: string;
      /** Password */
      password: string;
    };
    /**
     * ChatModels 
     * @description An enumeration. 
     * @enum {unknown}
     */
    ChatModels: "gpt-4" | "text-davinci-002-render-sha" | "text-davinci-002-render-paid" | "";
    /**
     * ChatStatus 
     * @description An enumeration. 
     * @enum {unknown}
     */
    ChatStatus: "asking" | "queueing" | "idling";
    /** ConversationSchema */
    ConversationSchema: {
      /**
       * Id 
       * @default -1
       */
      id?: number;
      /**
       * Conversation Id 
       * Format: uuid
       */
      conversation_id?: string;
      /** Title */
      title?: string;
      /** User Id */
      user_id?: number;
      /** Is Valid */
      is_valid?: boolean;
      model_name?: components["schemas"]["ChatModels"];
      /**
       * Create Time 
       * Format: date-time
       */
      create_time?: string;
      /**
       * Active Time 
       * Format: date-time
       */
      active_time?: string;
    };
    /** ErrorModel */
    ErrorModel: {
      /** Detail */
      detail: string | ({
        [key: string]: string | undefined;
      });
    };
    /** HTTPValidationError */
    HTTPValidationError: {
      /** Detail */
      detail?: (components["schemas"]["ValidationError"])[];
    };
    /** LimitSchema */
    LimitSchema: {
      /** Can Use Paid */
      can_use_paid?: boolean;
      /** Can Use Gpt4 */
      can_use_gpt4?: boolean;
      /** Max Conv Count */
      max_conv_count?: number;
      /** Available Ask Count */
      available_ask_count?: number;
      /** Available Gpt4 Ask Count */
      available_gpt4_ask_count?: number;
    };
    /** LogFilterOptions */
    LogFilterOptions: {
      /**
       * Max Lines 
       * @default 100
       */
      max_lines?: number;
      /** Exclude Keywords */
      exclude_keywords?: (string)[];
    };
    /** RequestStatistics */
    RequestStatistics: {
      /** Request Counts Interval */
      request_counts_interval: number;
      /** Request Counts */
      request_counts: (([[object Object], [object Object]])[])[];
      /** Ask Records */
      ask_records: (([[object Object], [object Object]])[])[];
    };
    /** ServerStatusSchema */
    ServerStatusSchema: {
      /** Active User In 5M */
      active_user_in_5m?: number;
      /** Active User In 1H */
      active_user_in_1h?: number;
      /** Active User In 1D */
      active_user_in_1d?: number;
      /** Is Chatbot Busy */
      is_chatbot_busy?: boolean;
      /** Chatbot Waiting Count */
      chatbot_waiting_count?: number;
    };
    /** SystemInfo */
    SystemInfo: {
      /** Startup Time */
      startup_time: number;
      /** Total User Count */
      total_user_count: number;
      /** Total Conversation Count */
      total_conversation_count: number;
      /** Valid Conversation Count */
      valid_conversation_count: number;
    };
    /** UserCreate */
    UserCreate: {
      /** Email */
      email: string;
      /** Password */
      password: string;
      /**
       * Is Active 
       * @default true
       */
      is_active?: boolean;
      /**
       * Is Superuser 
       * @default false
       */
      is_superuser?: boolean;
      /**
       * Is Verified 
       * @default false
       */
      is_verified?: boolean;
      /** Username */
      username: string;
      /** Nickname */
      nickname: string;
      /**
       * Can Use Paid 
       * @default false
       */
      can_use_paid?: boolean;
      /**
       * Max Conv Count 
       * @default -1
       */
      max_conv_count?: number;
      /**
       * Available Ask Count 
       * @default -1
       */
      available_ask_count?: number;
    };
    /**
     * UserRead 
     * @description Base User model.
     */
    UserRead: {
      /** Id */
      id: number;
      /** Email */
      email: string;
      /** Is Active */
      is_active: boolean;
      /** Is Superuser */
      is_superuser: boolean;
      /** Is Verified */
      is_verified: boolean;
      /** Username */
      username: string;
      /** Nickname */
      nickname: string;
      /**
       * Active Time 
       * Format: date-time
       */
      active_time?: string;
      chat_status: components["schemas"]["ChatStatus"];
      /** Can Use Paid */
      can_use_paid: boolean;
      /** Can Use Gpt4 */
      can_use_gpt4: boolean;
      /** Max Conv Count */
      max_conv_count?: number;
      /** Available Ask Count */
      available_ask_count?: number;
      /** Available Gpt4 Ask Count */
      available_gpt4_ask_count?: number;
    };
    /**
     * UserUpdate 
     * @description Base User model.
     */
    UserUpdate: {
      /** Id */
      id?: Record<string, never>;
      /** Email */
      email?: string;
      /**
       * Is Active 
       * @default true
       */
      is_active?: boolean;
      /**
       * Is Superuser 
       * @default false
       */
      is_superuser?: boolean;
      /**
       * Is Verified 
       * @default false
       */
      is_verified?: boolean;
      /** Nickname */
      nickname: string;
    };
    /** ValidationError */
    ValidationError: {
      /** Location */
      loc: (string | number)[];
      /** Message */
      msg: string;
      /** Error Type */
      type: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  auth_jwt_login_auth_login_post: {
    /** Auth:Jwt.Login */
    requestBody: {
      content: {
        "application/x-www-form-urlencoded": components["schemas"]["Body_auth_jwt_login_auth_login_post"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["ErrorModel"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  auth_jwt_logout_auth_logout_post: {
    /** Auth:Jwt.Logout */
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
      /** @description Missing token or inactive user. */
      401: never;
    };
  };
  reset_forgot_password_auth_forgot_password_post: {
    /** Reset:Forgot Password */
    requestBody: {
      content: {
        "application/json": components["schemas"]["Body_reset_forgot_password_auth_forgot_password_post"];
      };
    };
    responses: {
      /** @description Successful Response */
      202: {
        content: {
          "application/json": string;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  reset_reset_password_auth_reset_password_post: {
    /** Reset:Reset Password */
    requestBody: {
      content: {
        "application/json": components["schemas"]["Body_reset_reset_password_auth_reset_password_post"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["ErrorModel"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  register_register_auth_register_post: {
    /** Register:Register */
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserCreate"];
      };
    };
    responses: {
      /** @description Successful Response */
      201: {
        content: {
          "application/json": string;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["ErrorModel"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  get_all_users_user_get: {
    /** Get All Users */
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
    };
  };
  reset_password_user__user_id__reset_password_patch: {
    /** Reset Password */
    parameters: {
      query?: {
        new_password?: string;
      };
      path: {
        user_id: number;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  update_limit_user__user_id__limit_post: {
    /** Update Limit */
    parameters: {
      path: {
        user_id: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["LimitSchema"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  users_current_user_user_me_get: {
    /** Users:Current User */
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
      /** @description Missing token or inactive user. */
      401: never;
    };
  };
  users_patch_current_user_user_me_patch: {
    /** Users:Patch Current User */
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserUpdate"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["ErrorModel"];
        };
      };
      /** @description Missing token or inactive user. */
      401: never;
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  users_user_user__id__get: {
    /** Users:User */
    parameters: {
      path: {
        id: Record<string, never>;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
      /** @description Missing token or inactive user. */
      401: never;
      /** @description Not a superuser. */
      403: never;
      /** @description The user does not exist. */
      404: never;
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  users_delete_user_user__id__delete: {
    /** Users:Delete User */
    parameters: {
      path: {
        id: Record<string, never>;
      };
    };
    responses: {
      /** @description Successful Response */
      204: never;
      /** @description Missing token or inactive user. */
      401: never;
      /** @description Not a superuser. */
      403: never;
      /** @description The user does not exist. */
      404: never;
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  users_patch_user_user__id__patch: {
    /** Users:Patch User */
    parameters: {
      path: {
        id: Record<string, never>;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserUpdate"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["ErrorModel"];
        };
      };
      /** @description Missing token or inactive user. */
      401: never;
      /** @description Not a superuser. */
      403: never;
      /** @description The user does not exist. */
      404: never;
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  get_all_conversations_conv_get: {
    /**
     * Get All Conversations 
     * @description 返回自己的有效会话
     * 对于管理员，返回所有对话，并可以指定是否只返回有效会话
     */
    parameters?: {
      query?: {
        fetch_all?: boolean;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  get_conversation_history_conv__conversation_id__get: {
    /** Get Conversation History */
    parameters: {
      path: {
        conversation_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  delete_conversation_conv__conversation_id__delete: {
    /**
     * Delete Conversation 
     * @description remove conversation from database and chatgpt server
     */
    parameters: {
      path: {
        conversation_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  change_conversation_title_conv__conversation_id__patch: {
    /** Change Conversation Title */
    parameters: {
      query: {
        title: string;
      };
      path: {
        conversation_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  vanish_conversation_conv__conversation_id__vanish_delete: {
    /** Vanish Conversation */
    parameters: {
      path: {
        conversation_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  assign_conversation_conv__conversation_id__assign__username__patch: {
    /** Assign Conversation */
    parameters: {
      path: {
        username: string;
        conversation_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  generate_conversation_title_conv__conversation_id__gen_title_patch: {
    /** Generate Conversation Title */
    parameters: {
      query: {
        message_id: string;
      };
      path: {
        conversation_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  get_system_info_system_info_get: {
    /** Get System Info */
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
    };
  };
  get_request_statistics_system_request_statistics_get: {
    /** Get Request Statistics */
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
    };
  };
  get_proxy_logs_system_proxy_logs_post: {
    /** Get Proxy Logs */
    requestBody?: {
      content: {
        "application/json": components["schemas"]["LogFilterOptions"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  get_server_logs_system_server_logs_post: {
    /** Get Server Logs */
    requestBody?: {
      content: {
        "application/json": components["schemas"]["LogFilterOptions"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  get_server_status_status_get: {
    /**
     * Get Server Status 
     * @description 普通用户获取服务器状态
     */
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": string;
        };
      };
    };
  };
}
