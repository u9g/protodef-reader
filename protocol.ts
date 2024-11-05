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
    name: this extends "0xfe"
      ? "legacy_server_list_ping" /* mapper of varint */
      : this extends "0x00"
      ? "set_protocol" /* mapper of varint */
      : Void;
    params: "name" extends "legacy_server_list_ping"
      ? packet_legacy_server_list_ping /* */
      : "name" extends "set_protocol"
      ? packet_set_protocol /* */
      : void;
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
  interface packet_ping {
    time: i64;
  }

  interface packet {
    name: this extends "0x00"
      ? "server_info" /* mapper of varint */
      : this extends "0x01"
      ? "ping" /* mapper of varint */
      : Void;
    params: "name" extends "server_info"
      ? packet_server_info /* */
      : "name" extends "ping"
      ? packet_ping /* */
      : void;
  }

  interface packet_server_info {
    response: string;
  }
}
namespace status.to_server {
  interface packet {
    name: this extends "0x00"
      ? "ping_start" /* mapper of varint */
      : this extends "0x01"
      ? "ping" /* mapper of varint */
      : Void;
    params: "name" extends "ping"
      ? packet_ping /* */
      : "name" extends "ping_start"
      ? packet_ping_start /* */
      : void;
  }

  interface packet_ping_start {}

  interface packet_ping {
    time: i64;
  }
}
namespace login.to_client {
  interface packet_disconnect {
    reason: string;
  }

  interface packet_encryption_begin {
    serverId: string;
    publicKey: Buffer<{ countType: VarInt }>;
    verifyToken: Buffer<{ countType: VarInt }>;
  }

  interface packet_compress {
    threshold: VarInt;
  }

  interface packet {
    name: this extends "0x02"
      ? "success" /* mapper of varint */
      : this extends "0x03"
      ? "compress" /* mapper of varint */
      : this extends "0x00"
      ? "disconnect" /* mapper of varint */
      : this extends "0x01"
      ? "encryption_begin" /* mapper of varint */
      : Void;
    params: "name" extends "compress"
      ? packet_compress /* */
      : "name" extends "disconnect"
      ? packet_disconnect /* */
      : "name" extends "encryption_begin"
      ? packet_encryption_begin /* */
      : "name" extends "success"
      ? packet_success /* */
      : void;
  }

  interface packet_success {
    uuid: string;
    username: string;
  }
}
namespace login.to_server {
  interface packet {
    name: this extends "0x00"
      ? "login_start" /* mapper of varint */
      : this extends "0x01"
      ? "encryption_begin" /* mapper of varint */
      : Void;
    params: "name" extends "login_start"
      ? packet_login_start /* */
      : "name" extends "encryption_begin"
      ? packet_encryption_begin /* */
      : void;
  }

  interface packet_login_start {
    username: string;
  }

  interface packet_encryption_begin {
    sharedSecret: Buffer<{ countType: VarInt }>;
    verifyToken: Buffer<{ countType: VarInt }>;
  }
}
namespace play.to_client {
  interface packet_statistics {
    entries: { name: string; value: VarInt }[];
  }

  interface packet_unlock_recipes {
    action: VarInt;
    craftingBookOpen: bool;
    filteringCraftable: bool;
    recipes1: VarInt[];
    recipes2: "action" extends "0" ? VarInt[] : Void;
  }

  interface packet_open_window {
    windowId: u8;
    inventoryType: string;
    windowTitle: string;
    slotCount: u8;
    entityId: "inventoryType" extends "EntityHorse" ? i32 : Void;
  }

  interface packet_held_item_slot {
    slot: i8;
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

  interface packet_world_event {
    effectId: i32;
    location: Position;
    data: i32;
    global: bool;
  }

  interface packet_close_window {
    windowId: u8;
  }

  interface packet_entity {
    entityId: VarInt;
  }

  interface packet_entity_update_attributes {
    entityId: VarInt;
    properties: {
      key: string;
      value: f64;
      modifiers: { uuid: UUID; amount: f64; operation: i8 }[];
    }[i32];
  }

  interface packet_unload_chunk {
    chunkX: i32;
    chunkZ: i32;
  }

  interface packet_entity_look {
    entityId: VarInt;
    yaw: i8;
    pitch: i8;
    onGround: bool;
  }

  interface packet_scoreboard_display_objective {
    position: i8;
    name: string;
  }

  interface packet_craft_recipe_response {
    windowId: i8;
    recipe: VarInt;
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

