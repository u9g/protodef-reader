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
      0xfe: "legacy_server_list_ping";
      0x00: "set_protocol";
      _: Void;
    }[VarInt] /* mapper */;
    params: {
      legacy_server_list_ping: packet_legacy_server_list_ping;
      set_protocol: packet_set_protocol;
      _: void;
    } /* .get(name) */;
  }

  interface packet_set_protocol {
    protocolVersion: VarInt;
    serverHost: string;
    serverPort: u16;
    nextState: VarInt;
  }

  interface packet_legacy_server_list_ping {
    payload: u8;
  }
}
namespace status.to_client {
  interface packet {
    name: { 0x01: "ping"; 0x00: "server_info"; _: Void }[VarInt] /* mapper */;
    params: {
      server_info: packet_server_info;
      ping: packet_ping;
      _: void;
    } /* .get(name) */;
  }

  interface packet_server_info {
    response: string;
  }

  interface packet_ping {
    time: i64;
  }
}
namespace status.to_server {
  interface packet_ping_start {}

  interface packet_ping {
    time: i64;
  }

  interface packet {
    name: { 0x00: "ping_start"; 0x01: "ping"; _: Void }[VarInt] /* mapper */;
    params: {
      ping_start: packet_ping_start;
      ping: packet_ping;
      _: void;
    } /* .get(name) */;
  }
}
namespace login.to_client {
  interface packet_disconnect {
    reason: string;
  }

  interface packet {
    name: {
      0x01: "encryption_begin";
      0x00: "disconnect";
      0x02: "success";
      0x03: "compress";
      _: Void;
    }[VarInt] /* mapper */;
    params: {
      disconnect: packet_disconnect;
      compress: packet_compress;
      encryption_begin: packet_encryption_begin;
      success: packet_success;
      _: void;
    } /* .get(name) */;
  }

  interface packet_compress {
    threshold: VarInt;
  }

  interface packet_success {
    uuid: string;
    username: string;
  }

  interface packet_encryption_begin {
    serverId: string;
    publicKey: Buffer<{ countType: VarInt }>;
    verifyToken: Buffer<{ countType: VarInt }>;
  }
}
namespace login.to_server {
  interface packet_encryption_begin {
    sharedSecret: Buffer<{ countType: VarInt }>;
    verifyToken: Buffer<{ countType: VarInt }>;
  }

  interface packet {
    name: {
      0x01: "encryption_begin";
      0x00: "login_start";
      _: Void;
    }[VarInt] /* mapper */;
    params: {
      login_start: packet_login_start;
      encryption_begin: packet_encryption_begin;
      _: void;
    } /* .get(name) */;
  }

  interface packet_login_start {
    username: string;
  }
}
namespace play.to_client {
  interface packet_open_sign_entity {
    location: Position;
  }

  interface packet_update_time {
    age: i64;
    time: i64;
  }

  interface packet_teams {
    team: string;
    mode: i8;
    name: { 2: string; 0: string; _: Void } /* .get(mode) */;
    prefix: { 2: string; 0: string; _: Void } /* .get(mode) */;
    suffix: { 0: string; 2: string; _: Void } /* .get(mode) */;
    friendlyFire: { 0: i8; 2: i8; _: Void } /* .get(mode) */;
    nameTagVisibility: { 2: string; 0: string; _: Void } /* .get(mode) */;
    collisionRule: { 2: string; 0: string; _: Void } /* .get(mode) */;
    color: { 2: i8; 0: i8; _: Void } /* .get(mode) */;
    players: {
      3: string[VarInt];
      4: string[VarInt];
      0: string[VarInt];
      _: Void;
    } /* .get(mode) */;
  }

  interface packet_custom_payload {
    channel: string;
    data: RestBuffer;
  }

  interface packet_game_state_change {
    reason: u8;
    gameMode: f32;
  }

  interface packet_player_info {
    action: VarInt;
    data: {
      UUID: UUID;
      name: { 0: string; _: Void } /* .get(../action) */;
      properties: {
        0: { name: string; value: string; signature: Option<string> }[VarInt];
        _: Void;
      } /* .get(../action) */;
      gamemode: { 0: VarInt; 1: VarInt; _: Void } /* .get(../action) */;
      ping: { 0: VarInt; 2: VarInt; _: Void } /* .get(../action) */;
      displayName: {
        0: Option<string>;
        3: Option<string>;
        _: Void;
      } /* .get(../action) */;
    }[VarInt];
  }

