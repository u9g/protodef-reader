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
  interface packet_set_protocol {
    protocolVersion: VarInt;
    serverHost: string;
    serverPort: u16;
    nextState: VarInt;
  }

  interface packet {
    name: this extends "0x00"
      ? "set_protocol" /* mapper of varint */
      : this extends "0xfe"
      ? "legacy_server_list_ping" /* mapper of varint */
      : Void;
    params: {
      set_protocol: packet_set_protocol;
      legacy_server_list_ping: packet_legacy_server_list_ping;
      _: void;
    } /* .get(name) */;
  }

  interface packet_legacy_server_list_ping {
    payload: u8;
  }
}
namespace status.to_client {
  interface packet_ping {
    time: i64;
  }

  interface packet_server_info {
    response: string;
  }

  interface packet {
    name: this extends "0x00"
      ? "server_info" /* mapper of varint */
      : this extends "0x01"
      ? "ping" /* mapper of varint */
      : Void;
    params: {
      ping: packet_ping;
      server_info: packet_server_info;
      _: void;
    } /* .get(name) */;
  }
}
namespace status.to_server {
  interface packet_ping {
    time: i64;
  }

  interface packet_ping_start {}

  interface packet {
    name: this extends "0x01"
      ? "ping" /* mapper of varint */
      : this extends "0x00"
      ? "ping_start" /* mapper of varint */
      : Void;
    params: {
      ping: packet_ping;
      ping_start: packet_ping_start;
      _: void;
    } /* .get(name) */;
  }
}
namespace login.to_client {
  interface packet_disconnect {
    reason: string;
  }

  interface packet_compress {
    threshold: VarInt;
  }

  interface packet_success {
    uuid: string;
    username: string;
  }

  interface packet {
    name: this extends "0x00"
      ? "disconnect" /* mapper of varint */
      : this extends "0x01"
      ? "encryption_begin" /* mapper of varint */
      : this extends "0x02"
      ? "success" /* mapper of varint */
      : this extends "0x03"
      ? "compress" /* mapper of varint */
      : Void;
    params: {
      disconnect: packet_disconnect;
      encryption_begin: packet_encryption_begin;
      compress: packet_compress;
      success: packet_success;
      _: void;
    } /* .get(name) */;
  }

  interface packet_encryption_begin {
    serverId: string;
    publicKey: Buffer<{ countType: VarInt }>;
    verifyToken: Buffer<{ countType: VarInt }>;
  }
}
namespace login.to_server {
  interface packet_login_start {
    username: string;
  }

  interface packet_encryption_begin {
    sharedSecret: Buffer<{ countType: VarInt }>;
    verifyToken: Buffer<{ countType: VarInt }>;
  }

  interface packet {
    name: this extends "0x01"
      ? "encryption_begin" /* mapper of varint */
      : this extends "0x00"
      ? "login_start" /* mapper of varint */
      : Void;
    params: {
      encryption_begin: packet_encryption_begin;
      login_start: packet_login_start;
      _: void;
    } /* .get(name) */;
  }
}
namespace play.to_client {
  interface packet_login {
    entityId: i32;
    gameMode: u8;
    dimension: i32;
    difficulty: u8;
    maxPlayers: u8;
    levelType: string;
    reducedDebugInfo: bool;
  }

  interface packet_transaction {
    windowId: i8;
    action: i16;
    accepted: bool;
  }

  interface packet_unlock_recipes {
    action: VarInt;
    craftingBookOpen: bool;
    filteringCraftable: bool;
    recipes1: VarInt[];
    recipes2: { 0: VarInt[]; _: Void } /* .get(action) */;
  }

  interface packet_resource_pack_send {
    url: string;
    hash: string;
  }

  interface packet_spawn_entity_weather {
    entityId: VarInt;
    type: i8;
    x: f64;
    y: f64;
    z: f64;
  }