  interface packet_entity_head_rotation {
    entityId: VarInt;
    headYaw: i8;
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
    data: "particleId" extends "37"
      ? Arr<{ arraySize: 1; elementType: VarInt }> /* */
      : "particleId" extends "36"
      ? Arr<{ arraySize: 2; elementType: VarInt }> /* */
      : "particleId" extends "38"
      ? Arr<{ arraySize: 1; elementType: VarInt }> /* */
      : Void;
  }

  interface packet_open_sign_entity {
    location: Position;
  }

  interface packet_spawn_entity_experience_orb {
    entityId: VarInt;
    x: f64;
    y: f64;
    z: f64;
    count: i16;
  }

  interface packet_block_change {
    location: Position;
    type: VarInt;
  }

  interface packet_entity_destroy {
    entityIds: VarInt[];
  }

  interface packet_set_passengers {
    entityId: VarInt;
    passengers: VarInt[];
  }

  interface packet_update_time {
    age: i64;
    time: i64;
  }

  interface packet_playerlist_header {
    header: string;
    footer: string;
  }

  interface packet_entity_effect {
    entityId: VarInt;
    effectId: i8;
    amplifier: i8;
    duration: VarInt;
    hideParticles: i8;
  }

  interface packet_spawn_position {
    location: Position;
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

  interface packet_craft_progress_bar {
    windowId: u8;
    property: i16;
    value: i16;
  }

  interface packet_map {
    itemDamage: VarInt;
    scale: i8;
    trackingPosition: bool;
    icons: { directionAndType: i8; x: i8; z: i8 }[];
    columns: i8;
    rows: "columns" extends "0" ? Void : i8;
    x: "columns" extends "0" ? Void : i8;
    y: "columns" extends "0" ? Void : i8;
    data: "columns" extends "0" ? Void : Buffer<{ countType: VarInt }>;
  }

  interface packet_respawn {
    dimension: i32;
    difficulty: u8;
    gamemode: u8;
    levelType: string;
  }

  interface packet_update_health {
    health: f32;
    food: VarInt;
    foodSaturation: f32;
  }

  interface packet_set_slot {
    windowId: i8;
    slot: i16;
    item: Slot;
  }

  interface packet_map_chunk {
    x: i32;
    z: i32;
    groundUp: bool;
    bitMap: VarInt;
    chunkData: Buffer<{ countType: VarInt }>;
    blockEntities: Nbt[];
  }

  interface packet_entity_status {
    entityId: i32;
    entityStatus: i8;
  }

  interface packet_vehicle_move {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
  }

  interface packet_experience {
    experienceBar: f32;
    level: VarInt;
    totalExperience: VarInt;
  }

  interface packet_entity_metadata {
    entityId: VarInt;
    metadata: EntityMetadata;
  }

  interface packet_teams {
    team: string;
    mode: i8;
    name: "mode" extends "0"
      ? string /* */
      : "mode" extends "2"
      ? string /* */
      : Void;
    prefix: "mode" extends "0"
      ? string /* */
      : "mode" extends "2"
      ? string /* */
      : Void;
    suffix: "mode" extends "2"
      ? string /* */
      : "mode" extends "0"
      ? string /* */
      : Void;
    friendlyFire: "mode" extends "0"
      ? i8 /* */
      : "mode" extends "2"
      ? i8 /* */
      : Void;
    nameTagVisibility: "mode" extends "2"
      ? string /* */
      : "mode" extends "0"
      ? string /* */
      : Void;
    collisionRule: "mode" extends "0"
      ? string /* */
      : "mode" extends "2"
      ? string /* */
      : Void;
    color: "mode" extends "0" ? i8 /* */ : "mode" extends "2" ? i8 /* */ : Void;
    players: "mode" extends "4"
      ? string[] /* */
      : "mode" extends "3"
      ? string[] /* */
      : "mode" extends "0"
      ? string[] /* */
      : Void;
  }

  interface packet_scoreboard_score {
    itemName: string;
    action: VarInt;
    scoreName: string;
    value: "action" extends "1" ? Void : VarInt;
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

  interface packet_position {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
    flags: i8;
    teleportId: VarInt;
  }

  interface packet_tab_complete {
    matches: string[];
  }

  interface packet_rel_entity_move {
    entityId: VarInt;
    dX: i16;
    dY: i16;
    dZ: i16;
    onGround: bool;
  }

