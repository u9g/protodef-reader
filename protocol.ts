type VarInt = never;
type f64 = never;
type i16 = never;
type i8 = never;
type i32 = never;
type UUID = never;
type EntityMetadata = never;
type Position = never;
type u8 = never;
type bool = never;
type Slot = never;
type f32 = never;
type Void = never;
type i64 = never;
type OptionalNbt = never;
type RestBuffer = never;
type Nbt = never;
type VarLong = never;
type u16 = never;
type Arr<T> = never;
type BitField<T> = never;
type Option<T> = never;
type Buffer<T> = never;
type Record_<K, V, Size = VarInt> = never;

namespace handshaking.to_client {
  interface packet {
    name: /* empty mapper */ any;
    params: /* empty switch */ any;
  }
}
namespace handshaking.to_server {
  interface packet {
    name: {
      0x00: "set_protocol";
      0xfe: "legacy_server_list_ping";
      _: Void;
    }[] /* mapper */;
    params: {
      legacy_server_list_ping: packet_legacy_server_list_ping;
      set_protocol: packet_set_protocol;
      _: void;
    } /* .get(name) */;
  }

  interface packet_legacy_server_list_ping {
    payload: u8;
  }

  interface packet_set_protocol {
    protocolVersion: VarInt;
    serverHost: string;
    serverPort: u16;
    nextState: VarInt;
  }
}
namespace status.to_client {
  interface packet {
    name: { 0x00: "server_info"; 0x01: "ping"; _: Void }[] /* mapper */;
    params: {
      ping: packet_ping;
      server_info: packet_server_info;
      _: void;
    } /* .get(name) */;
  }

  interface packet_ping {
    time: i64;
  }

  interface packet_server_info {
    response: string;
  }
}
namespace status.to_server {
  interface packet {
    name: { 0x00: "ping_start"; 0x01: "ping"; _: Void }[] /* mapper */;
    params: {
      ping: packet_ping;
      ping_start: packet_ping_start;
      _: void;
    } /* .get(name) */;
  }

  interface packet_ping {
    time: i64;
  }

  interface packet_ping_start {}
}
namespace login.to_client {
  interface packet {
    name: {
      0x00: "disconnect";
      0x01: "encryption_begin";
      0x02: "success";
      0x03: "compress";
      _: Void;
    }[] /* mapper */;
    params: {
      compress: packet_compress;
      disconnect: packet_disconnect;
      encryption_begin: packet_encryption_begin;
      success: packet_success;
      _: void;
    } /* .get(name) */;
  }

  interface packet_compress {
    threshold: VarInt;
  }

  interface packet_disconnect {
    reason: string;
  }

  interface packet_encryption_begin {
    serverId: string;
    publicKey: Buffer<{ countType: VarInt }>;
    verifyToken: Buffer<{ countType: VarInt }>;
  }

  interface packet_success {
    uuid: string;
    username: string;
  }
}
namespace login.to_server {
  interface packet {
    name: {
      0x00: "login_start";
      0x01: "encryption_begin";
      _: Void;
    }[] /* mapper */;
    params: {
      encryption_begin: packet_encryption_begin;
      login_start: packet_login_start;
      _: void;
    } /* .get(name) */;
  }

  interface packet_encryption_begin {
    sharedSecret: Buffer<{ countType: VarInt }>;
    verifyToken: Buffer<{ countType: VarInt }>;
  }