  interface packet_spawn_entity_experience_orb {
    entityId: VarInt;
    x: f64;
    y: f64;
    z: f64;
    count: i16;
  }

  interface packet_remove_entity_effect {
    entityId: VarInt;
    effectId: i8;
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

  interface packet_game_state_change {
    reason: u8;
    gameMode: f32;
  }

  interface packet_teams {
    team: string;
    mode: i8;
    name: { 0: string; 2: string; _: Void } /* .get(mode) */;
    prefix: { 0: string; 2: string; _: Void } /* .get(mode) */;
    suffix: { 2: string; 0: string; _: Void } /* .get(mode) */;
    friendlyFire: { 0: i8; 2: i8; _: Void } /* .get(mode) */;
    nameTagVisibility: { 0: string; 2: string; _: Void } /* .get(mode) */;
    collisionRule: { 2: string; 0: string; _: Void } /* .get(mode) */;
    color: { 2: i8; 0: i8; _: Void } /* .get(mode) */;
    players: {
      3: string[];
      4: string[];
      0: string[];
      _: Void;
    } /* .get(mode) */;
  }

  interface packet_set_passengers {
    entityId: VarInt;
    passengers: VarInt[];
  }

  interface packet_select_advancement_tab {
    id: Option<string>;
  }

  interface packet_entity_equipment {
    entityId: VarInt;
    slot: VarInt;
    item: Slot;
  }

  interface packet_held_item_slot {
    slot: i8;
  }

  interface packet_boss_bar {
    entityUUID: UUID;
    action: VarInt;
    title: { 0: string; 3: string; _: Void } /* .get(action) */;
    health: { 0: f32; 2: f32; _: Void } /* .get(action) */;
    color: { 0: VarInt; 4: VarInt; _: Void } /* .get(action) */;
    dividers: { 0: VarInt; 4: VarInt; _: Void } /* .get(action) */;
    flags: { 5: u8; 0: u8; _: Void } /* .get(action) */;
  }

  interface packet_camera {
    cameraId: VarInt;
  }

  interface packet_attach_entity {
    entityId: i32;
    vehicleId: i32;
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

  interface packet_kick_disconnect {
    reason: string;
  }

  interface packet_craft_progress_bar {
    windowId: u8;
    property: i16;
    value: i16;
  }

  interface packet_animation {
    entityId: VarInt;
    animation: u8;
  }

  interface packet_entity_velocity {
    entityId: VarInt;
    velocityX: i16;
    velocityY: i16;
    velocityZ: i16;
  }

  interface packet_chat {
    message: string;
    position: i8;
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
      38: Arr<{ arraySize: 1; elementType: VarInt }>;
      37: Arr<{ arraySize: 1; elementType: VarInt }>;
      36: Arr<{ arraySize: 2; elementType: VarInt }>;
      _: Void;
    } /* .get(particleId) */;
  }

  interface packet_difficulty {
    difficulty: u8;
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

  interface packet_scoreboard_score {
    itemName: string;
    action: VarInt;
    scoreName: string;
    value: { 1: Void; _: VarInt } /* .get(action) */;
  }

  interface packet_entity_effect {
    entityId: VarInt;
    effectId: i8;
    amplifier: i8;
    duration: VarInt;
    hideParticles: i8;
  }

  interface packet_experience {
    experienceBar: f32;
    level: VarInt;
    totalExperience: VarInt;
  }

  interface packet_close_window {
    windowId: u8;
  }

  interface packet_tab_complete {
    matches: string[];
  }

  interface packet_open_sign_entity {
    location: Position;
  }

  interface packet_scoreboard_display_objective {
    position: i8;
    name: string;
  }

  interface packet_rel_entity_move {
    entityId: VarInt;
    dX: i16;
    dY: i16;
    dZ: i16;
    onGround: bool;
  }

  interface packet_spawn_entity_painting {
    entityId: VarInt;
    entityUUID: UUID;
    title: string;
    location: Position;
    direction: u8;
  }