  interface packet_boss_bar {
    entityUUID: UUID;
    action: VarInt;
    title: "action" extends "3"
      ? string /* */
      : "action" extends "0"
      ? string /* */
      : Void;
    health: "action" extends "2"
      ? f32 /* */
      : "action" extends "0"
      ? f32 /* */
      : Void;
    color: "action" extends "4"
      ? VarInt /* */
      : "action" extends "0"
      ? VarInt /* */
      : Void;
    dividers: "action" extends "4"
      ? VarInt /* */
      : "action" extends "0"
      ? VarInt /* */
      : Void;
    flags: "action" extends "5"
      ? u8 /* */
      : "action" extends "0"
      ? u8 /* */
      : Void;
  }

  interface packet_attach_entity {
    entityId: i32;
    vehicleId: i32;
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

  interface packet_spawn_entity_weather {
    entityId: VarInt;
    type: i8;
    x: f64;
    y: f64;
    z: f64;
  }

  interface packet_custom_payload {
    channel: string;
    data: RestBuffer;
  }

  interface packet_combat_event {
    event: VarInt;
    duration: "event" extends "1" ? VarInt : Void;
    playerId: "event" extends "2" ? VarInt : Void;
    entityId: "event" extends "1"
      ? i32 /* */
      : "event" extends "2"
      ? i32 /* */
      : Void;
    message: "event" extends "2" ? string : Void;
  }

  interface packet_keep_alive {
    keepAliveId: i64;
  }

  interface packet_scoreboard_objective {
    name: string;
    action: i8;
    displayText: "action" extends "0"
      ? string /* */
      : "action" extends "2"
      ? string /* */
      : Void;
    type: "action" extends "2"
      ? string /* */
      : "action" extends "0"
      ? string /* */
      : Void;
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
          backgroundTexture: "flags/has_background_texture" extends "1"
            ? string
            : Void;
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

  interface packet_window_items {
    windowId: u8;
    items: Slot[i16];
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

  interface packet_entity_equipment {
    entityId: VarInt;
    slot: VarInt;
    item: Slot;
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

  interface packet_block_action {
    location: Position;
    byte1: u8;
    byte2: u8;
    blockId: VarInt;
  }

  interface packet_difficulty {
    difficulty: u8;
  }

  interface packet_bed {
    entityId: VarInt;
    location: Position;
  }

  interface packet_title {
    action: VarInt;
    text: {
      "1": string;
      "2": string;
      "3": string;
      _: void;
    } /* .get(action) */;
    fadeIn: "action" extends "3" ? i32 : Void;
    stay: "action" extends "3" ? i32 : Void;
    fadeOut: "action" extends "3" ? i32 : Void;
  }

  interface packet_camera {
    cameraId: VarInt;
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

  interface packet_spawn_entity_painting {
    entityId: VarInt;
    entityUUID: UUID;
    title: string;
    location: Position;
    direction: u8;
  }

  interface packet_set_cooldown {
    itemID: VarInt;
    cooldownTicks: VarInt;
  }

  interface packet_collect {
    collectedEntityId: VarInt;
    collectorEntityId: VarInt;
    pickupItemCount: VarInt;
  }

  interface packet_chat {
    message: string;
    position: i8;
  }

  interface packet_block_break_animation {
    entityId: VarInt;
    location: Position;
    destroyStage: i8;
  }

  interface packet_game_state_change {
    reason: u8;
    gameMode: f32;
  }

  interface packet_player_info {
    action: VarInt;
    data: {
      UUID: UUID;
      name: "../action" extends "0" ? string : Void;
      properties: "../action" extends "0"
        ? { name: string; value: string; signature: Option<string> }[]
        : Void;
      gamemode: "../action" extends "1"
        ? VarInt /* */
        : "../action" extends "0"
        ? VarInt /* */
        : Void;
      ping: "../action" extends "2"
        ? VarInt /* */
        : "../action" extends "0"
        ? VarInt /* */
        : Void;
      displayName: "../action" extends "3"
        ? Option<string> /* */
        : "../action" extends "0"
        ? Option<string> /* */
        : Void;
    }[];
  }

  interface packet_multi_block_change {
    chunkX: i32;
    chunkZ: i32;
    records: { horizontalPos: u8; y: u8; blockId: VarInt }[];
  }

  interface packet_select_advancement_tab {
    id: Option<string>;
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

  interface packet_kick_disconnect {
    reason: string;
  }