  interface packet_spawn_entity_experience_orb {
    entityId: VarInt;
    x: f64;
    y: f64;
    z: f64;
    count: i16;
  }

  interface packet_entity_head_rotation {
    entityId: VarInt;
    headYaw: i8;
  }

  interface packet_tab_complete {
    matches: string[VarInt];
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

  interface packet_entity_destroy {
    entityIds: VarInt[VarInt];
  }

  interface packet_multi_block_change {
    chunkX: i32;
    chunkZ: i32;
    records: { horizontalPos: u8; y: u8; blockId: VarInt }[VarInt];
  }

  interface packet_attach_entity {
    entityId: i32;
    vehicleId: i32;
  }

  interface packet_scoreboard_objective {
    name: string;
    action: i8;
    displayText: { 0: string; 2: string; _: Void } /* .get(action) */;
    type: { 2: string; 0: string; _: Void } /* .get(action) */;
  }

  interface packet_transaction {
    windowId: i8;
    action: i16;
    accepted: bool;
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

  interface packet_animation {
    entityId: VarInt;
    animation: u8;
  }

  interface packet {
    name: {
      0x02: "spawn_entity_weather";
      0x1e: "game_state_change";
      0x48: "title";
      0x06: "animation";
      0x4c: "entity_teleport";
      0x42: "scoreboard_objective";
      0x20: "map_chunk";
      0x0e: "tab_complete";
      0x44: "teams";
      0x1d: "unload_chunk";
      0x15: "craft_progress_bar";
      0x2b: "craft_recipe_response";
      0x32: "entity_destroy";
      0x34: "resource_pack_send";
      0x27: "entity_move_look";
      0x39: "camera";
      0x41: "update_health";
      0x3b: "scoreboard_display_objective";
      0x31: "unlock_recipes";
      0x38: "world_border";
      0x22: "world_particles";
      0x25: "entity";
      0x11: "transaction";
      0x3c: "entity_metadata";
      0x0a: "block_action";
      0x3e: "entity_velocity";
      0x46: "spawn_position";
      0x4f: "entity_effect";
      0x03: "spawn_entity_living";
      0x16: "set_slot";
      0x04: "spawn_entity_painting";
      0x10: "multi_block_change";
      0x3f: "entity_equipment";
      0x09: "tile_entity_data";
      0x4e: "entity_update_attributes";
      0x24: "map";
      0x08: "block_break_animation";
      0x17: "set_cooldown";
      0x30: "bed";
      0x1f: "keep_alive";
      0x4d: "advancements";
      0x0f: "chat";
      0x2f: "position";
      0x07: "statistics";
      0x23: "login";
      0x1b: "entity_status";
      0x19: "named_sound_effect";
      0x2d: "combat_event";
      0x4a: "playerlist_header";
      0x43: "set_passengers";
      0x28: "entity_look";
      0x0d: "difficulty";
      0x01: "spawn_entity_experience_orb";
      0x45: "scoreboard_score";
      0x29: "vehicle_move";
      0x35: "respawn";
      0x3a: "held_item_slot";
      0x1a: "kick_disconnect";
      0x37: "select_advancement_tab";
      0x40: "experience";
      0x2c: "abilities";
      0x12: "close_window";
      0x2a: "open_sign_entity";
      0x33: "remove_entity_effect";
      0x0b: "block_change";
      0x14: "window_items";
      0x0c: "boss_bar";
      0x13: "open_window";
      0x18: "custom_payload";
      0x4b: "collect";
      0x36: "entity_head_rotation";
      0x21: "world_event";
      0x3d: "attach_entity";
      0x26: "rel_entity_move";
      0x1c: "explosion";
      0x49: "sound_effect";
      0x47: "update_time";
      0x05: "named_entity_spawn";
      0x2e: "player_info";
      0x00: "spawn_entity";
      _: Void;
    }[VarInt] /* mapper */;
    params: {
      vehicle_move: packet_vehicle_move;
      entity_velocity: packet_entity_velocity;
      camera: packet_camera;
      spawn_entity: packet_spawn_entity;
      animation: packet_animation;
      collect: packet_collect;
      remove_entity_effect: packet_remove_entity_effect;
      experience: packet_experience;
      update_time: packet_update_time;
      close_window: packet_close_window;
      custom_payload: packet_custom_payload;
      block_action: packet_block_action;
      explosion: packet_explosion;
      entity_status: packet_entity_status;
      world_event: packet_world_event;
      abilities: packet_abilities;
      entity_update_attributes: packet_entity_update_attributes;
      player_info: packet_player_info;
      world_particles: packet_world_particles;
      sound_effect: packet_sound_effect;
      set_slot: packet_set_slot;
      scoreboard_objective: packet_scoreboard_objective;
      named_entity_spawn: packet_named_entity_spawn;
      window_items: packet_window_items;
      map: packet_map;
      tile_entity_data: packet_tile_entity_data;
      difficulty: packet_difficulty;
      spawn_entity_painting: packet_spawn_entity_painting;
      statistics: packet_statistics;
      unload_chunk: packet_unload_chunk;
      craft_recipe_response: packet_craft_recipe_response;
      chat: packet_chat;
      scoreboard_score: packet_scoreboard_score;
      open_sign_entity: packet_open_sign_entity;
      block_change: packet_block_change;
      spawn_position: packet_spawn_position;
      craft_progress_bar: packet_craft_progress_bar;
      spawn_entity_weather: packet_spawn_entity_weather;
      scoreboard_display_objective: packet_scoreboard_display_objective;
      entity_look: packet_entity_look;
      map_chunk: packet_map_chunk;
      login: packet_login;
      held_item_slot: packet_held_item_slot;
      spawn_entity_living: packet_spawn_entity_living;
      boss_bar: packet_boss_bar;
      update_health: packet_update_health;
      block_break_animation: packet_block_break_animation;
      open_window: packet_open_window;
      named_sound_effect: packet_named_sound_effect;
      world_border: packet_world_border;
      set_cooldown: packet_set_cooldown;
      set_passengers: packet_set_passengers;
      title: packet_title;
      entity_teleport: packet_entity_teleport;
      select_advancement_tab: packet_select_advancement_tab;
      keep_alive: packet_keep_alive;
      transaction: packet_transaction;
      unlock_recipes: packet_unlock_recipes;
      playerlist_header: packet_playerlist_header;
      respawn: packet_respawn;
      combat_event: packet_combat_event;
      entity_equipment: packet_entity_equipment;
      entity_head_rotation: packet_entity_head_rotation;
      kick_disconnect: packet_kick_disconnect;
      rel_entity_move: packet_rel_entity_move;
      entity_metadata: packet_entity_metadata;
      spawn_entity_experience_orb: packet_spawn_entity_experience_orb;
      entity: packet_entity;
      bed: packet_bed;
      teams: packet_teams;
      position: packet_position;
      multi_block_change: packet_multi_block_change;
      game_state_change: packet_game_state_change;
      entity_effect: packet_entity_effect;
      entity_destroy: packet_entity_destroy;
      resource_pack_send: packet_resource_pack_send;
      attach_entity: packet_attach_entity;
      tab_complete: packet_tab_complete;
      entity_move_look: packet_entity_move_look;
      advancements: packet_advancements;
      _: void;
    } /* .get(name) */;
  }