  interface packet_update_time {
    age: i64;
    time: i64;
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

  interface packet_open_window {
    windowId: u8;
    inventoryType: string;
    windowTitle: string;
    slotCount: u8;
    entityId: { EntityHorse: i32; _: Void } /* .get(inventoryType) */;
  }

  interface packet_block_change {
    location: Position;
    type: VarInt;
  }

  interface packet_statistics {
    entries: { name: string; value: VarInt }[];
  }

  interface packet_custom_payload {
    channel: string;
    data: RestBuffer;
  }

  interface packet_block_break_animation {
    entityId: VarInt;
    location: Position;
    destroyStage: i8;
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

  interface packet_entity_move_look {
    entityId: VarInt;
    dX: i16;
    dY: i16;
    dZ: i16;
    yaw: i8;
    pitch: i8;
    onGround: bool;
  }

  interface packet_tile_entity_data {
    location: Position;
    action: u8;
    nbtData: OptionalNbt;
  }

  interface packet_entity_look {
    entityId: VarInt;
    yaw: i8;
    pitch: i8;
    onGround: bool;
  }

  interface packet_world_border {
    action: VarInt;
    radius: { 0: f64; _: Void } /* .get(action) */;
    x: { 3: f64; 2: f64; _: Void } /* .get(action) */;
    z: { 2: f64; 3: f64; _: Void } /* .get(action) */;
    old_radius: { 1: f64; 3: f64; _: Void } /* .get(action) */;
    new_radius: { 1: f64; 3: f64; _: Void } /* .get(action) */;
    speed: { 1: VarLong; 3: VarLong; _: Void } /* .get(action) */;
    portalBoundary: { 3: VarInt; _: Void } /* .get(action) */;
    warning_time: { 3: VarInt; 4: VarInt; _: Void } /* .get(action) */;
    warning_blocks: { 5: VarInt; 3: VarInt; _: Void } /* .get(action) */;
  }

  interface packet_entity_status {
    entityId: i32;
    entityStatus: i8;
  }

  interface packet_entity_head_rotation {
    entityId: VarInt;
    headYaw: i8;
  }

  interface packet_update_health {
    health: f32;
    food: VarInt;
    foodSaturation: f32;
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

  interface packet_entity {
    entityId: VarInt;
  }

  interface packet_set_slot {
    windowId: i8;
    slot: i16;
    item: Slot;
  }

  interface packet_scoreboard_objective {
    name: string;
    action: i8;
    displayText: { 0: string; 2: string; _: Void } /* .get(action) */;
    type: { 0: string; 2: string; _: Void } /* .get(action) */;
  }

  interface packet_set_cooldown {
    itemID: VarInt;
    cooldownTicks: VarInt;
  }

  interface packet_block_action {
    location: Position;
    byte1: u8;
    byte2: u8;
    blockId: VarInt;
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

  interface packet_abilities {
    flags: i8;
    flyingSpeed: f32;
    walkingSpeed: f32;
  }

  interface packet_entity_metadata {
    entityId: VarInt;
    metadata: EntityMetadata;
  }

  interface packet_collect {
    collectedEntityId: VarInt;
    collectorEntityId: VarInt;
    pickupItemCount: VarInt;
  }