  interface packet {
    name: this extends "0x13"
      ? "open_window" /* mapper of varint */
      : this extends "0x19"
      ? "named_sound_effect" /* mapper of varint */
      : this extends "0x1a"
      ? "kick_disconnect" /* mapper of varint */
      : this extends "0x4a"
      ? "playerlist_header" /* mapper of varint */
      : this extends "0x36"
      ? "entity_head_rotation" /* mapper of varint */
      : this extends "0x24"
      ? "map" /* mapper of varint */
      : this extends "0x25"
      ? "entity" /* mapper of varint */
      : this extends "0x47"
      ? "update_time" /* mapper of varint */
      : this extends "0x4c"
      ? "entity_teleport" /* mapper of varint */
      : this extends "0x1c"
      ? "explosion" /* mapper of varint */
      : this extends "0x2a"
      ? "open_sign_entity" /* mapper of varint */
      : this extends "0x30"
      ? "bed" /* mapper of varint */
      : this extends "0x32"
      ? "entity_destroy" /* mapper of varint */
      : this extends "0x3e"
      ? "entity_velocity" /* mapper of varint */
      : this extends "0x20"
      ? "map_chunk" /* mapper of varint */
      : this extends "0x0b"
      ? "block_change" /* mapper of varint */
      : this extends "0x03"
      ? "spawn_entity_living" /* mapper of varint */
      : this extends "0x1e"
      ? "game_state_change" /* mapper of varint */
      : this extends "0x29"
      ? "vehicle_move" /* mapper of varint */
      : this extends "0x41"
      ? "update_health" /* mapper of varint */
      : this extends "0x27"
      ? "entity_move_look" /* mapper of varint */
      : this extends "0x0e"
      ? "tab_complete" /* mapper of varint */
      : this extends "0x28"
      ? "entity_look" /* mapper of varint */
      : this extends "0x00"
      ? "spawn_entity" /* mapper of varint */
      : this extends "0x2c"
      ? "abilities" /* mapper of varint */
      : this extends "0x34"
      ? "resource_pack_send" /* mapper of varint */
      : this extends "0x21"
      ? "world_event" /* mapper of varint */
      : this extends "0x04"
      ? "spawn_entity_painting" /* mapper of varint */
      : this extends "0x1d"
      ? "unload_chunk" /* mapper of varint */
      : this extends "0x10"
      ? "multi_block_change" /* mapper of varint */
      : this extends "0x06"
      ? "animation" /* mapper of varint */
      : this extends "0x17"
      ? "set_cooldown" /* mapper of varint */
      : this extends "0x1f"
      ? "keep_alive" /* mapper of varint */
      : this extends "0x4e"
      ? "entity_update_attributes" /* mapper of varint */
      : this extends "0x46"
      ? "spawn_position" /* mapper of varint */
      : this extends "0x02"
      ? "spawn_entity_weather" /* mapper of varint */
      : this extends "0x31"
      ? "unlock_recipes" /* mapper of varint */
      : this extends "0x0f"
      ? "chat" /* mapper of varint */
      : this extends "0x2d"
      ? "combat_event" /* mapper of varint */
      : this extends "0x3f"
      ? "entity_equipment" /* mapper of varint */
      : this extends "0x08"
      ? "block_break_animation" /* mapper of varint */
      : this extends "0x0a"
      ? "block_action" /* mapper of varint */
      : this extends "0x14"
      ? "window_items" /* mapper of varint */
      : this extends "0x11"
      ? "transaction" /* mapper of varint */
      : this extends "0x22"
      ? "world_particles" /* mapper of varint */
      : this extends "0x42"
      ? "scoreboard_objective" /* mapper of varint */
      : this extends "0x23"
      ? "login" /* mapper of varint */
      : this extends "0x3a"
      ? "held_item_slot" /* mapper of varint */
      : this extends "0x2f"
      ? "position" /* mapper of varint */
      : this extends "0x3d"
      ? "attach_entity" /* mapper of varint */
      : this extends "0x45"
      ? "scoreboard_score" /* mapper of varint */
      : this extends "0x07"
      ? "statistics" /* mapper of varint */
      : this extends "0x39"
      ? "camera" /* mapper of varint */
      : this extends "0x18"
      ? "custom_payload" /* mapper of varint */
      : this extends "0x0c"
      ? "boss_bar" /* mapper of varint */
      : this extends "0x43"
      ? "set_passengers" /* mapper of varint */
      : this extends "0x2e"
      ? "player_info" /* mapper of varint */
      : this extends "0x09"
      ? "tile_entity_data" /* mapper of varint */
      : this extends "0x0d"
      ? "difficulty" /* mapper of varint */
      : this extends "0x4d"
      ? "advancements" /* mapper of varint */
      : this extends "0x4f"
      ? "entity_effect" /* mapper of varint */
      : this extends "0x15"
      ? "craft_progress_bar" /* mapper of varint */
      : this extends "0x1b"
      ? "entity_status" /* mapper of varint */
      : this extends "0x16"
      ? "set_slot" /* mapper of varint */
      : this extends "0x2b"
      ? "craft_recipe_response" /* mapper of varint */
      : this extends "0x01"
      ? "spawn_entity_experience_orb" /* mapper of varint */
      : this extends "0x38"
      ? "world_border" /* mapper of varint */
      : this extends "0x3c"
      ? "entity_metadata" /* mapper of varint */
      : this extends "0x37"
      ? "select_advancement_tab" /* mapper of varint */
      : this extends "0x3b"
      ? "scoreboard_display_objective" /* mapper of varint */
      : this extends "0x35"
      ? "respawn" /* mapper of varint */
      : this extends "0x48"
      ? "title" /* mapper of varint */
      : this extends "0x49"
      ? "sound_effect" /* mapper of varint */
      : this extends "0x33"
      ? "remove_entity_effect" /* mapper of varint */
      : this extends "0x05"
      ? "named_entity_spawn" /* mapper of varint */
      : this extends "0x12"
      ? "close_window" /* mapper of varint */
      : this extends "0x44"
      ? "teams" /* mapper of varint */
      : this extends "0x40"
      ? "experience" /* mapper of varint */
      : this extends "0x26"
      ? "rel_entity_move" /* mapper of varint */
      : this extends "0x4b"
      ? "collect" /* mapper of varint */
      : Void;
    params: "name" extends "playerlist_header"
      ? packet_playerlist_header /* */
      : "name" extends "update_health"
      ? packet_update_health /* */
      : "name" extends "tab_complete"
      ? packet_tab_complete /* */
      : "name" extends "spawn_entity_weather"
      ? packet_spawn_entity_weather /* */
      : "name" extends "unload_chunk"
      ? packet_unload_chunk /* */
      : "name" extends "position"
      ? packet_position /* */
      : "name" extends "scoreboard_display_objective"
      ? packet_scoreboard_display_objective /* */
      : "name" extends "entity_update_attributes"
      ? packet_entity_update_attributes /* */
      : "name" extends "world_border"
      ? packet_world_border /* */
      : "name" extends "attach_entity"
      ? packet_attach_entity /* */
      : "name" extends "block_break_animation"
      ? packet_block_break_animation /* */
      : "name" extends "block_change"
      ? packet_block_change /* */
      : "name" extends "difficulty"
      ? packet_difficulty /* */
      : "name" extends "experience"
      ? packet_experience /* */
      : "name" extends "spawn_entity_painting"
      ? packet_spawn_entity_painting /* */
      : "name" extends "respawn"
      ? packet_respawn /* */
      : "name" extends "set_passengers"
      ? packet_set_passengers /* */
      : "name" extends "spawn_position"
      ? packet_spawn_position /* */
      : "name" extends "entity_look"
      ? packet_entity_look /* */
      : "name" extends "world_particles"
      ? packet_world_particles /* */
      : "name" extends "bed"
      ? packet_bed /* */
      : "name" extends "block_action"
      ? packet_block_action /* */
      : "name" extends "entity_head_rotation"
      ? packet_entity_head_rotation /* */
      : "name" extends "entity_velocity"
      ? packet_entity_velocity /* */
      : "name" extends "named_entity_spawn"
      ? packet_named_entity_spawn /* */
      : "name" extends "rel_entity_move"
      ? packet_rel_entity_move /* */
      : "name" extends "keep_alive"
      ? packet_keep_alive /* */
      : "name" extends "remove_entity_effect"
      ? packet_remove_entity_effect /* */
      : "name" extends "kick_disconnect"
      ? packet_kick_disconnect /* */
      : "name" extends "spawn_entity_experience_orb"
      ? packet_spawn_entity_experience_orb /* */
      : "name" extends "tile_entity_data"
      ? packet_tile_entity_data /* */
      : "name" extends "world_event"
      ? packet_world_event /* */
      : "name" extends "held_item_slot"
      ? packet_held_item_slot /* */
      : "name" extends "close_window"
      ? packet_close_window /* */
      : "name" extends "scoreboard_objective"
      ? packet_scoreboard_objective /* */
      : "name" extends "update_time"
      ? packet_update_time /* */
      : "name" extends "set_cooldown"
      ? packet_set_cooldown /* */
      : "name" extends "named_sound_effect"
      ? packet_named_sound_effect /* */
      : "name" extends "map_chunk"
      ? packet_map_chunk /* */
      : "name" extends "entity_equipment"
      ? packet_entity_equipment /* */
      : "name" extends "abilities"
      ? packet_abilities /* */
      : "name" extends "statistics"
      ? packet_statistics /* */
      : "name" extends "entity_effect"
      ? packet_entity_effect /* */
      : "name" extends "login"
      ? packet_login /* */
      : "name" extends "multi_block_change"
      ? packet_multi_block_change /* */
      : "name" extends "unlock_recipes"
      ? packet_unlock_recipes /* */
      : "name" extends "chat"
      ? packet_chat /* */
      : "name" extends "entity"
      ? packet_entity /* */
      : "name" extends "entity_teleport"
      ? packet_entity_teleport /* */
      : "name" extends "combat_event"
      ? packet_combat_event /* */
      : "name" extends "explosion"
      ? packet_explosion /* */
      : "name" extends "entity_metadata"
      ? packet_entity_metadata /* */
      : "name" extends "teams"
      ? packet_teams /* */
      : "name" extends "advancements"
      ? packet_advancements /* */
      : "name" extends "vehicle_move"
      ? packet_vehicle_move /* */
      : "name" extends "scoreboard_score"
      ? packet_scoreboard_score /* */
      : "name" extends "transaction"
      ? packet_transaction /* */
      : "name" extends "game_state_change"
      ? packet_game_state_change /* */
      : "name" extends "entity_move_look"
      ? packet_entity_move_look /* */
      : "name" extends "craft_progress_bar"
      ? packet_craft_progress_bar /* */
      : "name" extends "camera"
      ? packet_camera /* */
      : "name" extends "title"
      ? packet_title /* */
      : "name" extends "sound_effect"
      ? packet_sound_effect /* */
      : "name" extends "player_info"
      ? packet_player_info /* */
      : "name" extends "boss_bar"
      ? packet_boss_bar /* */
      : "name" extends "map"
      ? packet_map /* */
      : "name" extends "resource_pack_send"
      ? packet_resource_pack_send /* */
      : "name" extends "spawn_entity_living"
      ? packet_spawn_entity_living /* */
      : "name" extends "animation"
      ? packet_animation /* */
      : "name" extends "collect"
      ? packet_collect /* */
      : "name" extends "window_items"
      ? packet_window_items /* */
      : "name" extends "open_sign_entity"
      ? packet_open_sign_entity /* */
      : "name" extends "custom_payload"
      ? packet_custom_payload /* */
      : "name" extends "entity_destroy"
      ? packet_entity_destroy /* */
      : "name" extends "spawn_entity"
      ? packet_spawn_entity /* */
      : "name" extends "set_slot"
      ? packet_set_slot /* */
      : "name" extends "entity_status"
      ? packet_entity_status /* */
      : "name" extends "open_window"
      ? packet_open_window /* */
      : "name" extends "select_advancement_tab"
      ? packet_select_advancement_tab /* */
      : "name" extends "craft_recipe_response"
      ? packet_craft_recipe_response /* */
      : void;
  }