  interface packet_login_start {
    username: string;
  }
}
namespace play.to_client {
  interface packet {
    name: {
      0x00: "spawn_entity";
      0x01: "spawn_entity_experience_orb";
      0x02: "spawn_entity_weather";
      0x03: "spawn_entity_living";
      0x04: "spawn_entity_painting";
      0x05: "named_entity_spawn";
      0x06: "animation";
      0x07: "statistics";
      0x08: "block_break_animation";
      0x09: "tile_entity_data";
      0x0a: "block_action";
      0x0b: "block_change";
      0x0c: "boss_bar";
      0x0d: "difficulty";
      0x0e: "tab_complete";
      0x0f: "chat";
      0x10: "multi_block_change";
      0x11: "transaction";
      0x12: "close_window";
      0x13: "open_window";
      0x14: "window_items";
      0x15: "craft_progress_bar";
      0x16: "set_slot";
      0x17: "set_cooldown";
      0x18: "custom_payload";
      0x19: "named_sound_effect";
      0x1a: "kick_disconnect";
      0x1b: "entity_status";
      0x1c: "explosion";
      0x1d: "unload_chunk";
      0x1e: "game_state_change";
      0x1f: "keep_alive";
      0x20: "map_chunk";
      0x21: "world_event";
      0x22: "world_particles";
      0x23: "login";
      0x24: "map";
      0x25: "entity";
      0x26: "rel_entity_move";
      0x27: "entity_move_look";
      0x28: "entity_look";
      0x29: "vehicle_move";
      0x2a: "open_sign_entity";
      0x2b: "craft_recipe_response";
      0x2c: "abilities";
      0x2d: "combat_event";
      0x2e: "player_info";
      0x2f: "position";
      0x30: "bed";
      0x31: "unlock_recipes";
      0x32: "entity_destroy";
      0x33: "remove_entity_effect";
      0x34: "resource_pack_send";
      0x35: "respawn";
      0x36: "entity_head_rotation";
      0x37: "select_advancement_tab";
      0x38: "world_border";
      0x39: "camera";
      0x3a: "held_item_slot";
      0x3b: "scoreboard_display_objective";
      0x3c: "entity_metadata";
      0x3d: "attach_entity";
      0x3e: "entity_velocity";
      0x3f: "entity_equipment";
      0x40: "experience";
      0x41: "update_health";
      0x42: "scoreboard_objective";
      0x43: "set_passengers";
      0x44: "teams";
      0x45: "scoreboard_score";
      0x46: "spawn_position";
      0x47: "update_time";
      0x48: "title";
      0x49: "sound_effect";
      0x4a: "playerlist_header";
      0x4b: "collect";
      0x4c: "entity_teleport";
      0x4d: "advancements";
      0x4e: "entity_update_attributes";
      0x4f: "entity_effect";
      _: Void;
    }[] /* mapper */;
    params: {
      abilities: packet_abilities;
      advancements: packet_advancements;
      animation: packet_animation;
      attach_entity: packet_attach_entity;
      bed: packet_bed;
      block_action: packet_block_action;
      block_break_animation: packet_block_break_animation;
      block_change: packet_block_change;
      boss_bar: packet_boss_bar;
      camera: packet_camera;
      chat: packet_chat;
      close_window: packet_close_window;
      collect: packet_collect;
      combat_event: packet_combat_event;
      craft_progress_bar: packet_craft_progress_bar;
      craft_recipe_response: packet_craft_recipe_response;
      custom_payload: packet_custom_payload;
      difficulty: packet_difficulty;
      entity: packet_entity;
      entity_destroy: packet_entity_destroy;
      entity_effect: packet_entity_effect;
      entity_equipment: packet_entity_equipment;
      entity_head_rotation: packet_entity_head_rotation;
      entity_look: packet_entity_look;
      entity_metadata: packet_entity_metadata;
      entity_move_look: packet_entity_move_look;
      entity_status: packet_entity_status;
      entity_teleport: packet_entity_teleport;
      entity_update_attributes: packet_entity_update_attributes;
      entity_velocity: packet_entity_velocity;
      experience: packet_experience;
      explosion: packet_explosion;
      game_state_change: packet_game_state_change;
      held_item_slot: packet_held_item_slot;
      keep_alive: packet_keep_alive;
      kick_disconnect: packet_kick_disconnect;
      login: packet_login;
      map: packet_map;
      map_chunk: packet_map_chunk;
      multi_block_change: packet_multi_block_change;
      named_entity_spawn: packet_named_entity_spawn;
      named_sound_effect: packet_named_sound_effect;
      open_sign_entity: packet_open_sign_entity;
      open_window: packet_open_window;
      player_info: packet_player_info;
      playerlist_header: packet_playerlist_header;
      position: packet_position;
      rel_entity_move: packet_rel_entity_move;
      remove_entity_effect: packet_remove_entity_effect;
      resource_pack_send: packet_resource_pack_send;
      respawn: packet_respawn;
      scoreboard_display_objective: packet_scoreboard_display_objective;
      scoreboard_objective: packet_scoreboard_objective;
      scoreboard_score: packet_scoreboard_score;
      select_advancement_tab: packet_select_advancement_tab;
      set_cooldown: packet_set_cooldown;
      set_passengers: packet_set_passengers;
      set_slot: packet_set_slot;
      sound_effect: packet_sound_effect;
      spawn_entity: packet_spawn_entity;
      spawn_entity_experience_orb: packet_spawn_entity_experience_orb;
      spawn_entity_living: packet_spawn_entity_living;
      spawn_entity_painting: packet_spawn_entity_painting;
      spawn_entity_weather: packet_spawn_entity_weather;
      spawn_position: packet_spawn_position;
      statistics: packet_statistics;
      tab_complete: packet_tab_complete;
      teams: packet_teams;
      tile_entity_data: packet_tile_entity_data;
      title: packet_title;
      transaction: packet_transaction;
      unload_chunk: packet_unload_chunk;
      unlock_recipes: packet_unlock_recipes;
      update_health: packet_update_health;
      update_time: packet_update_time;
      vehicle_move: packet_vehicle_move;
      window_items: packet_window_items;
      world_border: packet_world_border;
      world_event: packet_world_event;
      world_particles: packet_world_particles;
      _: void;
    } /* .get(name) */;
  }