  interface packet {
    name: this extends "0x37"
      ? "select_advancement_tab" /* mapper of varint */
      : this extends "0x0e"
      ? "tab_complete" /* mapper of varint */
      : this extends "0x34"
      ? "resource_pack_send" /* mapper of varint */
      : this extends "0x06"
      ? "animation" /* mapper of varint */
      : this extends "0x09"
      ? "tile_entity_data" /* mapper of varint */
      : this extends "0x0f"
      ? "chat" /* mapper of varint */
      : this extends "0x26"
      ? "rel_entity_move" /* mapper of varint */
      : this extends "0x39"
      ? "camera" /* mapper of varint */
      : this extends "0x03"
      ? "spawn_entity_living" /* mapper of varint */
      : this extends "0x49"
      ? "sound_effect" /* mapper of varint */
      : this extends "0x14"
      ? "window_items" /* mapper of varint */
      : this extends "0x1f"
      ? "keep_alive" /* mapper of varint */
      : this extends "0x05"
      ? "named_entity_spawn" /* mapper of varint */
      : this extends "0x0c"
      ? "boss_bar" /* mapper of varint */
      : this extends "0x24"
      ? "map" /* mapper of varint */
      : this extends "0x1a"
      ? "kick_disconnect" /* mapper of varint */
      : this extends "0x15"
      ? "craft_progress_bar" /* mapper of varint */
      : this extends "0x32"
      ? "entity_destroy" /* mapper of varint */
      : this extends "0x41"
      ? "update_health" /* mapper of varint */
      : this extends "0x27"
      ? "entity_move_look" /* mapper of varint */
      : this extends "0x44"
      ? "teams" /* mapper of varint */
      : this extends "0x07"
      ? "statistics" /* mapper of varint */
      : this extends "0x4a"
      ? "playerlist_header" /* mapper of varint */
      : this extends "0x28"
      ? "entity_look" /* mapper of varint */
      : this extends "0x2c"
      ? "abilities" /* mapper of varint */
      : this extends "0x4e"
      ? "entity_update_attributes" /* mapper of varint */
      : this extends "0x1e"
      ? "game_state_change" /* mapper of varint */
      : this extends "0x3a"
      ? "held_item_slot" /* mapper of varint */
      : this extends "0x00"
      ? "spawn_entity" /* mapper of varint */
      : this extends "0x1d"
      ? "unload_chunk" /* mapper of varint */
      : this extends "0x31"
      ? "unlock_recipes" /* mapper of varint */
      : this extends "0x04"
      ? "spawn_entity_painting" /* mapper of varint */
      : this extends "0x42"
      ? "scoreboard_objective" /* mapper of varint */
      : this extends "0x47"
      ? "update_time" /* mapper of varint */
      : this extends "0x4c"
      ? "entity_teleport" /* mapper of varint */
      : this extends "0x3c"
      ? "entity_metadata" /* mapper of varint */
      : this extends "0x16"
      ? "set_slot" /* mapper of varint */
      : this extends "0x30"
      ? "bed" /* mapper of varint */
      : this extends "0x0d"
      ? "difficulty" /* mapper of varint */
      : this extends "0x38"
      ? "world_border" /* mapper of varint */
      : this extends "0x0a"
      ? "block_action" /* mapper of varint */
      : this extends "0x25"
      ? "entity" /* mapper of varint */
      : this extends "0x2f"
      ? "position" /* mapper of varint */
      : this extends "0x3d"
      ? "attach_entity" /* mapper of varint */
      : this extends "0x11"
      ? "transaction" /* mapper of varint */
      : this extends "0x45"
      ? "scoreboard_score" /* mapper of varint */
      : this extends "0x29"
      ? "vehicle_move" /* mapper of varint */
      : this extends "0x4d"
      ? "advancements" /* mapper of varint */
      : this extends "0x4b"
      ? "collect" /* mapper of varint */
      : this extends "0x2e"
      ? "player_info" /* mapper of varint */
      : this extends "0x19"
      ? "named_sound_effect" /* mapper of varint */
      : this extends "0x46"
      ? "spawn_position" /* mapper of varint */
      : this extends "0x23"
      ? "login" /* mapper of varint */
      : this extends "0x20"
      ? "map_chunk" /* mapper of varint */
      : this extends "0x1b"
      ? "entity_status" /* mapper of varint */
      : this extends "0x35"
      ? "respawn" /* mapper of varint */
      : this extends "0x02"
      ? "spawn_entity_weather" /* mapper of varint */
      : this extends "0x1c"
      ? "explosion" /* mapper of varint */
      : this extends "0x21"
      ? "world_event" /* mapper of varint */
      : this extends "0x43"
      ? "set_passengers" /* mapper of varint */
      : this extends "0x48"
      ? "title" /* mapper of varint */
      : this extends "0x4f"
      ? "entity_effect" /* mapper of varint */
      : this extends "0x3b"
      ? "scoreboard_display_objective" /* mapper of varint */
      : this extends "0x2b"
      ? "craft_recipe_response" /* mapper of varint */
      : this extends "0x3e"
      ? "entity_velocity" /* mapper of varint */
      : this extends "0x01"
      ? "spawn_entity_experience_orb" /* mapper of varint */
      : this extends "0x10"
      ? "multi_block_change" /* mapper of varint */
      : this extends "0x40"
      ? "experience" /* mapper of varint */
      : this extends "0x08"
      ? "block_break_animation" /* mapper of varint */
      : this extends "0x18"
      ? "custom_payload" /* mapper of varint */
      : this extends "0x17"
      ? "set_cooldown" /* mapper of varint */
      : this extends "0x13"
      ? "open_window" /* mapper of varint */
      : this extends "0x22"
      ? "world_particles" /* mapper of varint */
      : this extends "0x2d"
      ? "combat_event" /* mapper of varint */
      : this extends "0x0b"
      ? "block_change" /* mapper of varint */
      : this extends "0x33"
      ? "remove_entity_effect" /* mapper of varint */
      : this extends "0x36"
      ? "entity_head_rotation" /* mapper of varint */
      : this extends "0x12"
      ? "close_window" /* mapper of varint */
      : this extends "0x2a"
      ? "open_sign_entity" /* mapper of varint */
      : this extends "0x3f"
      ? "entity_equipment" /* mapper of varint */
      : Void;
    params: {
      rel_entity_move: packet_rel_entity_move;
      spawn_entity_painting: packet_spawn_entity_painting;
      spawn_entity: packet_spawn_entity;
      entity_teleport: packet_entity_teleport;
      spawn_entity_experience_orb: packet_spawn_entity_experience_orb;
      kick_disconnect: packet_kick_disconnect;
      attach_entity: packet_attach_entity;
      game_state_change: packet_game_state_change;
      map_chunk: packet_map_chunk;
      entity_look: packet_entity_look;
      advancements: packet_advancements;
      craft_progress_bar: packet_craft_progress_bar;
      difficulty: packet_difficulty;
      set_cooldown: packet_set_cooldown;
      login: packet_login;
      sound_effect: packet_sound_effect;
      entity_effect: packet_entity_effect;
      multi_block_change: packet_multi_block_change;
      scoreboard_display_objective: packet_scoreboard_display_objective;
      chat: packet_chat;
      entity_update_attributes: packet_entity_update_attributes;
      collect: packet_collect;
      vehicle_move: packet_vehicle_move;
      craft_recipe_response: packet_craft_recipe_response;
      combat_event: packet_combat_event;
      entity_equipment: packet_entity_equipment;
      resource_pack_send: packet_resource_pack_send;
      playerlist_header: packet_playerlist_header;
      select_advancement_tab: packet_select_advancement_tab;
      tile_entity_data: packet_tile_entity_data;
      unload_chunk: packet_unload_chunk;
      transaction: packet_transaction;
      block_change: packet_block_change;
      world_event: packet_world_event;
      named_sound_effect: packet_named_sound_effect;
      bed: packet_bed;
      entity_metadata: packet_entity_metadata;
      open_sign_entity: packet_open_sign_entity;
      title: packet_title;
      experience: packet_experience;
      entity_velocity: packet_entity_velocity;
      update_time: packet_update_time;
      set_passengers: packet_set_passengers;
      animation: packet_animation;
      map: packet_map;
      position: packet_position;
      world_border: packet_world_border;
      scoreboard_objective: packet_scoreboard_objective;
      camera: packet_camera;
      block_break_animation: packet_block_break_animation;
      open_window: packet_open_window;
      entity_status: packet_entity_status;
      block_action: packet_block_action;
      custom_payload: packet_custom_payload;
      entity_move_look: packet_entity_move_look;
      boss_bar: packet_boss_bar;
      teams: packet_teams;
      spawn_position: packet_spawn_position;
      tab_complete: packet_tab_complete;
      set_slot: packet_set_slot;
      spawn_entity_weather: packet_spawn_entity_weather;
      entity_destroy: packet_entity_destroy;
      entity_head_rotation: packet_entity_head_rotation;
      keep_alive: packet_keep_alive;
      entity: packet_entity;
      named_entity_spawn: packet_named_entity_spawn;
      update_health: packet_update_health;
      scoreboard_score: packet_scoreboard_score;
      world_particles: packet_world_particles;
      abilities: packet_abilities;
      respawn: packet_respawn;
      unlock_recipes: packet_unlock_recipes;
      held_item_slot: packet_held_item_slot;
      player_info: packet_player_info;
      explosion: packet_explosion;
      statistics: packet_statistics;
      close_window: packet_close_window;
      window_items: packet_window_items;
      spawn_entity_living: packet_spawn_entity_living;
      remove_entity_effect: packet_remove_entity_effect;
      _: void;
    } /* .get(name) */;
  }