  interface packet_transaction {
    windowId: i8;
    action: i16;
    accepted: bool;
  }

  interface packet_resource_pack_send {
    url: string;
    hash: string;
  }

  interface packet_world_border {
    action: VarInt;
    radius: "action" extends "0" ? f64 : Void;
    x: "action" extends "2"
      ? f64 /* */
      : "action" extends "3"
      ? f64 /* */
      : Void;
    z: "action" extends "2"
      ? f64 /* */
      : "action" extends "3"
      ? f64 /* */
      : Void;
    old_radius: "action" extends "1"
      ? f64 /* */
      : "action" extends "3"
      ? f64 /* */
      : Void;
    new_radius: "action" extends "1"
      ? f64 /* */
      : "action" extends "3"
      ? f64 /* */
      : Void;
    speed: "action" extends "3"
      ? VarLong /* */
      : "action" extends "1"
      ? VarLong /* */
      : Void;
    portalBoundary: "action" extends "3" ? VarInt : Void;
    warning_time: "action" extends "4"
      ? VarInt /* */
      : "action" extends "3"
      ? VarInt /* */
      : Void;
    warning_blocks: "action" extends "3"
      ? VarInt /* */
      : "action" extends "5"
      ? VarInt /* */
      : Void;
  }

  interface packet_tile_entity_data {
    location: Position;
    action: u8;
    nbtData: OptionalNbt;
  }