  interface packet_boss_bar {
    entityUUID: UUID;
    action: VarInt;
    title: { 3: string; 0: string; _: Void } /* .get(action) */;
    health: { 0: f32; 2: f32; _: Void } /* .get(action) */;
    color: { 0: VarInt; 4: VarInt; _: Void } /* .get(action) */;
    dividers: { 0: VarInt; 4: VarInt; _: Void } /* .get(action) */;
    flags: { 0: u8; 5: u8; _: Void } /* .get(action) */;
  }

  interface packet_window_items {
    windowId: u8;
    items: Slot[i16];
  }

  interface packet_vehicle_move {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
  }

  interface packet_unlock_recipes {
    action: VarInt;
    craftingBookOpen: bool;
    filteringCraftable: bool;
    recipes1: VarInt[VarInt];
    recipes2: { 0: VarInt[VarInt]; _: Void } /* .get(action) */;
  }

  interface packet_world_border {
    action: VarInt;
    radius: { 0: f64; _: Void } /* .get(action) */;
    x: { 2: f64; 3: f64; _: Void } /* .get(action) */;
    z: { 3: f64; 2: f64; _: Void } /* .get(action) */;
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

  interface packet_block_action {
    location: Position;
    byte1: u8;
    byte2: u8;
    blockId: VarInt;
  }