  interface packet_abilities {
    flags: i8;
    flyingSpeed: f32;
    walkingSpeed: f32;
  }

  interface packet_advancements {
    reset: bool;
    advancementMapping: Record_<
      string,
      {
        criteria: Record_<string, Void>;
        displayData: Option<{
          backgroundTexture: {
            1: string;
            _: Void;
          } /* .get(flags/has_background_texture) */;
          description: string;
          flags: BitField<{
            fields: [
              { name: "_unused"; size: 29; signed: false },
              { name: "has_background_texture"; size: 1; signed: false },
              { name: "hidden"; size: 1; signed: false },
              { name: "show_toast"; size: 1; signed: false }
            ];
          }>;
          frameType: VarInt;
          icon: Slot;
          title: string;
          xCord: f32;
          yCord: f32;
        }>;
        parentId: Option<string>;
        requirements: string[][];
      }
    >;
    identifiers: string[];
    progressMapping: Record_<
      string,
      { criterionIdentifier: string; criterionProgress: Option<i64> }[]
    >;
  }

  interface packet_animation {
    entityId: VarInt;
    animation: u8;
  }

  interface packet_attach_entity {
    entityId: i32;
    vehicleId: i32;
  }

  interface packet_bed {
    entityId: VarInt;
    location: Position;
  }

  interface packet_block_action {
    location: Position;
    byte1: u8;
    byte2: u8;
    blockId: VarInt;
  }

  interface packet_block_break_animation {
    entityId: VarInt;
    location: Position;
    destroyStage: i8;
  }

  interface packet_block_change {
    location: Position;
    type: VarInt;
  }

  interface packet_boss_bar {
    entityUUID: UUID;
    action: VarInt;
    title: { 0: string; 3: string; _: Void } /* .get(action) */;
    health: { 0: f32; 2: f32; _: Void } /* .get(action) */;
    color: { 0: VarInt; 4: VarInt; _: Void } /* .get(action) */;
    dividers: { 0: VarInt; 4: VarInt; _: Void } /* .get(action) */;
    flags: { 0: u8; 5: u8; _: Void } /* .get(action) */;
  }

  interface packet_camera {
    cameraId: VarInt;
  }

  interface packet_chat {
    message: string;
    position: i8;
  }

  interface packet_close_window {
    windowId: u8;
  }

  interface packet_collect {
    collectedEntityId: VarInt;
    collectorEntityId: VarInt;
    pickupItemCount: VarInt;
  }

  interface packet_combat_event {
    event: VarInt;
    duration: { 1: VarInt; _: Void } /* .get(event) */;
    playerId: { 2: VarInt; _: Void } /* .get(event) */;
    entityId: { 1: i32; 2: i32; _: Void } /* .get(event) */;
    message: { 2: string; _: Void } /* .get(event) */;
  }

  interface packet_craft_progress_bar {
    windowId: u8;
    property: i16;
    value: i16;
  }

  interface packet_craft_recipe_response {
    windowId: i8;
    recipe: VarInt;
  }

  interface packet_custom_payload {
    channel: string;
    data: RestBuffer;
  }

  interface packet_difficulty {
    difficulty: u8;
  }

  interface packet_entity {
    entityId: VarInt;
  }