  interface packet_remove_entity_effect {
    entityId: VarInt;
    effectId: i8;
  }

  interface packet_animation {
    entityId: VarInt;
    animation: u8;
  }
}
namespace play.to_server {
  interface packet_flying {
    onGround: bool;
  }

  interface packet {
    name: this extends "0x1a"
      ? "held_item_slot" /* mapper of varint */
      : this extends "0x0a"
      ? "use_entity" /* mapper of varint */
      : this extends "0x20"
      ? "use_item" /* mapper of varint */
      : this extends "0x1b"
      ? "set_creative_slot" /* mapper of varint */
      : this extends "0x1f"
      ? "block_place" /* mapper of varint */
      : this extends "0x02"
      ? "chat" /* mapper of varint */
      : this extends "0x08"
      ? "close_window" /* mapper of varint */
      : this extends "0x16"
      ? "steer_vehicle" /* mapper of varint */
      : this extends "0x11"
      ? "steer_boat" /* mapper of varint */
      : this extends "0x0f"
      ? "look" /* mapper of varint */
      : this extends "0x00"
      ? "teleport_confirm" /* mapper of varint */
      : this extends "0x1c"
      ? "update_sign" /* mapper of varint */
      : this extends "0x12"
      ? "craft_recipe_request" /* mapper of varint */
      : this extends "0x1e"
      ? "spectate" /* mapper of varint */
      : this extends "0x06"
      ? "enchant_item" /* mapper of varint */
      : this extends "0x03"
      ? "client_command" /* mapper of varint */
      : this extends "0x0c"
      ? "flying" /* mapper of varint */
      : this extends "0x01"
      ? "tab_complete" /* mapper of varint */
      : this extends "0x17"
      ? "crafting_book_data" /* mapper of varint */
      : this extends "0x07"
      ? "window_click" /* mapper of varint */
      : this extends "0x0b"
      ? "keep_alive" /* mapper of varint */
      : this extends "0x19"
      ? "advancement_tab" /* mapper of varint */
      : this extends "0x0e"
      ? "position_look" /* mapper of varint */
      : this extends "0x1d"
      ? "arm_animation" /* mapper of varint */
      : this extends "0x14"
      ? "block_dig" /* mapper of varint */
      : this extends "0x04"
      ? "settings" /* mapper of varint */
      : this extends "0x13"
      ? "abilities" /* mapper of varint */
      : this extends "0x15"
      ? "entity_action" /* mapper of varint */
      : this extends "0x18"
      ? "resource_pack_receive" /* mapper of varint */
      : this extends "0x09"
      ? "custom_payload" /* mapper of varint */
      : this extends "0x0d"
      ? "position" /* mapper of varint */
      : this extends "0x10"
      ? "vehicle_move" /* mapper of varint */
      : this extends "0x05"
      ? "transaction" /* mapper of varint */
      : Void;
    params: "name" extends "settings"
      ? packet_settings /* */
      : "name" extends "position_look"
      ? packet_position_look /* */
      : "name" extends "arm_animation"
      ? packet_arm_animation /* */
      : "name" extends "use_entity"
      ? packet_use_entity /* */
      : "name" extends "entity_action"
      ? packet_entity_action /* */
      : "name" extends "teleport_confirm"
      ? packet_teleport_confirm /* */
      : "name" extends "keep_alive"
      ? packet_keep_alive /* */
      : "name" extends "spectate"
      ? packet_spectate /* */
      : "name" extends "chat"
      ? packet_chat /* */
      : "name" extends "use_item"
      ? packet_use_item /* */
      : "name" extends "craft_recipe_request"
      ? packet_craft_recipe_request /* */
      : "name" extends "crafting_book_data"
      ? packet_crafting_book_data /* */
      : "name" extends "client_command"
      ? packet_client_command /* */
      : "name" extends "held_item_slot"
      ? packet_held_item_slot /* */
      : "name" extends "custom_payload"
      ? packet_custom_payload /* */
      : "name" extends "look"
      ? packet_look /* */
      : "name" extends "resource_pack_receive"
      ? packet_resource_pack_receive /* */
      : "name" extends "block_dig"
      ? packet_block_dig /* */
      : "name" extends "block_place"
      ? packet_block_place /* */
      : "name" extends "transaction"
      ? packet_transaction /* */
      : "name" extends "tab_complete"
      ? packet_tab_complete /* */
      : "name" extends "advancement_tab"
      ? packet_advancement_tab /* */
      : "name" extends "window_click"
      ? packet_window_click /* */
      : "name" extends "update_sign"
      ? packet_update_sign /* */
      : "name" extends "steer_vehicle"
      ? packet_steer_vehicle /* */
      : "name" extends "steer_boat"
      ? packet_steer_boat /* */
      : "name" extends "abilities"
      ? packet_abilities /* */
      : "name" extends "set_creative_slot"
      ? packet_set_creative_slot /* */
      : "name" extends "close_window"
      ? packet_close_window /* */
      : "name" extends "vehicle_move"
      ? packet_vehicle_move /* */
      : "name" extends "position"
      ? packet_position /* */
      : "name" extends "enchant_item"
      ? packet_enchant_item /* */
      : "name" extends "flying"
      ? packet_flying /* */
      : void;
  }