  interface packet_difficulty {
    difficulty: u8;
  }

  interface packet_set_slot {
    windowId: i8;
    slot: i16;
    item: Slot;
  }

  interface packet_scoreboard_score {
    itemName: string;
    action: VarInt;
    scoreName: string;
    value: { 1: Void; _: VarInt } /* .get(action) */;
  }

  interface packet_resource_pack_send {
    url: string;
    hash: string;
  }

  interface packet_experience {
    experienceBar: f32;
    level: VarInt;
    totalExperience: VarInt;
  }

  interface packet_open_window {
    windowId: u8;
    inventoryType: string;
    windowTitle: string;
    slotCount: u8;
    entityId: { EntityHorse: i32; _: Void } /* .get(inventoryType) */;
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

  interface packet_title {
    action: VarInt;
    text: { 2: string; 0: string; 1: string; _: Void } /* .get(action) */;
    fadeIn: { 3: i32; _: Void } /* .get(action) */;
    stay: { 3: i32; _: Void } /* .get(action) */;
    fadeOut: { 3: i32; _: Void } /* .get(action) */;
  }

  interface packet_bed {
    entityId: VarInt;
    location: Position;
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

  interface packet_named_sound_effect {
    soundName: string;
    soundCategory: VarInt;
    x: i32;
    y: i32;
    z: i32;
    volume: f32;
    pitch: f32;
  }

  interface packet_update_health {
    health: f32;
    food: VarInt;
    foodSaturation: f32;
  }

  interface packet_entity {
    entityId: VarInt;
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

  interface packet_chat {
    message: string;
    position: i8;
  }

  interface packet_map_chunk {
    x: i32;
    z: i32;
    groundUp: bool;
    bitMap: VarInt;
    chunkData: Buffer<{ countType: VarInt }>;
    blockEntities: Nbt[VarInt];
  }

  interface packet_held_item_slot {
    slot: i8;
  }

  interface packet_tile_entity_data {
    location: Position;
    action: u8;
    nbtData: OptionalNbt;
  }

  interface packet_map {
    itemDamage: VarInt;
    scale: i8;
    trackingPosition: bool;
    icons: { directionAndType: i8; x: i8; z: i8 }[VarInt];
    columns: i8;
    rows: { 0: Void; _: i8 } /* .get(columns) */;
    x: { 0: Void; _: i8 } /* .get(columns) */;
    y: { 0: Void; _: i8 } /* .get(columns) */;
    data: { 0: Void; _: Buffer<{ countType: VarInt }> } /* .get(columns) */;
  }

  interface packet_block_change {
    location: Position;
    type: VarInt;
  }

  interface packet_respawn {
    dimension: i32;
    difficulty: u8;
    gamemode: u8;
    levelType: string;
  }

  interface packet_entity_metadata {
    entityId: VarInt;
    metadata: EntityMetadata;
  }

  interface packet_entity_update_attributes {
    entityId: VarInt;
    properties: {
      key: string;
      value: f64;
      modifiers: { uuid: UUID; amount: f64; operation: i8 }[VarInt];
    }[i32];
  }

  interface packet_advancements {
    reset: bool;
    advancementMapping: Record_<
      string,
      {
        parentId: Option<string>;
        displayData: Option<{
          title: string;
          description: string;
          icon: Slot;
          frameType: VarInt;
          flags: BitField<{
            fields: [
              { name: "_unused"; size: 29; signed: false },
              { name: "hidden"; size: 1; signed: false },
              { name: "show_toast"; size: 1; signed: false },
              { name: "has_background_texture"; size: 1; signed: false }
            ];
          }>;
          backgroundTexture: {
            1: string;
            _: Void;
          } /* .get(flags/has_background_texture) */;
          xCord: f32;
          yCord: f32;
        }>;
        criteria: Record_<string, Void, VarInt>;
        requirements: string[VarInt][VarInt];
      },
      VarInt
    >;
    identifiers: string[VarInt];
    progressMapping: Record_<
      string,
      { criterionIdentifier: string; criterionProgress: Option<i64> }[VarInt],
      VarInt
    >;
  }

  interface packet_entity_equipment {
    entityId: VarInt;
    slot: VarInt;
    item: Slot;
  }

  interface packet_spawn_position {
    location: Position;
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

  interface packet_unload_chunk {
    chunkX: i32;
    chunkZ: i32;
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

  interface packet_keep_alive {
    keepAliveId: i64;
  }