  interface packet_respawn {
    dimension: i32;
    difficulty: u8;
    gamemode: u8;
    levelType: string;
  }

  interface packet_craft_recipe_response {
    windowId: i8;
    recipe: VarInt;
  }

  interface packet_spawn_position {
    location: Position;
  }

  interface packet_player_info {
    action: VarInt;
    data: {
      UUID: UUID;
      name: { 0: string; _: Void } /* .get(../action) */;
      properties: {
        0: { name: string; value: string; signature: Option<string> }[];
        _: Void;
      } /* .get(../action) */;
      gamemode: { 1: VarInt; 0: VarInt; _: Void } /* .get(../action) */;
      ping: { 0: VarInt; 2: VarInt; _: Void } /* .get(../action) */;
      displayName: {
        3: Option<string>;
        0: Option<string>;
        _: Void;
      } /* .get(../action) */;
    }[];
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
        criteria: Record_<string, Void>;
        requirements: string[][];
      }
    >;
    identifiers: string[];
    progressMapping: Record_<
      string,
      { criterionIdentifier: string; criterionProgress: Option<i64> }[]
    >;
  }

  interface packet_world_event {
    effectId: i32;
    location: Position;
    data: i32;
    global: bool;
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

  interface packet_map_chunk {
    x: i32;
    z: i32;
    groundUp: bool;
    bitMap: VarInt;
    chunkData: Buffer<{ countType: VarInt }>;
    blockEntities: Nbt[];
  }