  interface packet_craft_recipe_request {
    windowId: i8;
    recipe: VarInt;
    makeAll: bool;
  }

  interface packet_position_look {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
    onGround: bool;
  }

  interface packet_use_item {
    hand: VarInt;
  }

  interface packet_enchant_item {
    windowId: i8;
    enchantment: i8;
  }

  interface packet_tab_complete {
    text: string;
    assumeCommand: bool;
    lookedAtBlock: Option<Position>;
  }

  interface packet_window_click {
    windowId: u8;
    slot: i16;
    mouseButton: i8;
    action: i16;
    mode: i8;
    item: Slot;
  }

  interface packet_close_window {
    windowId: u8;
  }

  interface packet_look {
    yaw: f32;
    pitch: f32;
    onGround: bool;
  }

  interface packet_spectate {
    target: UUID;
  }

  interface packet_use_entity {
    target: VarInt;
    mouse: VarInt;
    x: "mouse" extends "2" ? f32 : Void;
    y: "mouse" extends "2" ? f32 : Void;
    z: "mouse" extends "2" ? f32 : Void;
    hand: "mouse" extends "0"
      ? VarInt /* */
      : "mouse" extends "2"
      ? VarInt /* */
      : Void;
  }

  interface packet_block_place {
    location: Position;
    direction: VarInt;
    hand: VarInt;
    cursorX: f32;
    cursorY: f32;
    cursorZ: f32;
  }