  interface packet_entity_destroy {
    entityIds: VarInt[];
  }

  interface packet_entity_effect {
    entityId: VarInt;
    effectId: i8;
    amplifier: i8;
    duration: VarInt;
    hideParticles: i8;
  }

  interface packet_entity_equipment {
    entityId: VarInt;
    slot: VarInt;
    item: Slot;
  }

  interface packet_entity_head_rotation {
    entityId: VarInt;
    headYaw: i8;
  }

  interface packet_entity_look {
    entityId: VarInt;
    yaw: i8;
    pitch: i8;
    onGround: bool;
  }

  interface packet_entity_metadata {
    entityId: VarInt;
    metadata: EntityMetadata;
  }

  interface packet_entity_move_look {
    entityId: VarInt;
    dX: i16;
    dY: i16;
    dZ: i16;
    yaw: i8;
    pitch: i8;
    onGround: bool;
  }

  interface packet_entity_status {
    entityId: i32;
    entityStatus: i8;
  }

  interface packet_entity_teleport {
    entityId: VarInt;
    x: f64;
    y: f64;
    z: f64;
    yaw: i8;
    pitch: i8;
    onGround: bool;
  }

  interface packet_entity_update_attributes {
    entityId: VarInt;
    properties: {
      key: string;
      modifiers: { amount: f64; operation: i8; uuid: UUID }[];
      value: f64;
    }[i32];
  }

  interface packet_entity_velocity {
    entityId: VarInt;
    velocityX: i16;
    velocityY: i16;
    velocityZ: i16;
  }

  interface packet_experience {
    experienceBar: f32;
    level: VarInt;
    totalExperience: VarInt;
  }

  interface packet_explosion {
    x: f32;
    y: f32;
    z: f32;
    radius: f32;
    affectedBlockOffsets: { x: i8; y: i8; z: i8 }[i32];
    playerMotionX: f32;
    playerMotionY: f32;
    playerMotionZ: f32;
  }

  interface packet_game_state_change {
    reason: u8;
    gameMode: f32;
  }

  interface packet_held_item_slot {
    slot: i8;
  }

  interface packet_keep_alive {
    keepAliveId: i64;
  }

  interface packet_kick_disconnect {
    reason: string;
  }

  interface packet_login {
    entityId: i32;
    gameMode: u8;
    dimension: i32;
    difficulty: u8;
    maxPlayers: u8;
    levelType: string;
    reducedDebugInfo: bool;
  }

  interface packet_map {
    itemDamage: VarInt;
    scale: i8;
    trackingPosition: bool;
    icons: { directionAndType: i8; x: i8; z: i8 }[];
    columns: i8;
    rows: { 0: Void; _: i8 } /* .get(columns) */;
    x: { 0: Void; _: i8 } /* .get(columns) */;
    y: { 0: Void; _: i8 } /* .get(columns) */;
    data: { 0: Void; _: Buffer<{ countType: VarInt }> } /* .get(columns) */;
  }

  interface packet_map_chunk {
    x: i32;
    z: i32;
    groundUp: bool;
    bitMap: VarInt;
    chunkData: Buffer<{ countType: VarInt }>;
    blockEntities: Nbt[];
  }

  interface packet_multi_block_change {
    chunkX: i32;
    chunkZ: i32;
    records: { blockId: VarInt; horizontalPos: u8; y: u8 }[];
  }

  interface packet_named_entity_spawn {
    entityId: VarInt;
    playerUUID: UUID;
    x: f64;
    y: f64;
    z: f64;
    yaw: i8;
    pitch: i8;
    metadata: EntityMetadata;
  }

  interface packet_named_sound_effect {
    soundName: string;
    soundCategory: VarInt;
    x: i32;
    y: i32;
    z: i32;
    volume: f32;
    pitch: f32;
  }

  interface packet_open_sign_entity {
    location: Position;
  }

  interface packet_open_window {
    windowId: u8;
    inventoryType: string;
    windowTitle: string;
    slotCount: u8;
    entityId: { EntityHorse: i32; _: Void } /* .get(inventoryType) */;
  }