  interface packet_entity_update_attributes {
    entityId: VarInt;
    properties: {
      key: string;
      value: f64;
      modifiers: { uuid: UUID; amount: f64; operation: i8 }[];
    }[i32];
  }

  interface packet_combat_event {
    event: VarInt;
    duration: { 1: VarInt; _: Void } /* .get(event) */;
    playerId: { 2: VarInt; _: Void } /* .get(event) */;
    entityId: { 2: i32; 1: i32; _: Void } /* .get(event) */;
    message: { 2: string; _: Void } /* .get(event) */;
  }

  interface packet_multi_block_change {
    chunkX: i32;
    chunkZ: i32;
    records: { horizontalPos: u8; y: u8; blockId: VarInt }[];
  }

  interface packet_title {
    action: VarInt;
    text: { 1: string; 2: string; 0: string; _: Void } /* .get(action) */;
    fadeIn: { 3: i32; _: Void } /* .get(action) */;
    stay: { 3: i32; _: Void } /* .get(action) */;
    fadeOut: { 3: i32; _: Void } /* .get(action) */;
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

  interface packet_unload_chunk {
    chunkX: i32;
    chunkZ: i32;
  }

  interface packet_keep_alive {
    keepAliveId: i64;
  }

  interface packet_bed {
    entityId: VarInt;
    location: Position;
  }