  interface packet_transaction {
    windowId: i8;
    action: i16;
    accepted: bool;
  }

  interface packet_entity_action {
    entityId: VarInt;
    actionId: VarInt;
    jumpBoost: VarInt;
  }

  interface packet_keep_alive {
    keepAliveId: i64;
  }

  interface packet_position {
    x: f64;
    y: f64;
    z: f64;
    onGround: bool;
  }

  interface packet_steer_vehicle {
    sideways: f32;
    forward: f32;
    jump: u8;
  }

  interface packet_custom_payload {
    channel: string;
    data: RestBuffer;
  }

  interface packet_set_creative_slot {
    slot: i16;
    item: Slot;
  }

  interface packet_block_dig {
    status: VarInt;
    location: Position;
    face: i8;
  }

  interface packet_abilities {
    flags: i8;
    flyingSpeed: f32;
    walkingSpeed: f32;
  }

  interface packet_advancement_tab {
    action: VarInt;
    tabId: "action" extends "1"
      ? Void /* */
      : "action" extends "0"
      ? string /* */
      : void;
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

  interface packet_chat {
    message: string;
  }

  interface packet_resource_pack_receive {
    result: VarInt;
  }

  interface packet_arm_animation {
    hand: VarInt;
  }

  interface packet_settings {
    locale: string;
    viewDistance: i8;
    chatFlags: VarInt;
    chatColors: bool;
    skinParts: u8;
    mainHand: VarInt;
  }

  interface packet_held_item_slot {
    slotId: i16;
  }

  interface packet_crafting_book_data {
    type: VarInt;
    _anon: "type" extends "0"
      ? { displayedRecipe: i32 } /* */
      : "type" extends "1"
      ? { craftingBookOpen: bool; craftingFilter: bool } /* */
      : void;
  }

  interface packet_steer_boat {
    leftPaddle: bool;
    rightPaddle: bool;
  }

  interface packet_teleport_confirm {
    teleportId: VarInt;
  }

  interface packet_vehicle_move {
    x: f64;
    y: f64;
    z: f64;
    yaw: f32;
    pitch: f32;
  }
}