  interface packet_player_info {
    action: VarInt;
    data: {
      UUID: UUID;
      displayName: {
        0: Option<string>;
        3: Option<string>;
        _: Void;
      } /* .get(../action) */;
      gamemode: { 0: VarInt; 1: VarInt; _: Void } /* .get(../action) */;
      name: { 0: string; _: Void } /* .get(../action) */;
      ping: { 0: VarInt; 2: VarInt; _: Void } /* .get(../action) */;
      properties: {
        0: { name: string; signature: Option<string>; value: string }[];
        _: Void;
      } /* .get(../action) */;
    }[];
  }

  interface packet_playerlist_header {
    header: string;
    footer: string;
  }

  interface packet_position {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
    flags: i8;
    teleportId: VarInt;
  }

  interface packet_rel_entity_move {
    entityId: VarInt;
    dX: i16;
    dY: i16;
    dZ: i16;
    onGround: bool;
  }

  interface packet_remove_entity_effect {
    entityId: VarInt;
    effectId: i8;
  }

  interface packet_resource_pack_send {
    url: string;
    hash: string;
  }

  interface packet_respawn {
    dimension: i32;
    difficulty: u8;
    gamemode: u8;
    levelType: string;
  }

  interface packet_scoreboard_display_objective {
    position: i8;
    name: string;
  }

  interface packet_scoreboard_objective {
    name: string;
    action: i8;
    displayText: { 0: string; 2: string; _: Void } /* .get(action) */;
    type: { 0: string; 2: string; _: Void } /* .get(action) */;
  }

  interface packet_scoreboard_score {
    itemName: string;
    action: VarInt;
    scoreName: string;
    value: { 1: Void; _: VarInt } /* .get(action) */;
  }

  interface packet_select_advancement_tab {
    id: Option<string>;
  }

  interface packet_set_cooldown {
    itemID: VarInt;
    cooldownTicks: VarInt;
  }

  interface packet_set_passengers {
    entityId: VarInt;
    passengers: VarInt[];
  }

  interface packet_set_slot {
    windowId: i8;
    slot: i16;
    item: Slot;
  }

  interface packet_sound_effect {
    soundId: VarInt;
    soundCategory: VarInt;
    x: i32;
    y: i32;
    z: i32;
    volume: f32;
    pitch: f32;
  }

  interface packet_spawn_entity {
    entityId: VarInt;
    objectUUID: UUID;
    type: i8;
    x: f64;
    y: f64;
    z: f64;
    pitch: i8;
    yaw: i8;
    objectData: i32;
    velocityX: i16;
    velocityY: i16;
    velocityZ: i16;
  }

  interface packet_spawn_entity_experience_orb {
    entityId: VarInt;
    x: f64;
    y: f64;
    z: f64;
    count: i16;
  }

  interface packet_spawn_entity_living {
    entityId: VarInt;
    entityUUID: UUID;
    type: VarInt;
    x: f64;
    y: f64;
    z: f64;
    yaw: i8;
    pitch: i8;
    headPitch: i8;
    velocityX: i16;
    velocityY: i16;
    velocityZ: i16;
    metadata: EntityMetadata;
  }

  interface packet_spawn_entity_painting {
    entityId: VarInt;
    entityUUID: UUID;
    title: string;
    location: Position;
    direction: u8;
  }

  interface packet_spawn_entity_weather {
    entityId: VarInt;
    type: i8;
    x: f64;
    y: f64;
    z: f64;
  }

  interface packet_spawn_position {
    location: Position;
  }

  interface packet_statistics {
    entries: { name: string; value: VarInt }[];
  }

  interface packet_tab_complete {
    matches: string[];
  }

  interface packet_teams {
    team: string;
    mode: i8;
    name: { 0: string; 2: string; _: Void } /* .get(mode) */;
    prefix: { 0: string; 2: string; _: Void } /* .get(mode) */;
    suffix: { 0: string; 2: string; _: Void } /* .get(mode) */;
    friendlyFire: { 0: i8; 2: i8; _: Void } /* .get(mode) */;
    nameTagVisibility: { 0: string; 2: string; _: Void } /* .get(mode) */;
    collisionRule: { 0: string; 2: string; _: Void } /* .get(mode) */;
    color: { 0: i8; 2: i8; _: Void } /* .get(mode) */;
    players: {
      0: string[];
      3: string[];
      4: string[];
      _: Void;
    } /* .get(mode) */;
  }

  interface packet_tile_entity_data {
    location: Position;
    action: u8;
    nbtData: OptionalNbt;
  }