  interface packet_entity_destroy {
    entityIds: VarInt[];
  }
}
namespace play.to_server {
  interface packet_teleport_confirm {
    teleportId: VarInt;
  }

  interface packet_window_click {
    windowId: u8;
    slot: i16;
    mouseButton: i8;
    action: i16;
    mode: i8;
    item: Slot;
  }

  interface packet_vehicle_move {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
  }

  interface packet_update_sign {
    location: Position;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
  }

  interface packet_client_command {
    actionId: VarInt;
  }

  interface packet_custom_payload {
    channel: string;
    data: RestBuffer;
  }

  interface packet_flying {
    onGround: bool;
  }

  interface packet_spectate {
    target: UUID;
  }

  interface packet_keep_alive {
    keepAliveId: i64;
  }

  interface packet_look {
    yaw: f32;
    pitch: f32;
    onGround: bool;
  }

  interface packet_chat {
    message: string;
  }

  interface packet_use_entity {
    target: VarInt;
    mouse: VarInt;
    x: { 2: f32; _: Void } /* .get(mouse) */;
    y: { 2: f32; _: Void } /* .get(mouse) */;
    z: { 2: f32; _: Void } /* .get(mouse) */;
    hand: { 0: VarInt; 2: VarInt; _: Void } /* .get(mouse) */;
  }

  interface packet_crafting_book_data {
    type: VarInt;
    _anon: {
      0: { displayedRecipe: i32 };
      1: { craftingBookOpen: bool; craftingFilter: bool };
      _: void;
    } /* .get(type) */;
  }

  interface packet_set_creative_slot {
    slot: i16;
    item: Slot;
  }

  interface packet_block_place {
    location: Position;
    direction: VarInt;
    hand: VarInt;
    cursorX: f32;
    cursorY: f32;
    cursorZ: f32;
  }

  interface packet_held_item_slot {
    slotId: i16;
  }

  interface packet_tab_complete {
    text: string;
    assumeCommand: bool;
    lookedAtBlock: Option<Position>;
  }

  interface packet_enchant_item {
    windowId: i8;
    enchantment: i8;
  }

  interface packet_steer_boat {
    leftPaddle: bool;
    rightPaddle: bool;
  }

  interface packet_position_look {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
    onGround: bool;
  }

  interface packet_entity_action {
    entityId: VarInt;
    actionId: VarInt;
    jumpBoost: VarInt;
  }

  interface packet_abilities {
    flags: i8;
    flyingSpeed: f32;
    walkingSpeed: f32;
  }

  interface packet_transaction {
    windowId: i8;
    action: i16;
    accepted: bool;
  }

  interface packet_settings {
    locale: string;
    viewDistance: i8;
    chatFlags: VarInt;
    chatColors: bool;
    skinParts: u8;
    mainHand: VarInt;
  }

  interface packet_block_dig {
    status: VarInt;
    location: Position;
    face: i8;
  }

  interface packet_steer_vehicle {
    sideways: f32;
    forward: f32;
    jump: u8;
  }

  interface packet_resource_pack_receive {
    result: VarInt;
  }

  interface packet_arm_animation {
    hand: VarInt;
  }

  interface packet_advancement_tab {
    action: VarInt;
    tabId: { 1: Void; 0: string; _: void } /* .get(action) */;
  }