  interface packet_set_passengers {
    entityId: VarInt;
    passengers: VarInt[VarInt];
  }

  interface packet_kick_disconnect {
    reason: string;
  }

  interface packet_select_advancement_tab {
    id: Option<string>;
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

  interface packet_craft_progress_bar {
    windowId: u8;
    property: i16;
    value: i16;
  }

  interface packet_spawn_entity_painting {
    entityId: VarInt;
    entityUUID: UUID;
    title: string;
    location: Position;
    direction: u8;
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

  interface packet_rel_entity_move {
    entityId: VarInt;
    dX: i16;
    dY: i16;
    dZ: i16;
    onGround: bool;
  }

  interface packet_camera {
    cameraId: VarInt;
  }

  interface packet_scoreboard_display_objective {
    position: i8;
    name: string;
  }

  interface packet_craft_recipe_response {
    windowId: i8;
    recipe: VarInt;
  }

  interface packet_collect {
    collectedEntityId: VarInt;
    collectorEntityId: VarInt;
    pickupItemCount: VarInt;
  }

  interface packet_statistics {
    entries: { name: string; value: VarInt }[VarInt];
  }

  interface packet_close_window {
    windowId: u8;
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

  interface packet_entity_status {
    entityId: i32;
    entityStatus: i8;
  }

  interface packet_combat_event {
    event: VarInt;
    duration: { 1: VarInt; _: Void } /* .get(event) */;
    playerId: { 2: VarInt; _: Void } /* .get(event) */;
    entityId: { 2: i32; 1: i32; _: Void } /* .get(event) */;
    message: { 2: string; _: Void } /* .get(event) */;
  }

  interface packet_abilities {
    flags: i8;
    flyingSpeed: f32;
    walkingSpeed: f32;
  }

  interface packet_entity_velocity {
    entityId: VarInt;
    velocityX: i16;
    velocityY: i16;
    velocityZ: i16;
  }

  interface packet_block_break_animation {
    entityId: VarInt;
    location: Position;
    destroyStage: i8;
  }

  interface packet_playerlist_header {
    header: string;
    footer: string;
  }

  interface packet_entity_look {
    entityId: VarInt;
    yaw: i8;
    pitch: i8;
    onGround: bool;
  }

  interface packet_spawn_entity_weather {
    entityId: VarInt;
    type: i8;
    x: f64;
    y: f64;
    z: f64;
  }

  interface packet_set_cooldown {
    itemID: VarInt;
    cooldownTicks: VarInt;
  }

  interface packet_remove_entity_effect {
    entityId: VarInt;
    effectId: i8;
  }

  interface packet_entity_effect {
    entityId: VarInt;
    effectId: i8;
    amplifier: i8;
    duration: VarInt;
    hideParticles: i8;
  }
}
namespace play.to_server {
  interface packet_block_dig {
    status: VarInt;
    location: Position;
    face: i8;
  }

  interface packet_window_click {
    windowId: u8;
    slot: i16;
    mouseButton: i8;
    action: i16;
    mode: i8;
    item: Slot;
  }

  interface packet_enchant_item {
    windowId: i8;
    enchantment: i8;
  }

  interface packet_craft_recipe_request {
    windowId: i8;
    recipe: VarInt;
    makeAll: bool;
  }

  interface packet_held_item_slot {
    slotId: i16;
  }

  interface packet_look {
    yaw: f32;
    pitch: f32;
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

  interface packet_block_place {
    location: Position;
    direction: VarInt;
    hand: VarInt;
    cursorX: f32;
    cursorY: f32;
    cursorZ: f32;
  }

  interface packet_close_window {
    windowId: u8;
  }

  interface packet_abilities {
    flags: i8;
    flyingSpeed: f32;
    walkingSpeed: f32;
  }

  interface packet_vehicle_move {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
  }

  interface packet_steer_boat {
    leftPaddle: bool;
    rightPaddle: bool;
  }

  interface packet_position {
    x: f64;
    y: f64;
    z: f64;
    onGround: bool;
  }

  interface packet_tab_complete {
    text: string;
    assumeCommand: bool;
    lookedAtBlock: Option<Position>;
  }

  interface packet_arm_animation {
    hand: VarInt;
  }