  interface packet_title {
    action: VarInt;
    text: { 0: string; 1: string; 2: string; _: Void } /* .get(action) */;
    fadeIn: { 3: i32; _: Void } /* .get(action) */;
    stay: { 3: i32; _: Void } /* .get(action) */;
    fadeOut: { 3: i32; _: Void } /* .get(action) */;
  }

  interface packet_transaction {
    windowId: i8;
    action: i16;
    accepted: bool;
  }

  interface packet_unload_chunk {
    chunkX: i32;
    chunkZ: i32;
  }

  interface packet_unlock_recipes {
    action: VarInt;
    craftingBookOpen: bool;
    filteringCraftable: bool;
    recipes1: VarInt[];
    recipes2: { 0: VarInt[]; _: Void } /* .get(action) */;
  }

  interface packet_update_health {
    health: f32;
    food: VarInt;
    foodSaturation: f32;
  }

  interface packet_update_time {
    age: i64;
    time: i64;
  }

  interface packet_vehicle_move {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
  }

  interface packet_window_items {
    windowId: u8;
    items: Slot[i16];
  }

  interface packet_world_border {
    action: VarInt;
    radius: { 0: f64; _: Void } /* .get(action) */;
    x: { 2: f64; 3: f64; _: Void } /* .get(action) */;
    z: { 2: f64; 3: f64; _: Void } /* .get(action) */;
    old_radius: { 1: f64; 3: f64; _: Void } /* .get(action) */;
    new_radius: { 1: f64; 3: f64; _: Void } /* .get(action) */;
    speed: { 1: VarLong; 3: VarLong; _: Void } /* .get(action) */;
    portalBoundary: { 3: VarInt; _: Void } /* .get(action) */;
    warning_time: { 3: VarInt; 4: VarInt; _: Void } /* .get(action) */;
    warning_blocks: { 3: VarInt; 5: VarInt; _: Void } /* .get(action) */;
  }

  interface packet_world_event {
    effectId: i32;
    location: Position;
    data: i32;
    global: bool;
  }

  interface packet_world_particles {
    particleId: i32;
    longDistance: bool;
    x: f32;
    y: f32;
    z: f32;
    offsetX: f32;
    offsetY: f32;
    offsetZ: f32;
    particleData: f32;
    particles: i32;
    data: {
      36: Arr<{ arraySize: 2; elementType: VarInt }>;
      37: Arr<{ arraySize: 1; elementType: VarInt }>;
      38: Arr<{ arraySize: 1; elementType: VarInt }>;
      _: Void;
    } /* .get(particleId) */;
  }
}
namespace play.to_server {
  interface packet {
    name: {
      0x00: "teleport_confirm";
      0x01: "tab_complete";
      0x02: "chat";
      0x03: "client_command";
      0x04: "settings";
      0x05: "transaction";
      0x06: "enchant_item";
      0x07: "window_click";
      0x08: "close_window";
      0x09: "custom_payload";
      0x0a: "use_entity";
      0x0b: "keep_alive";
      0x0c: "flying";
      0x0d: "position";
      0x0e: "position_look";
      0x0f: "look";
      0x10: "vehicle_move";
      0x11: "steer_boat";
      0x12: "craft_recipe_request";
      0x13: "abilities";
      0x14: "block_dig";
      0x15: "entity_action";
      0x16: "steer_vehicle";
      0x17: "crafting_book_data";
      0x18: "resource_pack_receive";
      0x19: "advancement_tab";
      0x1a: "held_item_slot";
      0x1b: "set_creative_slot";
      0x1c: "update_sign";
      0x1d: "arm_animation";
      0x1e: "spectate";
      0x1f: "block_place";
      0x20: "use_item";
      _: Void;
    }[] /* mapper */;
    params: {
      abilities: packet_abilities;
      advancement_tab: packet_advancement_tab;
      arm_animation: packet_arm_animation;
      block_dig: packet_block_dig;
      block_place: packet_block_place;
      chat: packet_chat;
      client_command: packet_client_command;
      close_window: packet_close_window;
      craft_recipe_request: packet_craft_recipe_request;
      crafting_book_data: packet_crafting_book_data;
      custom_payload: packet_custom_payload;
      enchant_item: packet_enchant_item;
      entity_action: packet_entity_action;
      flying: packet_flying;
      held_item_slot: packet_held_item_slot;
      keep_alive: packet_keep_alive;
      look: packet_look;
      position: packet_position;
      position_look: packet_position_look;
      resource_pack_receive: packet_resource_pack_receive;
      set_creative_slot: packet_set_creative_slot;
      settings: packet_settings;
      spectate: packet_spectate;
      steer_boat: packet_steer_boat;
      steer_vehicle: packet_steer_vehicle;
      tab_complete: packet_tab_complete;
      teleport_confirm: packet_teleport_confirm;
      transaction: packet_transaction;
      update_sign: packet_update_sign;
      use_entity: packet_use_entity;
      use_item: packet_use_item;
      vehicle_move: packet_vehicle_move;
      window_click: packet_window_click;
      _: void;
    } /* .get(name) */;
  }