  interface packet {
    name: this extends "0x20"
      ? "use_item" /* mapper of varint */
      : this extends "0x00"
      ? "teleport_confirm" /* mapper of varint */
      : this extends "0x02"
      ? "chat" /* mapper of varint */
      : this extends "0x07"
      ? "window_click" /* mapper of varint */
      : this extends "0x0c"
      ? "flying" /* mapper of varint */
      : this extends "0x0e"
      ? "position_look" /* mapper of varint */
      : this extends "0x11"
      ? "steer_boat" /* mapper of varint */
      : this extends "0x0f"
      ? "look" /* mapper of varint */
      : this extends "0x14"
      ? "block_dig" /* mapper of varint */
      : this extends "0x09"
      ? "custom_payload" /* mapper of varint */
      : this extends "0x06"
      ? "enchant_item" /* mapper of varint */
      : this extends "0x1a"
      ? "held_item_slot" /* mapper of varint */
      : this extends "0x03"
      ? "client_command" /* mapper of varint */
      : this extends "0x0d"
      ? "position" /* mapper of varint */
      : this extends "0x04"
      ? "settings" /* mapper of varint */
      : this extends "0x01"
      ? "tab_complete" /* mapper of varint */
      : this extends "0x10"
      ? "vehicle_move" /* mapper of varint */
      : this extends "0x12"
      ? "craft_recipe_request" /* mapper of varint */
      : this extends "0x0b"
      ? "keep_alive" /* mapper of varint */
      : this extends "0x1d"
      ? "arm_animation" /* mapper of varint */
      : this extends "0x08"
      ? "close_window" /* mapper of varint */
      : this extends "0x17"
      ? "crafting_book_data" /* mapper of varint */
      : this extends "0x19"
      ? "advancement_tab" /* mapper of varint */
      : this extends "0x1e"
      ? "spectate" /* mapper of varint */
      : this extends "0x13"
      ? "abilities" /* mapper of varint */
      : this extends "0x1b"
      ? "set_creative_slot" /* mapper of varint */
      : this extends "0x15"
      ? "entity_action" /* mapper of varint */
      : this extends "0x05"
      ? "transaction" /* mapper of varint */
      : this extends "0x16"
      ? "steer_vehicle" /* mapper of varint */
      : this extends "0x1f"
      ? "block_place" /* mapper of varint */
      : this extends "0x18"
      ? "resource_pack_receive" /* mapper of varint */
      : this extends "0x0a"
      ? "use_entity" /* mapper of varint */
      : this extends "0x1c"
      ? "update_sign" /* mapper of varint */
      : Void;
    params: {
      block_dig: packet_block_dig;
      advancement_tab: packet_advancement_tab;
      tab_complete: packet_tab_complete;
      update_sign: packet_update_sign;
      keep_alive: packet_keep_alive;
      steer_boat: packet_steer_boat;
      craft_recipe_request: packet_craft_recipe_request;
      crafting_book_data: packet_crafting_book_data;
      vehicle_move: packet_vehicle_move;
      held_item_slot: packet_held_item_slot;
      settings: packet_settings;
      use_entity: packet_use_entity;
      chat: packet_chat;
      window_click: packet_window_click;
      flying: packet_flying;
      enchant_item: packet_enchant_item;
      transaction: packet_transaction;
      set_creative_slot: packet_set_creative_slot;
      block_place: packet_block_place;
      custom_payload: packet_custom_payload;
      look: packet_look;
      entity_action: packet_entity_action;
      arm_animation: packet_arm_animation;
      use_item: packet_use_item;
      position_look: packet_position_look;
      resource_pack_receive: packet_resource_pack_receive;
      close_window: packet_close_window;
      teleport_confirm: packet_teleport_confirm;
      abilities: packet_abilities;
      steer_vehicle: packet_steer_vehicle;
      spectate: packet_spectate;
      position: packet_position;
      client_command: packet_client_command;
      _: void;
    } /* .get(name) */;
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
  interface packet_position {
    x: f64;
    y: f64;
    z: f64;
    onGround: bool;
  }

  interface packet_close_window {
    windowId: u8;
  }

  interface packet_use_item {
    hand: VarInt;
  }
}