  interface packet_use_entity {
    target: VarInt;
    mouse: VarInt;
    x: { 2: f32; _: Void } /* .get(mouse) */;
    y: { 2: f32; _: Void } /* .get(mouse) */;
    z: { 2: f32; _: Void } /* .get(mouse) */;
    hand: { 2: VarInt; 0: VarInt; _: Void } /* .get(mouse) */;
  }

  interface packet_flying {
    onGround: bool;
  }

  interface packet_chat {
    message: string;
  }

  interface packet {
    name: {
      0x19: "advancement_tab";
      0x1c: "update_sign";
      0x16: "steer_vehicle";
      0x1f: "block_place";
      0x1b: "set_creative_slot";
      0x1a: "held_item_slot";
      0x1e: "spectate";
      0x1d: "arm_animation";
      0x18: "resource_pack_receive";
      0x03: "client_command";
      0x13: "abilities";
      0x04: "settings";
      0x01: "tab_complete";
      0x08: "close_window";
      0x12: "craft_recipe_request";
      0x20: "use_item";
      0x0b: "keep_alive";
      0x07: "window_click";
      0x0e: "position_look";
      0x11: "steer_boat";
      0x06: "enchant_item";
      0x0a: "use_entity";
      0x17: "crafting_book_data";
      0x0f: "look";
      0x09: "custom_payload";
      0x0c: "flying";
      0x14: "block_dig";
      0x00: "teleport_confirm";
      0x10: "vehicle_move";
      0x02: "chat";
      0x05: "transaction";
      0x0d: "position";
      0x15: "entity_action";
      _: Void;
    }[VarInt] /* mapper */;
    params: {
      spectate: packet_spectate;
      settings: packet_settings;
      look: packet_look;
      resource_pack_receive: packet_resource_pack_receive;
      chat: packet_chat;
      close_window: packet_close_window;
      keep_alive: packet_keep_alive;
      steer_vehicle: packet_steer_vehicle;
      crafting_book_data: packet_crafting_book_data;
      abilities: packet_abilities;
      transaction: packet_transaction;
      arm_animation: packet_arm_animation;
      block_place: packet_block_place;
      tab_complete: packet_tab_complete;
      teleport_confirm: packet_teleport_confirm;
      custom_payload: packet_custom_payload;
      block_dig: packet_block_dig;
      advancement_tab: packet_advancement_tab;
      held_item_slot: packet_held_item_slot;
      use_item: packet_use_item;
      craft_recipe_request: packet_craft_recipe_request;
      entity_action: packet_entity_action;
      vehicle_move: packet_vehicle_move;
      position: packet_position;
      set_creative_slot: packet_set_creative_slot;
      update_sign: packet_update_sign;
      client_command: packet_client_command;
      flying: packet_flying;
      enchant_item: packet_enchant_item;
      use_entity: packet_use_entity;
      window_click: packet_window_click;
      steer_boat: packet_steer_boat;
      position_look: packet_position_look;
      _: void;
    } /* .get(name) */;
  }

  interface packet_resource_pack_receive {
    result: VarInt;
  }

  interface packet_advancement_tab {
    action: VarInt;
    tabId: { 0: string; 1: Void; _: void } /* .get(action) */;
  }

  interface packet_client_command {
    actionId: VarInt;
  }

  interface packet_update_sign {
    location: Position;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
  }

  interface packet_set_creative_slot {
    slot: i16;
    item: Slot;
  }

  interface packet_keep_alive {
    keepAliveId: i64;
  }

  interface packet_crafting_book_data {
    type: VarInt;
    _anon: {
      1: { craftingBookOpen: bool; craftingFilter: bool };
      0: { displayedRecipe: i32 };
      _: void;
    } /* .get(type) */;
  }

  interface packet_steer_vehicle {
    sideways: f32;
    forward: f32;
    jump: u8;
  }

  interface packet_spectate {
    target: UUID;
  }

  interface packet_use_item {
    hand: VarInt;
  }

  interface packet_teleport_confirm {
    teleportId: VarInt;
  }

  interface packet_custom_payload {
    channel: string;
    data: RestBuffer;
  }

  interface packet_settings {
    locale: string;
    viewDistance: i8;
    chatFlags: VarInt;
    chatColors: bool;
    skinParts: u8;
    mainHand: VarInt;
  }

  interface packet_entity_action {
    entityId: VarInt;
    actionId: VarInt;
    jumpBoost: VarInt;
  }

  interface packet_transaction {
    windowId: i8;
    action: i16;
    accepted: bool;
  }
}