  interface packet_abilities {
    flags: i8;
    flyingSpeed: f32;
    walkingSpeed: f32;
  }

  interface packet_advancement_tab {
    action: VarInt;
    tabId: { 0: string; 1: Void; _: void } /* .get(action) */;
  }

  interface packet_arm_animation {
    hand: VarInt;
  }

  interface packet_block_dig {
    status: VarInt;
    location: Position;
    face: i8;
  }

  interface packet_block_place {
    location: Position;
    direction: VarInt;
    hand: VarInt;
    cursorX: f32;
    cursorY: f32;
    cursorZ: f32;
  }

  interface packet_chat {
    message: string;
  }

  interface packet_client_command {
    actionId: VarInt;
  }

  interface packet_close_window {
    windowId: u8;
  }

  interface packet_craft_recipe_request {
    windowId: i8;
    recipe: VarInt;
    makeAll: bool;
  }

  interface packet_crafting_book_data {
    type: VarInt;
    _anon: {
      0: { displayedRecipe: i32 };
      1: { craftingBookOpen: bool; craftingFilter: bool };
      _: void;
    } /* .get(type) */;
  }

  interface packet_custom_payload {
    channel: string;
    data: RestBuffer;
  }

  interface packet_enchant_item {
    windowId: i8;
    enchantment: i8;
  }

  interface packet_entity_action {
    entityId: VarInt;
    actionId: VarInt;
    jumpBoost: VarInt;
  }

  interface packet_flying {
    onGround: bool;
  }

  interface packet_held_item_slot {
    slotId: i16;
  }

  interface packet_keep_alive {
    keepAliveId: i64;
  }

  interface packet_look {
    yaw: f32;
    pitch: f32;
    onGround: bool;
  }

  interface packet_position {
    x: f64;
    y: f64;
    z: f64;
    onGround: bool;
  }

  interface packet_position_look {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
    onGround: bool;
  }

  interface packet_resource_pack_receive {
    result: VarInt;
  }

  interface packet_set_creative_slot {
    slot: i16;
    item: Slot;
  }

  interface packet_settings {
    locale: string;
    viewDistance: i8;
    chatFlags: VarInt;
    chatColors: bool;
    skinParts: u8;
    mainHand: VarInt;
  }

  interface packet_spectate {
    target: UUID;
  }

  interface packet_steer_boat {
    leftPaddle: bool;
    rightPaddle: bool;
  }

  interface packet_steer_vehicle {
    sideways: f32;
    forward: f32;
    jump: u8;
  }

  interface packet_tab_complete {
    text: string;
    assumeCommand: bool;
    lookedAtBlock: Option<Position>;
  }

  interface packet_teleport_confirm {
    teleportId: VarInt;
  }

  interface packet_transaction {
    windowId: i8;
    action: i16;
    accepted: bool;
  }

  interface packet_update_sign {
    location: Position;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
  }

  interface packet_use_entity {
    target: VarInt;
    mouse: VarInt;
    x: { 2: f32; _: Void } /* .get(mouse) */;
    y: { 2: f32; _: Void } /* .get(mouse) */;
    z: { 2: f32; _: Void } /* .get(mouse) */;
    hand: { 0: VarInt; 2: VarInt; _: Void } /* .get(mouse) */;
  }

  interface packet_use_item {
    hand: VarInt;
  }

  interface packet_vehicle_move {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
  }

  interface packet_window_click {
    windowId: u8;
    slot: i16;
    mouseButton: i8;
    action: i16;
    mode: i8;
    item: Slot;
  }
}
