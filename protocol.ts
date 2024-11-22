type varint = never;
type varlong = never;
type optvarint = number;
type pstring = never;
type buffer = never;
type u8 = never;
type u16 = never;
type u32 = never;
type u64 = never;
type i8 = never;
type i16 = never;
type i32 = never;
type i64 = never;
type bool = never;
type f32 = never;
type f64 = never;
type UUID = never;
type option = never;
type entityMetadataLoop = never;
type topBitSetTerminatedArray = never;
type bitfield = never;
type container = never;
type array = never;
type restBuffer = never;
type anonymousNbt = never;
type anonOptionalNbt = never;
type arrayWithLengthOffset = never;
type ByteArray = never;
type vec2f = {
  y: number;
  x: number;
};
type vec3f = {
  x: number;
  y: number;
  z: number;
};
type vec4f = {
  z: number;
  w: number;
  x: number;
  y: number;
};
type vec3f64 = {
  x: number;
  y: number;
  z: number;
};
type SlotComponentType =
  | "custom_data"
  | "max_stack_size"
  | "max_damage"
  | "damage"
  | "unbreakable"
  | "custom_name"
  | "item_name"
  | "lore"
  | "rarity"
  | "enchantments"
  | "can_place_on"
  | "can_break"
  | "attribute_modifiers"
  | "custom_model_data"
  | "hide_additional_tooltip"
  | "hide_tooltip"
  | "repair_cost"
  | "creative_slot_lock"
  | "enchantment_glint_override"
  | "intangible_projectile"
  | "food"
  | "fire_resistant"
  | "tool"
  | "stored_enchantments"
  | "dyed_color"
  | "map_color"
  | "map_id"
  | "map_decorations"
  | "map_post_processing"
  | "charged_projectiles"
  | "bundle_contents"
  | "potion_contents"
  | "suspicious_stew_effects"
  | "writable_book_content"
  | "written_book_content"
  | "trim"
  | "debug_stick_state"
  | "entity_data"
  | "bucket_entity_data"
  | "block_entity_data"
  | "instrument"
  | "ominous_bottle_amplifier"
  | "jukebox_playable"
  | "recipes"
  | "lodestone_tracker"
  | "firework_explosion"
  | "fireworks"
  | "profile"
  | "note_block_sound"
  | "banner_patterns"
  | "base_color"
  | "pot_decorations"
  | "container"
  | "block_state"
  | "bees"
  | "lock"
  | "container_loot";
type SlotComponent = {
  type: SlotComponentType;
  data: /* custom_data */
  | never
    | /* max_stack_size */ number
    | /* max_damage */ number
    | /* damage */ number
    | /* unbreakable */ boolean
    | /* custom_name */ never
    | /* item_name */ never
    | /* lore */ anonOptionalNbt[]
    | /* rarity */ number
    | /* enchantments */ {
        enchantments: {
          id: number;
          level: number;
        }[];
        showTooltip: boolean;
      }
    | /* can_place_on */ {
        showTooltip: boolean;
        predicates: BlockPredicate[];
      }
    | /* can_break */ {
        showTooltip: boolean;
        predicates: BlockPredicate[];
      }
    | /* attribute_modifiers */ {
        attributes: {
          value: number;
          name: string;
          typeId: number;
          uniqueId: string;
          operation: "add" | "multiply_base" | "multiply_total";
          slot:
            | "any"
            | "main_hand"
            | "off_hand"
            | "hand"
            | "feet"
            | "legs"
            | "chest"
            | "head"
            | "armor"
            | "body";
        }[];
        showTooltip: boolean;
      }
    | /* custom_model_data */ number
    | /* hide_additional_tooltip */ never
    | /* hide_tooltip */ never
    | /* repair_cost */ number
    | /* creative_slot_lock */ never
    | /* enchantment_glint_override */ boolean
    | /* intangible_projectile */ never
    | /* food */ {
        secondsToEat: number;
        canAlwaysEat: boolean;
        usingConvertsTo: Slot;
        effects: {
          probability: number;
          effect: number;
        }[];
        nutrition: number;
        saturationModifier: number;
      }
    | /* fire_resistant */ never
    | /* tool */ {
        defaultMiningSpeed: number;
        damagePerBlock: number;
        rules: {
          blocks: BlockSet[];
          hasSpeed: boolean;
          hasCorrectDropForBlocks: boolean;
          correctDropForBlocks: boolean;
          speed: number;
        }[];
      }
    | /* stored_enchantments */ {
        enchantments: {
          level: number;
          id: number;
        }[];
        showInTooltip: boolean;
      }
    | /* dyed_color */ {
        color: number;
        showTooltip: boolean;
      }
    | /* map_color */ number
    | /* map_id */ number
    | /* map_decorations */ anonOptionalNbt
    | /* map_post_processing */ number
    | /* charged_projectiles */ {
        projectiles: Slot[];
      }
    | /* bundle_contents */ {
        contents: Slot[];
      }
    | /* potion_contents */ {
        hasCustomColor: boolean;
        hasPotionId: boolean;
        potionId: optvarint;
        customColor: optvarint;
        customEffects: {
          effect: number;
          details: EffectDetail;
        }[];
      }
    | /* suspicious_stew_effects */ {
        effects: {
          duration: number;
          effect: number;
        }[];
      }
    | /* writable_book_content */ {
        pages: BookPage[];
      }
    | /* written_book_content */ {
        author: string;
        filteredTitle: string | undefined;
        rawTitle: string;
        generation: number;
        pages: BookPage[];
        resolved: boolean;
      }
    | /* trim */ {
        showInTooltip: boolean;
        materialType: number;
        trimPatternType: number;
      }
    | /* debug_stick_state */ never
    | /* entity_data */ never
    | /* bucket_entity_data */ never
    | /* block_entity_data */ never
    | /* instrument */ {
        instrumentType: number;
      }
    | /* ominous_bottle_amplifier */ number
    | /* jukebox_playable */ {
        directMode: boolean;
        showInTooltip: boolean;
      }
    | /* recipes */ never
    | /* lodestone_tracker */ {
        tracked: boolean;
        globalPosition:
          | {
              dimension: string;
              position: vec3f;
            }
          | undefined;
      }
    | /* firework_explosion */ FireworkExplosion
    | /* fireworks */ {
        flightDuration: number;
        explosions: FireworkExplosion[];
      }
    | /* profile */ {
        hasName: boolean;
        uniqueId: string;
        hasUniqueId: boolean;
        properties: {
          signature: string;
          hasSignature: boolean;
          property: string;
          value: string;
        }[];
        name: string;
      }
    | /* note_block_sound */ string
    | /* banner_patterns */ {
        layers: {
          patternType: number;
          color: number;
        }[];
      }
    | /* base_color */ number
    | /* pot_decorations */ {
        decorations: number[];
      }
    | /* container */ {
        contents: Slot[];
      }
    | /* block_state */ {
        properties: {
          property: string;
          value: string;
        }[];
      }
    | /* bees */ {
        bees: {
          ticksInHive: number;
          minTicksInHive: number;
          nbtData: never;
        }[];
      }
    | /* lock */ never
    | /* container_loot */ never;
};
type Slot = {
  itemCount: number;
};
type FireworkExplosion = {
  hasTrail: boolean;
  hasTwinkle: boolean;
  fadeColors: number[];
  colors: number[];
  shape: "small_ball" | "large_ball" | "star" | "creeper" | "burst";
};
type BookPage = {
  filteredContent: string | undefined;
  content: string;
};
type EffectDetail = {
  duration: number;
  ambient: boolean;
  hiddenEffect: EffectDetail | undefined;
  showIcon: boolean;
  showParticles: boolean;
  amplifier: number;
};
type BlockSet = {
  type: number;
  name: /* 0 */ string | never;
  blockIds: /* 0 */ never | never;
};
type BlockProperty = {
  minValue: string | undefined;
  maxValue: string | undefined;
  name: string;
  isExactMatch: boolean;
  exactValue: string | undefined;
};
type BlockPredicate = {
  blockSet: BlockSet[] | undefined;
  nbt: anonOptionalNbt;
  properties: BlockProperty[] | undefined;
};
type Particle = {
  type:
    | "angry_villager"
    | "block"
    | "block_marker"
    | "bubble"
    | "cloud"
    | "crit"
    | "damage_indicator"
    | "dragon_breath"
    | "dripping_lava"
    | "falling_lava"
    | "landing_lava"
    | "dripping_water"
    | "falling_water"
    | "dust"
    | "dust_color_transition"
    | "effect"
    | "elder_guardian"
    | "enchanted_hit"
    | "enchant"
    | "end_rod"
    | "entity_effect"
    | "explosion_emitter"
    | "explosion"
    | "gust"
    | "small_gust"
    | "gust_emitter_large"
    | "gust_emitter_small"
    | "sonic_boom"
    | "falling_dust"
    | "firework"
    | "fishing"
    | "flame"
    | "infested"
    | "cherry_leaves"
    | "sculk_soul"
    | "sculk_charge"
    | "sculk_charge_pop"
    | "soul_fire_flame"
    | "soul"
    | "flash"
    | "happy_villager"
    | "composter"
    | "heart"
    | "instant_effect"
    | "item"
    | "vibration"
    | "item_slime"
    | "item_cobweb"
    | "item_snowball"
    | "large_smoke"
    | "lava"
    | "mycelium"
    | "note"
    | "poof"
    | "portal"
    | "rain"
    | "smoke"
    | "white_smoke"
    | "sneeze"
    | "spit"
    | "squid_ink"
    | "sweep_attack"
    | "totem_of_undying"
    | "underwater"
    | "splash"
    | "witch"
    | "bubble_pop"
    | "current_down"
    | "bubble_column_up"
    | "nautilus"
    | "dolphin"
    | "campfire_cosy_smoke"
    | "campfire_signal_smoke"
    | "dripping_honey"
    | "falling_honey"
    | "landing_honey"
    | "falling_nectar"
    | "falling_spore_blossom"
    | "ash"
    | "crimson_spore"
    | "warped_spore"
    | "spore_blossom_air"
    | "dripping_obsidian_tear"
    | "falling_obsidian_tear"
    | "landing_obsidian_tear"
    | "reverse_portal"
    | "white_ash"
    | "small_flame"
    | "snowflake"
    | "dripping_dripstone_lava"
    | "falling_dripstone_lava"
    | "dripping_dripstone_water"
    | "falling_dripstone_water"
    | "glow_squid_ink"
    | "glow"
    | "wax_on"
    | "wax_off"
    | "electric_spark"
    | "scrape"
    | "shriek"
    | "egg_crack"
    | "dust_plume"
    | "trial_spawner_detected_player"
    | "trial_spawner_detected_player_ominous"
    | "vault_connection"
    | "dust_pillar"
    | "ominous_spawning"
    | "raid_omen"
    | "trial_omen";
  data: /* block */
  | number
    | /* block_marker */ number
    | /* falling_dust */ number
    | /* dust_pillar */ number
    | /* dust */ {
        red: number;
        green: number;
        blue: number;
        scale: number;
      }
    | /* dust_color_transition */ {
        fromGreen: number;
        toRed: number;
        toBlue: number;
        toGreen: number;
        scale: number;
        fromRed: number;
        fromBlue: number;
      }
    | /* entity_effect */ number
    | /* item */ Slot
    | /* sculk_charge */ number
    | /* shriek */ number
    | /* vibration */ {
        position: /* block */
        | never
          | /* entity */ {
              entityId: number;
              entity_eye_height: number;
            };
        position_type: "block" | "entity";
        ticks: number;
      };
};
type ingredient = Slot[];
type position = {
  x: number | boolean;
  z: number | boolean;
  y: number | boolean;
};
type soundSource =
  | "master"
  | "music"
  | "record"
  | "weather"
  | "block"
  | "hostile"
  | "neutral"
  | "player"
  | "ambient"
  | "voice";
type packedChunkPos = {
  x: number;
  z: number;
};
type previousMessages = {
  signature: /* 0 */ never | never;
  id: number;
}[];
type entityMetadataEntry = {
  key: number;
  type:
    | "byte"
    | "int"
    | "long"
    | "float"
    | "string"
    | "component"
    | "optional_component"
    | "item_stack"
    | "boolean"
    | "rotations"
    | "block_pos"
    | "optional_block_pos"
    | "direction"
    | "optional_uuid"
    | "block_state"
    | "optional_block_state"
    | "compound_tag"
    | "particle"
    | "particles"
    | "villager_data"
    | "optional_unsigned_int"
    | "pose"
    | "cat_variant"
    | "wolf_variant"
    | "frog_variant"
    | "optional_global_pos"
    | "painting_variant"
    | "sniffer_state"
    | "armadillo_state"
    | "vector3"
    | "quaternion";
  value: /* byte */
  | number
    | /* int */ number
    | /* long */ number
    | /* float */ number
    | /* string */ string
    | /* component */ never
    | /* optional_component */ (never | undefined)
    | /* item_stack */ Slot
    | /* boolean */ boolean
    | /* rotations */ {
        yaw: number;
        pitch: number;
        roll: number;
      }
    | /* block_pos */ never
    | /* optional_block_pos */ (never | undefined)
    | /* direction */ number
    | /* optional_uuid */ (string | undefined)
    | /* block_state */ number
    | /* optional_block_state */ optvarint
    | /* compound_tag */ never
    | /* particle */ Particle
    | /* particles */ Particle[]
    | /* villager_data */ {
        villagerType: number;
        level: number;
        villagerProfession: number;
      }
    | /* optional_unsigned_int */ optvarint
    | /* pose */ number
    | /* cat_variant */ number
    | /* wolf_variant */ {
        maybeInputLength: number;
        biomeLocation: /* 0 */ string;
        wildTexture: string;
        angryTexture: string;
        biomeHolders: /* 0 */ never | never;
        tameTexture: string;
      }
    | /* frog_variant */ number
    | /* optional_global_pos */ (string | undefined)
    | /* painting_variant */ {
        assetId: string;
        width: number;
        height: number;
      }
    | /* sniffer_state */ number
    | /* armadillo_state */ number
    | /* vector3 */ vec3f
    | /* quaternion */ vec4f;
};
type entityMetadata = never;
type minecraft_simple_recipe_format = {
  category: number;
};
type minecraft_smelting_format = {
  cookTime: number;
  group: string;
  category: number;
  ingredient: ingredient;
  result: Slot;
  experience: number;
};
type tags = {
  tagName: string;
  entries: number[];
}[];
type chunkBlockEntity = {
  nbtData: anonOptionalNbt;
  x: number;
  type: number;
  y: number;
  z: number;
};
type chat_session =
  | {
      publicKey: {
        expireTime: [number, number];
        keyBytes: never;
        keySignature: never;
      };
      uuid: string;
    }
  | undefined;
type game_profile = {
  name: string;
  properties: {
    signature: string | undefined;
    value: string;
    key: string;
  }[];
};
type command_node = {
  extraNodeData: /* 0 */
  | never
    | /* 1 */ {
        name: string;
      }
    | /* 2 */ {
        suggestionType: /* 1 */ string | never;
        parser:
          | "brigadier:bool"
          | "brigadier:float"
          | "brigadier:double"
          | "brigadier:integer"
          | "brigadier:long"
          | "brigadier:string"
          | "minecraft:entity"
          | "minecraft:game_profile"
          | "minecraft:block_pos"
          | "minecraft:column_pos"
          | "minecraft:vec3"
          | "minecraft:vec2"
          | "minecraft:block_state"
          | "minecraft:block_predicate"
          | "minecraft:item_stack"
          | "minecraft:item_predicate"
          | "minecraft:color"
          | "minecraft:component"
          | "minecraft:style"
          | "minecraft:message"
          | "minecraft:nbt"
          | "minecraft:nbt_tag"
          | "minecraft:nbt_path"
          | "minecraft:objective"
          | "minecraft:objective_criteria"
          | "minecraft:operation"
          | "minecraft:particle"
          | "minecraft:angle"
          | "minecraft:rotation"
          | "minecraft:scoreboard_slot"
          | "minecraft:score_holder"
          | "minecraft:swizzle"
          | "minecraft:team"
          | "minecraft:item_slot"
          | "minecraft:item_slots"
          | "minecraft:resource_location"
          | "minecraft:function"
          | "minecraft:entity_anchor"
          | "minecraft:int_range"
          | "minecraft:float_range"
          | "minecraft:dimension"
          | "minecraft:gamemode"
          | "minecraft:time"
          | "minecraft:resource_or_tag"
          | "minecraft:resource_or_tag_key"
          | "minecraft:resource"
          | "minecraft:resource_key"
          | "minecraft:template_mirror"
          | "minecraft:template_rotation"
          | "minecraft:heightmap"
          | "minecraft:loot_table"
          | "minecraft:loot_predicate"
          | "minecraft:loot_modifier"
          | "minecraft:uuid";
        name: string;
        properties: /* brigadier:bool */
        | never
          | /* brigadier:float */ {
              min: /* 1 */ number | never;
              max: /* 1 */ number | never;
              flags: {
                unused: number | boolean;
                max_present: number | boolean;
                min_present: number | boolean;
              };
            }
          | /* brigadier:double */ {
              min: /* 1 */ number | never;
              flags: {
                unused: number | boolean;
                max_present: number | boolean;
                min_present: number | boolean;
              };
              max: /* 1 */ number | never;
            }
          | /* brigadier:integer */ {
              flags: {
                unused: number | boolean;
                max_present: number | boolean;
                min_present: number | boolean;
              };
              max: /* 1 */ number | never;
              min: /* 1 */ number | never;
            }
          | /* brigadier:long */ {
              max: /* 1 */ [number, number] | never;
              flags: {
                unused: number | boolean;
                max_present: number | boolean;
                min_present: number | boolean;
              };
              min: /* 1 */ [number, number] | never;
            }
          | /* brigadier:string */ (
              | "SINGLE_WORD"
              | "QUOTABLE_PHRASE"
              | "GREEDY_PHRASE"
            )
          | /* minecraft:entity */ {
              unused: number | boolean;
              onlyAllowPlayers: number | boolean;
              onlyAllowEntities: number | boolean;
            }
          | /* minecraft:game_profile */ never
          | /* minecraft:block_pos */ never
          | /* minecraft:column_pos */ never
          | /* minecraft:vec3 */ never
          | /* minecraft:vec2 */ never
          | /* minecraft:block_state */ never
          | /* minecraft:block_predicate */ never
          | /* minecraft:item_stack */ never
          | /* minecraft:item_predicate */ never
          | /* minecraft:color */ never
          | /* minecraft:component */ never
          | /* minecraft:message */ never
          | /* minecraft:nbt */ never
          | /* minecraft:nbt_path */ never
          | /* minecraft:objective */ never
          | /* minecraft:objective_criteria */ never
          | /* minecraft:operation */ never
          | /* minecraft:particle */ never
          | /* minecraft:angle */ never
          | /* minecraft:rotation */ never
          | /* minecraft:scoreboard_slot */ never
          | /* minecraft:score_holder */ {
              unused: number | boolean;
              allowMultiple: number | boolean;
            }
          | /* minecraft:swizzle */ never
          | /* minecraft:team */ never
          | /* minecraft:item_slot */ never
          | /* minecraft:resource_location */ never
          | /* minecraft:function */ never
          | /* minecraft:entity_anchor */ never
          | /* minecraft:int_range */ never
          | /* minecraft:float_range */ never
          | /* minecraft:dimension */ never
          | /* minecraft:gamemode */ never
          | /* minecraft:time */ {
              min: number;
            }
          | /* minecraft:resource_or_tag */ {
              registry: string;
            }
          | /* minecraft:resource_or_tag_key */ {
              registry: string;
            }
          | /* minecraft:resource */ {
              registry: string;
            }
          | /* minecraft:resource_key */ {
              registry: string;
            }
          | /* minecraft:template_mirror */ never
          | /* minecraft:template_rotation */ never
          | /* minecraft:heightmap */ never
          | /* minecraft:uuid */ never;
      };
  flags: {
    unused: number | boolean;
    has_custom_suggestions: number | boolean;
    has_redirect_node: number | boolean;
    has_command: number | boolean;
    command_node_type: number | boolean;
  };
  children: number[];
  redirectNode: /* 1 */ number | never;
};
type packet_common_cookie_request = {
  cookie: string;
};
type packet_common_store_cookie = {
  key: string;
  value: ByteArray;
};
type packet_common_transfer = {
  host: string;
  port: number;
};
type packet_common_cookie_response = {
  value: ByteArray;
  key: string;
};
type packet_common_select_known_packs = {
  packs: {
    version: string;
    namespace: string;
    id: string;
  }[];
};
type packet_common_custom_report_details = {
  details: {
    key: string;
    value: string;
  }[];
};
type ServerLinkType =
  | "bug_report"
  | "community_guidelines"
  | "support"
  | "status"
  | "feedback"
  | "community"
  | "website"
  | "forums"
  | "news"
  | "announcements";
type packet_common_server_links = {
  links: {
    hasKnownType: boolean;
    unknownType: /* false */ never;
    knownType: /* true */ ServerLinkType;
    link: string;
  }[];
};

type Packet =
  | handshaking_to_client_packet
  | handshaking_to_server_packet
  | status_to_client_packet
  | status_to_server_packet
  | login_to_client_packet
  | login_to_server_packet
  | configuration_to_client_packet
  | configuration_to_server_packet
  | play_to_client_packet
  | play_to_server_packet;

type play_to_client_packet_explosion = {
  x: number;
  z: number;
  playerMotionY: number;
  playerMotionZ: number;
  block_interaction_type: number;
  y: number;
  small_explosion_particle: play_to_client_Particle;
  playerMotionX: number;
  large_explosion_particle: play_to_client_Particle;
  soundId: number;
  radius: number;
  affectedBlockOffsets: {
    y: number;
    x: number;
    z: number;
  }[];
};
type play_to_server_packet_block_dig = {
  face: number;
  sequence: number;
  status: number;
  location: never;
};
type play_to_server_packet_displayed_recipe = {
  recipeId: string;
};
type play_to_server_packet_enchant_item = {
  windowId: number;
  enchantment: number;
};
type play_to_server_packet_select_trade = {
  slot: number;
};
type play_to_client_packet_declare_commands = {
  nodes: play_to_client_command_node[];
  rootIndex: number;
};
type play_to_server_packet_ping_request = {
  id: [number, number];
};
type play_to_client_packet_world_event = {
  effectId: number;
  data: number;
  location: never;
  global: boolean;
};
type play_to_server_packet_update_sign = {
  location: never;
  text4: string;
  text1: string;
  text3: string;
  isFrontText: boolean;
  text2: string;
};
type play_to_client_packet_block_break_animation = {
  destroyStage: number;
  location: never;
  entityId: number;
};
type play_to_client_soundSource = soundSource;
type play_to_client_packet_step_tick = {
  tick_steps: number;
};
type play_to_client_packet_set_title_text = {
  text: never;
};
type configuration_to_client_packet_tags = {
  tags: {
    tagType: string;
    tags: configuration_to_client_tags;
  }[];
};
type play_to_client_command_node = command_node;
type play_to_client_packet_custom_payload = {
  channel: string;
  data: buffer;
};
type play_to_server_packet_recipe_book = {
  filterActive: boolean;
  bookId: number;
  bookOpen: boolean;
};
type play_to_server_packet_block_place = {
  direction: number;
  cursorY: number;
  hand: number;
  insideBlock: boolean;
  location: never;
  cursorZ: number;
  sequence: number;
  cursorX: number;
};
type play_to_server_packet_position = {
  onGround: boolean;
  x: number;
  y: number;
  z: number;
};
type configuration_to_client_packet_remove_resource_pack = {
  uuid: string | undefined;
};
type play_to_client_packet_game_state_change = {
  reason: number;
  gameMode: number;
};
type play_to_client_packet_vehicle_move = {
  pitch: number;
  y: number;
  z: number;
  x: number;
  yaw: number;
};
type play_to_client_packet_entity_equipment = {
  entityId: number;
  equipments: never;
};
type play_to_client_packet_entity_look = {
  pitch: number;
  onGround: boolean;
  entityId: number;
  yaw: number;
};
type play_to_client_packet_open_sign_entity = {
  location: never;
  isFrontText: boolean;
};
type play_to_server_packet_query_block_nbt = {
  location: never;
  transactionId: number;
};
type play_to_client_packet_sound_effect = {
  y: number;
  pitch: number;
  soundEvent: /* 0 */
  | {
        resource: string;
        range: number | undefined;
      }
    | never;
  soundCategory: play_to_client_soundSource;
  x: number;
  volume: number;
  seed: [number, number];
  soundId: number;
  z: number;
};
type play_to_server_packet_tab_complete = {
  transactionId: number;
  text: string;
};
type configuration_to_client_packet_common_store_cookie =
  packet_common_store_cookie;
type play_to_server_packet_name_item = {
  name: string;
};
type play_to_client_ChatTypeParameterType = "content" | "sender" | "target";
type play_to_client_packet_trade_list = {
  isRegularVillager: boolean;
  canRestock: boolean;
  windowId: number;
  experience: number;
  trades: {
    priceMultiplier: number;
    inputItem1: {
      components: play_to_client_SlotComponent[];
      itemCount: number;
      itemId: number;
      addedComponentCount: number;
    };
    demand: number;
    xp: number;
    inputItem2:
      | {
          addedComponentCount: number;
          components: play_to_client_SlotComponent[];
          itemId: number;
          itemCount: number;
        }
      | undefined;
    maximumNbTradeUses: number;
    outputItem: play_to_client_Slot;
    tradeDisabled: boolean;
    nbTradeUses: number;
    specialPrice: number;
  }[];
  villagerLevel: number;
};
type play_to_client_packet_position = {
  teleportId: number;
  x: number;
  y: number;
  yaw: number;
  pitch: number;
  flags: number;
  z: number;
};
type play_to_server_packet_configuration_acknowledged = Record<never, never> & {
  __type: "empty_object";
};
type play_to_client_packet_kick_disconnect = {
  reason: never;
};
type play_to_client_packet_player_remove = {
  players: string[];
};
type login_to_server_packet_login_acknowledged = Record<never, never> & {
  __type: "empty_object";
};
type play_to_server_packet_look = {
  pitch: number;
  yaw: number;
  onGround: boolean;
};
type status_to_server_packet_ping_start = Record<never, never> & {
  __type: "empty_object";
};
type play_to_client_packet_remove_resource_pack = {
  uuid: string | undefined;
};
type play_to_server_packet_chat_message = {
  message: string;
  timestamp: [number, number];
  signature: never | undefined;
  offset: number;
  acknowledged: never;
  salt: [number, number];
};
type play_to_client_packet_entity_teleport = {
  x: number;
  z: number;
  yaw: number;
  pitch: number;
  entityId: number;
  onGround: boolean;
  y: number;
};
type configuration_to_client_packet_common_server_links =
  packet_common_server_links;
type play_to_client_packet_update_health = {
  food: number;
  foodSaturation: number;
  health: number;
};
type login_to_server_packet = {
  name:
    | "login_start"
    | "encryption_begin"
    | "login_plugin_response"
    | "login_acknowledged"
    | "cookie_response";
  params: /* login_start */
  | login_to_server_packet_login_start
    | /* encryption_begin */ login_to_server_packet_encryption_begin
    | /* login_plugin_response */ login_to_server_packet_login_plugin_response
    | /* login_acknowledged */ login_to_server_packet_login_acknowledged
    | /* cookie_response */ login_to_server_packet_common_cookie_response;
};
type play_to_server_packet_set_slot_state = {
  state: boolean;
  window_id: number;
  slot_id: number;
};
type play_to_client_packet_add_resource_pack = {
  promptMessage: never | undefined;
  url: string;
  hash: string;
  uuid: string;
  forced: boolean;
};
type login_to_server_packet_common_cookie_response =
  packet_common_cookie_response;
type play_to_client_packet_acknowledge_player_digging = {
  sequenceId: number;
};
type play_to_server_packet_abilities = {
  flags: number;
};
type handshaking_to_server_packet = {
  name: "set_protocol" | "legacy_server_list_ping";
  params: /* set_protocol */
  | handshaking_to_server_packet_set_protocol
    | /* legacy_server_list_ping */ handshaking_to_server_packet_legacy_server_list_ping;
};
type play_to_server_packet_keep_alive = {
  keepAliveId: [number, number];
};
type play_to_client_packet_open_horse_window = {
  entityId: number;
  nbSlots: number;
  windowId: number;
};
type play_to_client_tags = tags;
type play_to_client_packet_block_change = {
  type: number;
  location: never;
};
type configuration_to_client_tags = tags;
type play_to_client_packet_login = {
  worldNames: string[];
  simulationDistance: number;
  enableRespawnScreen: boolean;
  worldState: play_to_client_SpawnInfo;
  maxPlayers: number;
  entityId: number;
  viewDistance: number;
  isHardcore: boolean;
  doLimitedCrafting: boolean;
  reducedDebugInfo: boolean;
  enforcesSecureChat: boolean;
};
type login_to_client_packet_common_cookie_request =
  packet_common_cookie_request;
type play_to_client_packet_world_border_center = {
  x: number;
  z: number;
};
type play_to_client_packet_set_projectile_power = {
  accelerationPower: number;
  id: number;
};
type play_to_client_packet_update_time = {
  age: [number, number];
  time: [number, number];
};
type play_to_client_packet_common_transfer = packet_common_transfer;
type configuration_to_server_packet_common_cookie_response =
  packet_common_cookie_response;
type configuration_to_server_packet_common_custom_report_details =
  packet_common_custom_report_details;
type login_to_server_packet_login_plugin_response = {
  data: buffer | undefined;
  messageId: number;
};
type configuration_to_server_packet_settings = {
  mainHand: number;
  chatFlags: number;
  skinParts: number;
  enableServerListing: boolean;
  locale: string;
  viewDistance: number;
  chatColors: boolean;
  enableTextFiltering: boolean;
};
type play_to_client_packet_boss_bar = {
  entityUUID: string;
  color: /* 0 */ number | /* 4 */ number | never;
  action: number;
  title: /* 0 */ never | /* 3 */ never | never;
  health: /* 0 */ number | /* 2 */ number | never;
  dividers: /* 0 */ number | /* 4 */ number | never;
  flags: /* 0 */ number | /* 5 */ number | never;
};
type play_to_client_packet_craft_progress_bar = {
  value: number;
  property: number;
  windowId: number;
};
type play_to_client_packet_ping_response = {
  id: [number, number];
};
type play_to_client_packet_unlock_recipes = {
  recipes2: /* 0 */ string[] | never;
  filteringCraftable: boolean;
  blastFurnaceOpen: boolean;
  filteringBlastFurnace: boolean;
  filteringSmeltable: boolean;
  smokerBookOpen: boolean;
  action: number;
  craftingBookOpen: boolean;
  smeltingBookOpen: boolean;
  filteringSmoker: boolean;
  recipes1: string[];
};
type play_to_client_SlotComponent = SlotComponent;
type play_to_server_packet_edit_book = {
  hand: number;
  pages: string[];
  title: string | undefined;
};
type configuration_to_server_packet_pong = {
  id: number;
};
type configuration_to_server_packet_resource_pack_receive = {
  uuid: string;
  result: number;
};
type play_to_client_packet_spawn_entity = {
  objectUUID: string;
  yaw: number;
  headPitch: number;
  objectData: number;
  y: number;
  pitch: number;
  velocityX: number;
  velocityZ: number;
  x: number;
  velocityY: number;
  type: number;
  entityId: number;
  z: number;
};
type play_to_client_packet_stop_sound = {
  flags: number;
  sound: /* 2 */ string | /* 3 */ string | never;
  source: /* 1 */ number | /* 3 */ number | never;
};
type configuration_to_server_packet_keep_alive = {
  keepAliveId: [number, number];
};
type play_to_server_packet_advancement_tab = {
  tabId: /* 0 */ string | /* 1 */ never;
  action: number;
};
type play_to_client_vec3f64 = vec3f64;
type play_to_client_Slot = Slot;
type play_to_server_packet_lock_difficulty = {
  locked: boolean;
};
type play_to_client_packet_ping = {
  id: number;
};
type configuration_to_server_packet = {
  name:
    | "settings"
    | "cookie_response"
    | "custom_payload"
    | "finish_configuration"
    | "keep_alive"
    | "pong"
    | "resource_pack_receive"
    | "select_known_packs"
    | "custom_report_details"
    | "server_links";
  params: /* settings */
  | configuration_to_server_packet_settings
    | /* cookie_response */ configuration_to_server_packet_common_cookie_response
    | /* custom_payload */ configuration_to_server_packet_custom_payload
    | /* finish_configuration */ configuration_to_server_packet_finish_configuration
    | /* keep_alive */ configuration_to_server_packet_keep_alive
    | /* pong */ configuration_to_server_packet_pong
    | /* resource_pack_receive */ configuration_to_server_packet_resource_pack_receive
    | /* select_known_packs */ configuration_to_server_packet_common_select_known_packs
    | /* custom_report_details */ configuration_to_server_packet_common_custom_report_details
    | /* server_links */ configuration_to_server_packet_common_server_links;
};
type play_to_client_packet_craft_recipe_response = {
  windowId: number;
  recipe: string;
};
type play_to_server_packet_common_cookie_response =
  packet_common_cookie_response;
type play_to_client_ChatTypes = {
  registryIndex: number;
};
type configuration_to_client_packet_feature_flags = {
  features: string[];
};
type play_to_client_ChatType = {
  style: never;
  translationKey: string;
  parameters: play_to_client_ChatTypeParameterType[];
};
type play_to_client_anonOptionalNbt = anonOptionalNbt;
type login_to_client_packet_login_plugin_request = {
  data: buffer;
  messageId: number;
  channel: string;
};
type configuration_to_client_packet_keep_alive = {
  keepAliveId: [number, number];
};
type play_to_client_packet_chunk_batch_finished = {
  batchSize: number;
};
type play_to_client_packet_clear_titles = {
  reset: boolean;
};
type play_to_client_packet_rel_entity_move = {
  entityId: number;
  dZ: number;
  dY: number;
  onGround: boolean;
  dX: number;
};
type play_to_client_previousMessages = previousMessages;
type play_to_client_ByteArray = ByteArray;
type play_to_server_packet_chat_command = {
  command: string;
};
type play_to_client_packet_player_info = {
  action: number;
  data: {
    uuid: string;
    listed: /* 8 */
    | boolean
      | /* 9 */ boolean
      | /* 10 */ boolean
      | /* 11 */ boolean
      | /* 12 */ boolean
      | /* 13 */ boolean
      | /* 14 */ boolean
      | /* 15 */ boolean
      | /* 24 */ boolean
      | /* 25 */ boolean
      | /* 26 */ boolean
      | /* 27 */ boolean
      | /* 28 */ boolean
      | /* 29 */ boolean
      | /* 30 */ boolean
      | /* 31 */ boolean
      | /* 40 */ boolean
      | /* 41 */ boolean
      | /* 42 */ boolean
      | /* 43 */ boolean
      | /* 44 */ boolean
      | /* 45 */ boolean
      | /* 46 */ boolean
      | /* 47 */ boolean
      | /* 56 */ boolean
      | /* 57 */ boolean
      | /* 58 */ boolean
      | /* 59 */ boolean
      | /* 60 */ boolean
      | /* 61 */ boolean
      | /* 62 */ boolean
      | /* 63 */ boolean
      | never;
    chatSession: /* 2 */
    | play_to_client_chat_session
      | /* 3 */ play_to_client_chat_session
      | /* 6 */ play_to_client_chat_session
      | /* 7 */ play_to_client_chat_session
      | /* 10 */ play_to_client_chat_session
      | /* 11 */ play_to_client_chat_session
      | /* 14 */ play_to_client_chat_session
      | /* 15 */ play_to_client_chat_session
      | /* 18 */ play_to_client_chat_session
      | /* 19 */ play_to_client_chat_session
      | /* 22 */ play_to_client_chat_session
      | /* 23 */ play_to_client_chat_session
      | /* 26 */ play_to_client_chat_session
      | /* 27 */ play_to_client_chat_session
      | /* 30 */ play_to_client_chat_session
      | /* 31 */ play_to_client_chat_session
      | /* 34 */ play_to_client_chat_session
      | /* 35 */ play_to_client_chat_session
      | /* 38 */ play_to_client_chat_session
      | /* 39 */ play_to_client_chat_session
      | /* 42 */ play_to_client_chat_session
      | /* 43 */ play_to_client_chat_session
      | /* 46 */ play_to_client_chat_session
      | /* 47 */ play_to_client_chat_session
      | /* 50 */ play_to_client_chat_session
      | /* 51 */ play_to_client_chat_session
      | /* 54 */ play_to_client_chat_session
      | /* 55 */ play_to_client_chat_session
      | /* 58 */ play_to_client_chat_session
      | /* 59 */ play_to_client_chat_session
      | /* 62 */ play_to_client_chat_session
      | /* 63 */ play_to_client_chat_session
      | never;
    latency: /* 16 */
    | number
      | /* 17 */ number
      | /* 18 */ number
      | /* 19 */ number
      | /* 20 */ number
      | /* 21 */ number
      | /* 22 */ number
      | /* 23 */ number
      | /* 24 */ number
      | /* 25 */ number
      | /* 26 */ number
      | /* 27 */ number
      | /* 28 */ number
      | /* 29 */ number
      | /* 30 */ number
      | /* 31 */ number
      | /* 48 */ number
      | /* 49 */ number
      | /* 50 */ number
      | /* 51 */ number
      | /* 52 */ number
      | /* 53 */ number
      | /* 54 */ number
      | /* 55 */ number
      | /* 56 */ number
      | /* 57 */ number
      | /* 58 */ number
      | /* 59 */ number
      | /* 60 */ number
      | /* 61 */ number
      | /* 62 */ number
      | /* 63 */ number
      | never;
    gamemode: /* 4 */
    | number
      | /* 5 */ number
      | /* 6 */ number
      | /* 7 */ number
      | /* 12 */ number
      | /* 13 */ number
      | /* 14 */ number
      | /* 15 */ number
      | /* 20 */ number
      | /* 21 */ number
      | /* 22 */ number
      | /* 23 */ number
      | /* 28 */ number
      | /* 29 */ number
      | /* 30 */ number
      | /* 31 */ number
      | /* 36 */ number
      | /* 37 */ number
      | /* 38 */ number
      | /* 39 */ number
      | /* 44 */ number
      | /* 45 */ number
      | /* 46 */ number
      | /* 47 */ number
      | /* 52 */ number
      | /* 53 */ number
      | /* 54 */ number
      | /* 55 */ number
      | /* 60 */ number
      | /* 61 */ number
      | /* 62 */ number
      | /* 63 */ number
      | never;
    displayName: /* 32 */
    | (never | undefined)
      | /* 33 */ (never | undefined)
      | /* 34 */ (never | undefined)
      | /* 35 */ (never | undefined)
      | /* 36 */ (never | undefined)
      | /* 37 */ (never | undefined)
      | /* 38 */ (never | undefined)
      | /* 39 */ (never | undefined)
      | /* 40 */ (never | undefined)
      | /* 41 */ (never | undefined)
      | /* 42 */ (never | undefined)
      | /* 43 */ (never | undefined)
      | /* 44 */ (never | undefined)
      | /* 45 */ (never | undefined)
      | /* 46 */ (never | undefined)
      | /* 47 */ (never | undefined)
      | /* 48 */ (never | undefined)
      | /* 49 */ (never | undefined)
      | /* 50 */ (never | undefined)
      | /* 51 */ (never | undefined)
      | /* 52 */ (never | undefined)
      | /* 53 */ (never | undefined)
      | /* 54 */ (never | undefined)
      | /* 55 */ (never | undefined)
      | /* 56 */ (never | undefined)
      | /* 57 */ (never | undefined)
      | /* 58 */ (never | undefined)
      | /* 59 */ (never | undefined)
      | /* 60 */ (never | undefined)
      | /* 61 */ (never | undefined)
      | /* 62 */ (never | undefined)
      | /* 63 */ (never | undefined)
      | never;
    player: /* 1 */
    | play_to_client_game_profile
      | /* 3 */ play_to_client_game_profile
      | /* 5 */ play_to_client_game_profile
      | /* 7 */ play_to_client_game_profile
      | /* 9 */ play_to_client_game_profile
      | /* 11 */ play_to_client_game_profile
      | /* 13 */ play_to_client_game_profile
      | /* 15 */ play_to_client_game_profile
      | /* 17 */ play_to_client_game_profile
      | /* 19 */ play_to_client_game_profile
      | /* 21 */ play_to_client_game_profile
      | /* 23 */ play_to_client_game_profile
      | /* 25 */ play_to_client_game_profile
      | /* 27 */ play_to_client_game_profile
      | /* 29 */ play_to_client_game_profile
      | /* 31 */ play_to_client_game_profile
      | /* 33 */ play_to_client_game_profile
      | /* 35 */ play_to_client_game_profile
      | /* 37 */ play_to_client_game_profile
      | /* 39 */ play_to_client_game_profile
      | /* 41 */ play_to_client_game_profile
      | /* 43 */ play_to_client_game_profile
      | /* 45 */ play_to_client_game_profile
      | /* 47 */ play_to_client_game_profile
      | /* 49 */ play_to_client_game_profile
      | /* 51 */ play_to_client_game_profile
      | /* 53 */ play_to_client_game_profile
      | /* 55 */ play_to_client_game_profile
      | /* 57 */ play_to_client_game_profile
      | /* 59 */ play_to_client_game_profile
      | /* 61 */ play_to_client_game_profile
      | /* 63 */ play_to_client_game_profile
      | never;
  }[];
};
type play_to_client_packet_start_configuration = Record<never, never> & {
  __type: "empty_object";
};
type play_to_server_Slot = Slot;
type play_to_client_packet_declare_recipes = {
  recipes: {
    data: /* minecraft:crafting_shapeless */
    | {
          ingredients: play_to_client_ingredient[];
          category: number;
          result: play_to_client_Slot;
          group: string;
        }
      | /* minecraft:crafting_shaped */ {
          result: play_to_client_Slot;
          ingredients: play_to_client_ingredient[][];
          category: number;
          showNotification: boolean;
          width: number;
          group: string;
          height: number;
        }
      | /* minecraft:crafting_special_armordye */ play_to_client_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_bookcloning */ play_to_client_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_mapcloning */ play_to_client_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_mapextending */ play_to_client_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_firework_rocket */ play_to_client_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_firework_star */ play_to_client_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_firework_star_fade */ play_to_client_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_repairitem */ play_to_client_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_tippedarrow */ play_to_client_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_bannerduplicate */ play_to_client_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_banneraddpattern */ play_to_client_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_shielddecoration */ play_to_client_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_shulkerboxcoloring */ play_to_client_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_suspiciousstew */ play_to_client_minecraft_simple_recipe_format
      | /* minecraft:smelting */ play_to_client_minecraft_smelting_format
      | /* minecraft:blasting */ play_to_client_minecraft_smelting_format
      | /* minecraft:smoking */ play_to_client_minecraft_smelting_format
      | /* minecraft:campfire_cooking */ play_to_client_minecraft_smelting_format
      | /* minecraft:stonecutting */ {
          group: string;
          result: play_to_client_Slot;
          ingredient: play_to_client_ingredient;
        }
      | /* minecraft:smithing_transform */ {
          base: play_to_client_ingredient;
          template: play_to_client_ingredient;
          result: play_to_client_Slot;
          addition: play_to_client_ingredient;
        }
      | /* minecraft:smithing_trim */ {
          addition: play_to_client_ingredient;
          template: play_to_client_ingredient;
          base: play_to_client_ingredient;
        }
      | /* minecraft:crafting_decorated_pot */ play_to_client_minecraft_simple_recipe_format;
    type:
      | "minecraft:crafting_shaped"
      | "minecraft:crafting_shapeless"
      | "minecraft:crafting_special_armordye"
      | "minecraft:crafting_special_bookcloning"
      | "minecraft:crafting_special_mapcloning"
      | "minecraft:crafting_special_mapextending"
      | "minecraft:crafting_special_firework_rocket"
      | "minecraft:crafting_special_firework_star"
      | "minecraft:crafting_special_firework_star_fade"
      | "minecraft:crafting_special_tippedarrow"
      | "minecraft:crafting_special_bannerduplicate"
      | "minecraft:crafting_special_shielddecoration"
      | "minecraft:crafting_special_shulkerboxcoloring"
      | "minecraft:crafting_special_suspiciousstew"
      | "minecraft:crafting_special_repairitem"
      | "minecraft:smelting"
      | "minecraft:blasting"
      | "minecraft:smoking"
      | "minecraft:campfire_cooking"
      | "minecraft:stonecutting"
      | "minecraft:smithing_transform"
      | "minecraft:smithing_trim"
      | "minecraft:crafting_decorated_pot";
    name: string;
  }[];
};
type login_to_client_packet_compress = {
  threshold: number;
};
type play_to_client_packet_difficulty = {
  difficultyLocked: boolean;
  difficulty: number;
};
type login_to_server_packet_login_start = {
  playerUUID: string;
  username: string;
};
type play_to_server_packet_flying = {
  onGround: boolean;
};
type configuration_to_client_packet_common_select_known_packs =
  packet_common_select_known_packs;
type play_to_client_packet_window_items = {
  windowId: number;
  items: play_to_client_Slot[];
  stateId: number;
  carriedItem: play_to_client_Slot;
};
type play_to_client_packet_respawn = {
  copyMetadata: number;
  worldState: play_to_client_SpawnInfo;
};
type play_to_client_minecraft_simple_recipe_format =
  minecraft_simple_recipe_format;
type configuration_to_server_packet_finish_configuration = Record<
  never,
  never
> & { __type: "empty_object" };
type play_to_client_packet_animation = {
  animation: number;
  entityId: number;
};
type play_to_client_packet_set_slot = {
  stateId: number;
  windowId: number;
  slot: number;
  item: play_to_client_Slot;
};
type play_to_client_packet_scoreboard_display_objective = {
  name: string;
  position: number;
};
type play_to_client_packet_experience = {
  level: number;
  totalExperience: number;
  experienceBar: number;
};
type play_to_server_packet_query_entity_nbt = {
  transactionId: number;
  entityId: number;
};
type play_to_client_packet_death_combat_event = {
  message: never;
  playerId: number;
};
type play_to_server_packet_custom_payload = {
  channel: string;
  data: buffer;
};
type play_to_client_packet_update_view_distance = {
  viewDistance: number;
};
type play_to_server_packet_update_jigsaw_block = {
  location: never;
  placement_priority: number;
  target: string;
  jointType: string;
  name: string;
  pool: string;
  selection_priority: number;
  finalState: string;
};
type status_to_client_packet = {
  params: /* server_info */
  status_to_client_packet_server_info | /* ping */ status_to_client_packet_ping;
  name: "server_info" | "ping";
};
type play_to_client_packet_set_cooldown = {
  itemID: number;
  cooldownTicks: number;
};
type play_to_client_packet_collect = {
  collectedEntityId: number;
  collectorEntityId: number;
  pickupItemCount: number;
};
type status_to_server_packet = {
  name: "ping_start" | "ping";
  params: /* ping_start */
  status_to_server_packet_ping_start | /* ping */ status_to_server_packet_ping;
};
type play_to_client_packet_initialize_world_border = {
  z: number;
  speed: number;
  warningTime: number;
  newDiameter: number;
  x: number;
  warningBlocks: number;
  portalTeleportBoundary: number;
  oldDiameter: number;
};
type play_to_client_packet_entity_velocity = {
  entityId: number;
  velocityX: number;
  velocityZ: number;
  velocityY: number;
};
type play_to_client_packedChunkPos = packedChunkPos;
type play_to_client_packet_set_ticking_state = {
  tick_rate: number;
  is_frozen: boolean;
};
type play_to_client_packet_chunk_batch_start = Record<never, never> & {
  __type: "empty_object";
};
type play_to_client_packet_spawn_entity_experience_orb = {
  entityId: number;
  x: number;
  z: number;
  count: number;
  y: number;
};
type play_to_client_packet_action_bar = {
  text: never;
};
type play_to_client_packet_reset_score = {
  objective_name: string | undefined;
  entity_name: string;
};
type play_to_client_packet_playerlist_header = {
  footer: never;
  header: never;
};
type configuration_to_server_packet_common_server_links =
  packet_common_server_links;
type play_to_client_packet_tab_complete = {
  matches: {
    tooltip: never | undefined;
    match: string;
  }[];
  start: number;
  transactionId: number;
  length: number;
};
type handshaking_to_client_packet = {
  name: never;
  params: never;
};
type play_to_client_ingredient = ingredient;
type status_to_client_packet_server_info = {
  response: string;
};
type play_to_server_packet_debug_sample_subscription = {
  type: number;
};
type play_to_server_packet_teleport_confirm = {
  teleportId: number;
};
type handshaking_to_server_packet_set_protocol = {
  serverHost: string;
  serverPort: number;
  protocolVersion: number;
  nextState: number;
};
type play_to_client_packet_remove_entity_effect = {
  effectId: number;
  entityId: number;
};
type login_to_client_packet_encryption_begin = {
  serverId: string;
  verifyToken: never;
  publicKey: never;
  shouldAuthenticate: boolean;
};
type login_to_server_packet_encryption_begin = {
  verifyToken: never;
  sharedSecret: never;
};
type play_to_client_SpawnInfo = {
  hashedSeed: [number, number];
  isDebug: boolean;
  previousGamemode: number;
  isFlat: boolean;
  death:
    | {
        location: never;
        dimensionName: string;
      }
    | undefined;
  dimension: number;
  portalCooldown: number;
  name: string;
  gamemode: "survival" | "creative" | "adventure" | "spectator";
};
type play_to_client_packet_debug_sample = {
  type: number;
  sample: [number, number][];
};
type play_to_client_packet_face_player = {
  z: number;
  isEntity: boolean;
  feet_eyes: number;
  entityId: /* true */ number | never;
  x: number;
  y: number;
  entity_feet_eyes: /* true */ number | never;
};
type play_to_client_packet_world_border_size = {
  diameter: number;
};
type play_to_server_packet_spectate = {
  target: string;
};
type play_to_client_packet_scoreboard_score = {
  scoreName: string;
  styling: /* 1 */ never | /* 2 */ never | never;
  itemName: string;
  display_name: never | undefined;
  value: number;
  number_format: number | undefined;
};
type play_to_server_packet_chat_session_update = {
  publicKey: play_to_server_ByteArray;
  expireTime: [number, number];
  signature: play_to_server_ByteArray;
  sessionUUID: string;
};
type play_to_client_packet_chat_suggestions = {
  entries: string[];
  action: number;
};
type play_to_server_packet_pong = {
  id: number;
};
type configuration_to_client_packet_custom_payload = {
  channel: string;
  data: buffer;
};
type play_to_server_ByteArray = ByteArray;
type play_to_client_packet_update_light = {
  chunkZ: number;
  blockLight: number[][];
  chunkX: number;
  skyLightMask: [number, number][];
  emptyBlockLightMask: [number, number][];
  skyLight: number[][];
  blockLightMask: [number, number][];
  emptySkyLightMask: [number, number][];
};
type play_to_client_packet_entity_move_look = {
  dX: number;
  pitch: number;
  yaw: number;
  dZ: number;
  entityId: number;
  onGround: boolean;
  dY: number;
};
type play_to_client_packet_enter_combat_event = Record<never, never> & {
  __type: "empty_object";
};
type play_to_client_packet_advancements = {
  identifiers: string[];
  advancementMapping: {
    key: string;
    value: {
      displayData:
        | {
            backgroundTexture: /* 1 */ string | never;
            description: never;
            xCord: number;
            title: never;
            flags: {
              unused: number | boolean;
              hidden: number | boolean;
              show_toast: number | boolean;
              has_background_texture: number | boolean;
            };
            icon: play_to_client_Slot;
            frameType: number;
            yCord: number;
          }
        | undefined;
      sendsTelemtryData: boolean;
      parentId: string | undefined;
      requirements: string[][];
    };
  }[];
  reset: boolean;
  progressMapping: {
    key: string;
    value: {
      criterionProgress: [number, number] | undefined;
      criterionIdentifier: string;
    }[];
  }[];
};
type play_to_client_packet_entity_head_rotation = {
  headYaw: number;
  entityId: number;
};
type play_to_server_packet = {
  name:
    | "teleport_confirm"
    | "query_block_nbt"
    | "set_difficulty"
    | "message_acknowledgement"
    | "chat_command"
    | "chat_command_signed"
    | "chat_message"
    | "chat_session_update"
    | "chunk_batch_received"
    | "client_command"
    | "settings"
    | "tab_complete"
    | "configuration_acknowledged"
    | "enchant_item"
    | "window_click"
    | "close_window"
    | "set_slot_state"
    | "cookie_response"
    | "custom_payload"
    | "debug_sample_subscription"
    | "edit_book"
    | "query_entity_nbt"
    | "use_entity"
    | "generate_structure"
    | "keep_alive"
    | "lock_difficulty"
    | "position"
    | "position_look"
    | "look"
    | "flying"
    | "vehicle_move"
    | "steer_boat"
    | "pick_item"
    | "ping_request"
    | "craft_recipe_request"
    | "abilities"
    | "block_dig"
    | "entity_action"
    | "steer_vehicle"
    | "pong"
    | "recipe_book"
    | "displayed_recipe"
    | "name_item"
    | "resource_pack_receive"
    | "advancement_tab"
    | "select_trade"
    | "set_beacon_effect"
    | "held_item_slot"
    | "update_command_block"
    | "update_command_block_minecart"
    | "set_creative_slot"
    | "update_jigsaw_block"
    | "update_structure_block"
    | "update_sign"
    | "arm_animation"
    | "spectate"
    | "block_place"
    | "use_item";
  params: /* teleport_confirm */
  | play_to_server_packet_teleport_confirm
    | /* query_block_nbt */ play_to_server_packet_query_block_nbt
    | /* set_difficulty */ play_to_server_packet_set_difficulty
    | /* message_acknowledgement */ play_to_server_packet_message_acknowledgement
    | /* chat_command */ play_to_server_packet_chat_command
    | /* chat_command_signed */ play_to_server_packet_chat_command_signed
    | /* chat_message */ play_to_server_packet_chat_message
    | /* chat_session_update */ play_to_server_packet_chat_session_update
    | /* chunk_batch_received */ play_to_server_packet_chunk_batch_received
    | /* client_command */ play_to_server_packet_client_command
    | /* settings */ play_to_server_packet_settings
    | /* tab_complete */ play_to_server_packet_tab_complete
    | /* configuration_acknowledged */ play_to_server_packet_configuration_acknowledged
    | /* enchant_item */ play_to_server_packet_enchant_item
    | /* window_click */ play_to_server_packet_window_click
    | /* close_window */ play_to_server_packet_close_window
    | /* set_slot_state */ play_to_server_packet_set_slot_state
    | /* cookie_response */ play_to_server_packet_common_cookie_response
    | /* custom_payload */ play_to_server_packet_custom_payload
    | /* edit_book */ play_to_server_packet_edit_book
    | /* query_entity_nbt */ play_to_server_packet_query_entity_nbt
    | /* use_entity */ play_to_server_packet_use_entity
    | /* generate_structure */ play_to_server_packet_generate_structure
    | /* keep_alive */ play_to_server_packet_keep_alive
    | /* lock_difficulty */ play_to_server_packet_lock_difficulty
    | /* position */ play_to_server_packet_position
    | /* position_look */ play_to_server_packet_position_look
    | /* look */ play_to_server_packet_look
    | /* flying */ play_to_server_packet_flying
    | /* vehicle_move */ play_to_server_packet_vehicle_move
    | /* steer_boat */ play_to_server_packet_steer_boat
    | /* pick_item */ play_to_server_packet_pick_item
    | /* ping_request */ play_to_server_packet_ping_request
    | /* craft_recipe_request */ play_to_server_packet_craft_recipe_request
    | /* abilities */ play_to_server_packet_abilities
    | /* block_dig */ play_to_server_packet_block_dig
    | /* entity_action */ play_to_server_packet_entity_action
    | /* steer_vehicle */ play_to_server_packet_steer_vehicle
    | /* pong */ play_to_server_packet_pong
    | /* recipe_book */ play_to_server_packet_recipe_book
    | /* displayed_recipe */ play_to_server_packet_displayed_recipe
    | /* name_item */ play_to_server_packet_name_item
    | /* resource_pack_receive */ play_to_server_packet_resource_pack_receive
    | /* advancement_tab */ play_to_server_packet_advancement_tab
    | /* select_trade */ play_to_server_packet_select_trade
    | /* set_beacon_effect */ play_to_server_packet_set_beacon_effect
    | /* held_item_slot */ play_to_server_packet_held_item_slot
    | /* update_command_block */ play_to_server_packet_update_command_block
    | /* update_command_block_minecart */ play_to_server_packet_update_command_block_minecart
    | /* set_creative_slot */ play_to_server_packet_set_creative_slot
    | /* update_jigsaw_block */ play_to_server_packet_update_jigsaw_block
    | /* update_structure_block */ play_to_server_packet_update_structure_block
    | /* update_sign */ play_to_server_packet_update_sign
    | /* arm_animation */ play_to_server_packet_arm_animation
    | /* spectate */ play_to_server_packet_spectate
    | /* block_place */ play_to_server_packet_block_place
    | /* use_item */ play_to_server_packet_use_item;
};
type play_to_server_packet_update_command_block_minecart = {
  entityId: number;
  command: string;
  track_output: boolean;
};
type play_to_server_packet_window_click = {
  windowId: number;
  mode: number;
  changedSlots: {
    item: play_to_server_Slot;
    location: number;
  }[];
  stateId: number;
  cursorItem: play_to_server_Slot;
  mouseButton: number;
  slot: number;
};
type play_to_server_packet_position_look = {
  yaw: number;
  onGround: boolean;
  x: number;
  z: number;
  pitch: number;
  y: number;
};
type play_to_server_packet_set_beacon_effect = {
  primary_effect: number | undefined;
  secondary_effect: number | undefined;
};
type play_to_client_packet_player_chat = {
  plainMessage: string;
  timestamp: [number, number];
  senderUuid: string;
  type: play_to_client_ChatTypes;
  salt: [number, number];
  index: number;
  previousMessages: play_to_client_previousMessages;
  filterType: number;
  signature: never | undefined;
  filterTypeMask: /* 2 */ [number, number][] | never;
  networkTargetName: never | undefined;
  unsignedChatContent: never | undefined;
  networkName: never;
};
type configuration_to_client_packet_disconnect = {
  reason: never;
};
type play_to_server_packet_chunk_batch_received = {
  chunksPerTick: number;
};
type play_to_client_packet_keep_alive = {
  keepAliveId: [number, number];
};
type play_to_client_packet_set_title_subtitle = {
  text: never;
};
type play_to_server_packet_settings = {
  locale: string;
  skinParts: number;
  chatFlags: number;
  viewDistance: number;
  enableTextFiltering: boolean;
  chatColors: boolean;
  mainHand: number;
  enableServerListing: boolean;
};
type play_to_client_packet_common_store_cookie = packet_common_store_cookie;
type play_to_server_packet_use_item = {
  hand: number;
  sequence: number;
  rotation: play_to_server_vec2f;
};
type play_to_server_packet_close_window = {
  windowId: number;
};
type play_to_server_packet_set_creative_slot = {
  slot: number;
  item: play_to_server_Slot;
};
type play_to_client_packet_held_item_slot = {
  slot: number;
};
type configuration_to_client_packet_add_resource_pack = {
  hash: string;
  promptMessage: never | undefined;
  forced: boolean;
  uuid: string;
  url: string;
};
type play_to_client_packet_entity_destroy = {
  entityIds: number[];
};
type play_to_client_packet_common_cookie_request = packet_common_cookie_request;
type play_to_client_packet_abilities = {
  walkingSpeed: number;
  flags: number;
  flyingSpeed: number;
};
type play_to_server_packet_client_command = {
  actionId: number;
};
type configuration_to_client_packet_ping = {
  id: number;
};
type play_to_client_packet_end_combat_event = {
  duration: number;
};
type play_to_client_packet_tags = {
  tags: {
    tagType: string;
    tags: play_to_client_tags;
  }[];
};
type play_to_client_packet_close_window = {
  windowId: number;
};
type play_to_client_packet_server_data = {
  iconBytes: play_to_client_ByteArray | undefined;
  motd: never;
};
type play_to_client_packet_hide_message = {
  signature: /* 0 */ never | never;
  id: number;
};
type status_to_client_packet_ping = {
  time: [number, number];
};
type configuration_to_client_packet = {
  name:
    | "cookie_request"
    | "custom_payload"
    | "disconnect"
    | "finish_configuration"
    | "keep_alive"
    | "ping"
    | "reset_chat"
    | "registry_data"
    | "remove_resource_pack"
    | "add_resource_pack"
    | "store_cookie"
    | "transfer"
    | "feature_flags"
    | "tags"
    | "select_known_packs"
    | "custom_report_details"
    | "server_links";
  params: /* cookie_request */
  | configuration_to_client_packet_common_cookie_request
    | /* custom_payload */ configuration_to_client_packet_custom_payload
    | /* disconnect */ configuration_to_client_packet_disconnect
    | /* finish_configuration */ configuration_to_client_packet_finish_configuration
    | /* keep_alive */ configuration_to_client_packet_keep_alive
    | /* ping */ configuration_to_client_packet_ping
    | /* reset_chat */ configuration_to_client_packet_reset_chat
    | /* registry_data */ configuration_to_client_packet_registry_data
    | /* remove_resource_pack */ configuration_to_client_packet_remove_resource_pack
    | /* add_resource_pack */ configuration_to_client_packet_add_resource_pack
    | /* store_cookie */ configuration_to_client_packet_common_store_cookie
    | /* transfer */ configuration_to_client_packet_common_transfer
    | /* feature_flags */ configuration_to_client_packet_feature_flags
    | /* tags */ configuration_to_client_packet_tags
    | /* select_known_packs */ configuration_to_client_packet_common_select_known_packs
    | /* custom_report_details */ configuration_to_client_packet_common_custom_report_details
    | /* server_links */ configuration_to_client_packet_common_server_links;
};
type play_to_client_packet_map = {
  rows: /* 0 */ never | number;
  y: /* 0 */ never | number;
  scale: number;
  icons:
    | {
        z: number;
        type: number;
        displayName: never | undefined;
        direction: number;
        x: number;
      }[]
    | undefined;
  itemDamage: number;
  locked: boolean;
  columns: number;
  x: /* 0 */ never | number;
  data: /* 0 */ never | never;
};
type play_to_server_packet_entity_action = {
  actionId: number;
  jumpBoost: number;
  entityId: number;
};
type play_to_client_packet_world_border_lerp_size = {
  oldDiameter: number;
  speed: number;
  newDiameter: number;
};
type play_to_client_minecraft_smelting_format = minecraft_smelting_format;
type play_to_server_packet_vehicle_move = {
  x: number;
  yaw: number;
  pitch: number;
  y: number;
  z: number;
};
type play_to_client_packet_camera = {
  cameraId: number;
};
type play_to_client_packet_tile_entity_data = {
  nbtData: play_to_client_anonOptionalNbt;
  location: never;
  action: number;
};
type play_to_server_packet_held_item_slot = {
  slotId: number;
};
type play_to_client_packet_chunk_biomes = {
  biomes: {
    position: play_to_client_packedChunkPos;
    data: play_to_client_ByteArray;
  }[];
};
type play_to_client_packet = {
  name:
    | "bundle_delimiter"
    | "spawn_entity"
    | "spawn_entity_experience_orb"
    | "animation"
    | "statistics"
    | "acknowledge_player_digging"
    | "block_break_animation"
    | "tile_entity_data"
    | "block_action"
    | "block_change"
    | "boss_bar"
    | "difficulty"
    | "chunk_batch_finished"
    | "chunk_batch_start"
    | "chunk_biomes"
    | "clear_titles"
    | "tab_complete"
    | "declare_commands"
    | "close_window"
    | "window_items"
    | "craft_progress_bar"
    | "set_slot"
    | "cookie_request"
    | "set_cooldown"
    | "chat_suggestions"
    | "custom_payload"
    | "damage_event"
    | "debug_sample"
    | "hide_message"
    | "kick_disconnect"
    | "profileless_chat"
    | "entity_status"
    | "explosion"
    | "unload_chunk"
    | "game_state_change"
    | "open_horse_window"
    | "hurt_animation"
    | "initialize_world_border"
    | "keep_alive"
    | "map_chunk"
    | "world_event"
    | "world_particles"
    | "update_light"
    | "login"
    | "map"
    | "trade_list"
    | "rel_entity_move"
    | "entity_move_look"
    | "entity_look"
    | "vehicle_move"
    | "open_book"
    | "open_window"
    | "open_sign_entity"
    | "ping"
    | "ping_response"
    | "craft_recipe_response"
    | "abilities"
    | "player_chat"
    | "end_combat_event"
    | "enter_combat_event"
    | "death_combat_event"
    | "player_remove"
    | "player_info"
    | "face_player"
    | "position"
    | "unlock_recipes"
    | "entity_destroy"
    | "remove_entity_effect"
    | "reset_score"
    | "remove_resource_pack"
    | "add_resource_pack"
    | "respawn"
    | "entity_head_rotation"
    | "multi_block_change"
    | "select_advancement_tab"
    | "server_data"
    | "action_bar"
    | "world_border_center"
    | "world_border_lerp_size"
    | "world_border_size"
    | "world_border_warning_delay"
    | "world_border_warning_reach"
    | "camera"
    | "held_item_slot"
    | "update_view_position"
    | "update_view_distance"
    | "spawn_position"
    | "scoreboard_display_objective"
    | "entity_metadata"
    | "attach_entity"
    | "entity_velocity"
    | "entity_equipment"
    | "experience"
    | "update_health"
    | "scoreboard_objective"
    | "set_passengers"
    | "teams"
    | "scoreboard_score"
    | "simulation_distance"
    | "set_title_subtitle"
    | "update_time"
    | "set_title_text"
    | "set_title_time"
    | "entity_sound_effect"
    | "sound_effect"
    | "start_configuration"
    | "stop_sound"
    | "store_cookie"
    | "system_chat"
    | "playerlist_header"
    | "nbt_query_response"
    | "collect"
    | "entity_teleport"
    | "set_ticking_state"
    | "step_tick"
    | "transfer"
    | "advancements"
    | "entity_update_attributes"
    | "entity_effect"
    | "declare_recipes"
    | "tags";
  params: /* bundle_delimiter */
  | never
    | /* spawn_entity */ play_to_client_packet_spawn_entity
    | /* spawn_entity_experience_orb */ play_to_client_packet_spawn_entity_experience_orb
    | /* animation */ play_to_client_packet_animation
    | /* statistics */ play_to_client_packet_statistics
    | /* acknowledge_player_digging */ play_to_client_packet_acknowledge_player_digging
    | /* block_break_animation */ play_to_client_packet_block_break_animation
    | /* tile_entity_data */ play_to_client_packet_tile_entity_data
    | /* block_action */ play_to_client_packet_block_action
    | /* block_change */ play_to_client_packet_block_change
    | /* boss_bar */ play_to_client_packet_boss_bar
    | /* difficulty */ play_to_client_packet_difficulty
    | /* chunk_batch_finished */ play_to_client_packet_chunk_batch_finished
    | /* chunk_batch_start */ play_to_client_packet_chunk_batch_start
    | /* chunk_biomes */ play_to_client_packet_chunk_biomes
    | /* clear_titles */ play_to_client_packet_clear_titles
    | /* tab_complete */ play_to_client_packet_tab_complete
    | /* declare_commands */ play_to_client_packet_declare_commands
    | /* close_window */ play_to_client_packet_close_window
    | /* window_items */ play_to_client_packet_window_items
    | /* craft_progress_bar */ play_to_client_packet_craft_progress_bar
    | /* set_slot */ play_to_client_packet_set_slot
    | /* cookie_request */ play_to_client_packet_common_cookie_request
    | /* set_cooldown */ play_to_client_packet_set_cooldown
    | /* chat_suggestions */ play_to_client_packet_chat_suggestions
    | /* custom_payload */ play_to_client_packet_custom_payload
    | /* damage_event */ play_to_client_packet_damage_event
    | /* debug_sample */ play_to_client_packet_debug_sample
    | /* hide_message */ play_to_client_packet_hide_message
    | /* kick_disconnect */ play_to_client_packet_kick_disconnect
    | /* profileless_chat */ play_to_client_packet_profileless_chat
    | /* entity_status */ play_to_client_packet_entity_status
    | /* explosion */ play_to_client_packet_explosion
    | /* unload_chunk */ play_to_client_packet_unload_chunk
    | /* game_state_change */ play_to_client_packet_game_state_change
    | /* open_horse_window */ play_to_client_packet_open_horse_window
    | /* hurt_animation */ play_to_client_packet_hurt_animation
    | /* initialize_world_border */ play_to_client_packet_initialize_world_border
    | /* keep_alive */ play_to_client_packet_keep_alive
    | /* map_chunk */ play_to_client_packet_map_chunk
    | /* world_event */ play_to_client_packet_world_event
    | /* world_particles */ play_to_client_packet_world_particles
    | /* update_light */ play_to_client_packet_update_light
    | /* login */ play_to_client_packet_login
    | /* map */ play_to_client_packet_map
    | /* trade_list */ play_to_client_packet_trade_list
    | /* rel_entity_move */ play_to_client_packet_rel_entity_move
    | /* entity_move_look */ play_to_client_packet_entity_move_look
    | /* entity_look */ play_to_client_packet_entity_look
    | /* vehicle_move */ play_to_client_packet_vehicle_move
    | /* open_book */ play_to_client_packet_open_book
    | /* open_window */ play_to_client_packet_open_window
    | /* open_sign_entity */ play_to_client_packet_open_sign_entity
    | /* ping */ play_to_client_packet_ping
    | /* ping_response */ play_to_client_packet_ping_response
    | /* craft_recipe_response */ play_to_client_packet_craft_recipe_response
    | /* abilities */ play_to_client_packet_abilities
    | /* player_chat */ play_to_client_packet_player_chat
    | /* end_combat_event */ play_to_client_packet_end_combat_event
    | /* enter_combat_event */ play_to_client_packet_enter_combat_event
    | /* death_combat_event */ play_to_client_packet_death_combat_event
    | /* player_remove */ play_to_client_packet_player_remove
    | /* player_info */ play_to_client_packet_player_info
    | /* face_player */ play_to_client_packet_face_player
    | /* position */ play_to_client_packet_position
    | /* unlock_recipes */ play_to_client_packet_unlock_recipes
    | /* entity_destroy */ play_to_client_packet_entity_destroy
    | /* remove_entity_effect */ play_to_client_packet_remove_entity_effect
    | /* reset_score */ play_to_client_packet_reset_score
    | /* remove_resource_pack */ play_to_client_packet_remove_resource_pack
    | /* add_resource_pack */ play_to_client_packet_add_resource_pack
    | /* respawn */ play_to_client_packet_respawn
    | /* entity_head_rotation */ play_to_client_packet_entity_head_rotation
    | /* multi_block_change */ play_to_client_packet_multi_block_change
    | /* select_advancement_tab */ play_to_client_packet_select_advancement_tab
    | /* server_data */ play_to_client_packet_server_data
    | /* action_bar */ play_to_client_packet_action_bar
    | /* world_border_center */ play_to_client_packet_world_border_center
    | /* world_border_lerp_size */ play_to_client_packet_world_border_lerp_size
    | /* world_border_size */ play_to_client_packet_world_border_size
    | /* world_border_warning_delay */ play_to_client_packet_world_border_warning_delay
    | /* world_border_warning_reach */ play_to_client_packet_world_border_warning_reach
    | /* camera */ play_to_client_packet_camera
    | /* held_item_slot */ play_to_client_packet_held_item_slot
    | /* update_view_position */ play_to_client_packet_update_view_position
    | /* update_view_distance */ play_to_client_packet_update_view_distance
    | /* spawn_position */ play_to_client_packet_spawn_position
    | /* scoreboard_display_objective */ play_to_client_packet_scoreboard_display_objective
    | /* entity_metadata */ play_to_client_packet_entity_metadata
    | /* attach_entity */ play_to_client_packet_attach_entity
    | /* entity_velocity */ play_to_client_packet_entity_velocity
    | /* entity_equipment */ play_to_client_packet_entity_equipment
    | /* experience */ play_to_client_packet_experience
    | /* update_health */ play_to_client_packet_update_health
    | /* scoreboard_objective */ play_to_client_packet_scoreboard_objective
    | /* set_passengers */ play_to_client_packet_set_passengers
    | /* teams */ play_to_client_packet_teams
    | /* scoreboard_score */ play_to_client_packet_scoreboard_score
    | /* simulation_distance */ play_to_client_packet_simulation_distance
    | /* set_title_subtitle */ play_to_client_packet_set_title_subtitle
    | /* update_time */ play_to_client_packet_update_time
    | /* set_title_text */ play_to_client_packet_set_title_text
    | /* set_title_time */ play_to_client_packet_set_title_time
    | /* entity_sound_effect */ play_to_client_packet_entity_sound_effect
    | /* sound_effect */ play_to_client_packet_sound_effect
    | /* start_configuration */ play_to_client_packet_start_configuration
    | /* stop_sound */ play_to_client_packet_stop_sound
    | /* store_cookie */ play_to_client_packet_common_store_cookie
    | /* system_chat */ play_to_client_packet_system_chat
    | /* playerlist_header */ play_to_client_packet_playerlist_header
    | /* nbt_query_response */ play_to_client_packet_nbt_query_response
    | /* collect */ play_to_client_packet_collect
    | /* entity_teleport */ play_to_client_packet_entity_teleport
    | /* set_ticking_state */ play_to_client_packet_set_ticking_state
    | /* step_tick */ play_to_client_packet_step_tick
    | /* transfer */ play_to_client_packet_common_transfer
    | /* advancements */ play_to_client_packet_advancements
    | /* entity_update_attributes */ play_to_client_packet_entity_update_attributes
    | /* entity_effect */ play_to_client_packet_entity_effect
    | /* declare_recipes */ play_to_client_packet_declare_recipes
    | /* tags */ play_to_client_packet_tags;
};
type play_to_client_packet_entity_effect = {
  entityId: number;
  amplifier: number;
  flags: number;
  duration: number;
  effectId: number;
};
type play_to_client_packet_map_chunk = {
  blockLightMask: [number, number][];
  skyLight: number[][];
  x: number;
  z: number;
  skyLightMask: [number, number][];
  heightmaps: never;
  emptySkyLightMask: [number, number][];
  blockLight: number[][];
  chunkData: never;
  emptyBlockLightMask: [number, number][];
  blockEntities: play_to_client_chunkBlockEntity[];
};
type play_to_server_packet_message_acknowledgement = {
  count: number;
};
type play_to_server_packet_update_structure_block = {
  action: number;
  mode: number;
  mirror: number;
  seed: number;
  size_x: number;
  rotation: number;
  flags: number;
  offset_y: number;
  location: never;
  offset_z: number;
  name: string;
  integrity: number;
  offset_x: number;
  size_y: number;
  metadata: string;
  size_z: number;
};
type play_to_client_packet_entity_metadata = {
  entityId: number;
  metadata: never;
};
type play_to_server_packet_steer_boat = {
  rightPaddle: boolean;
  leftPaddle: boolean;
};
type configuration_to_server_packet_common_select_known_packs =
  packet_common_select_known_packs;
type play_to_client_packet_multi_block_change = {
  chunkCoordinates: {
    x: number | boolean;
    z: number | boolean;
    y: number | boolean;
  };
  records: number[];
};
type play_to_client_packet_nbt_query_response = {
  nbt: play_to_client_anonOptionalNbt;
  transactionId: number;
};
type play_to_client_packet_damage_event = {
  sourceDirectId: number;
  sourceCauseId: number;
  sourcePosition: play_to_client_vec3f64 | undefined;
  sourceTypeId: number;
  entityId: number;
};
type play_to_client_packet_attach_entity = {
  entityId: number;
  vehicleId: number;
};
type play_to_client_packet_profileless_chat = {
  target: never | undefined;
  type: play_to_client_ChatTypes;
  message: never;
  name: never;
};
type play_to_client_packet_unload_chunk = {
  chunkZ: number;
  chunkX: number;
};
type play_to_client_packet_teams = {
  formatting: /* 0 */ number | /* 2 */ number | never;
  mode: number;
  name: /* 0 */ never | /* 2 */ never | never;
  suffix: /* 0 */ never | /* 2 */ never | never;
  team: string;
  collisionRule: /* 0 */ string | /* 2 */ string | never;
  players: /* 0 */ string[] | /* 3 */ string[] | /* 4 */ string[] | never;
  friendlyFire: /* 0 */ number | /* 2 */ number | never;
  nameTagVisibility: /* 0 */ string | /* 2 */ string | never;
  prefix: /* 0 */ never | /* 2 */ never | never;
};
type configuration_to_server_packet_custom_payload = {
  channel: string;
  data: buffer;
};
type play_to_client_packet_block_action = {
  location: never;
  byte2: number;
  blockId: number;
  byte1: number;
};
type play_to_server_packet_set_difficulty = {
  newDifficulty: number;
};
type play_to_server_packet_chat_command_signed = {
  timestamp: [number, number];
  command: string;
  salt: [number, number];
  messageCount: number;
  argumentSignatures: {
    argumentName: string;
    signature: never;
  }[];
  acknowledged: never;
};
type login_to_client_packet = {
  name:
    | "disconnect"
    | "encryption_begin"
    | "success"
    | "compress"
    | "login_plugin_request"
    | "cookie_request";
  params: /* disconnect */
  | login_to_client_packet_disconnect
    | /* encryption_begin */ login_to_client_packet_encryption_begin
    | /* success */ login_to_client_packet_success
    | /* compress */ login_to_client_packet_compress
    | /* login_plugin_request */ login_to_client_packet_login_plugin_request
    | /* cookie_request */ login_to_client_packet_common_cookie_request;
};
type login_to_client_packet_success = {
  uuid: string;
  properties: {
    value: string;
    signature: string | undefined;
    name: string;
  }[];
  username: string;
  strictErrorHandling: boolean;
};
type play_to_client_chunkBlockEntity = chunkBlockEntity;
type play_to_client_packet_set_title_time = {
  fadeIn: number;
  stay: number;
  fadeOut: number;
};
type configuration_to_client_packet_reset_chat = Record<never, never> & {
  __type: "empty_object";
};
type play_to_server_packet_craft_recipe_request = {
  windowId: number;
  recipe: string;
  makeAll: boolean;
};
type play_to_client_packet_spawn_position = {
  angle: number;
  location: never;
};
type play_to_client_packet_hurt_animation = {
  entityId: number;
  yaw: number;
};
type play_to_client_chat_session = chat_session;
type play_to_server_packet_pick_item = {
  slot: number;
};
type play_to_server_packet_generate_structure = {
  levels: number;
  keepJigsaws: boolean;
  location: never;
};
type play_to_server_packet_arm_animation = {
  hand: number;
};
type handshaking_to_server_packet_legacy_server_list_ping = {
  payload: number;
};
type status_to_server_packet_ping = {
  time: [number, number];
};
type play_to_client_game_profile = game_profile;
type play_to_client_packet_open_window = {
  inventoryType: number;
  windowTitle: never;
  windowId: number;
};
type play_to_server_packet_update_command_block = {
  command: string;
  mode: number;
  location: never;
  flags: number;
};
type configuration_to_client_packet_common_cookie_request =
  packet_common_cookie_request;
type play_to_client_packet_update_view_position = {
  chunkX: number;
  chunkZ: number;
};
type play_to_client_packet_statistics = {
  entries: {
    statisticId: number;
    value: number;
    categoryId: number;
  }[];
};
type play_to_client_packet_entity_update_attributes = {
  properties: {
    key:
      | "generic.armor"
      | "generic.armor_toughness"
      | "generic.attack_damage"
      | "generic.attack_knockback"
      | "generic.attack_speed"
      | "player.block_break_speed"
      | "player.block_interaction_range"
      | "player.entity_interaction_range"
      | "generic.fall_damage_multiplier"
      | "generic.flying_speed"
      | "generic.follow_range"
      | "generic.gravity"
      | "generic.jump_strength"
      | "generic.knockback_resistance"
      | "generic.luck"
      | "generic.max_absorption"
      | "generic.max_health"
      | "generic.movement_speed"
      | "generic.safe_fall_distance"
      | "generic.scale"
      | "zombie.spawn_reinforcements"
      | "generic.step_height";
    value: number;
    modifiers: {
      uuid: string;
      amount: number;
      operation: number;
    }[];
  }[];
  entityId: number;
};
type configuration_to_client_packet_registry_data = {
  id: string;
  entries: {
    key: string;
    value: never | undefined;
  }[];
};
type play_to_client_packet_entity_status = {
  entityStatus: number;
  entityId: number;
};
type play_to_client_packet_select_advancement_tab = {
  id: string | undefined;
};
type play_to_client_packet_world_border_warning_delay = {
  warningTime: number;
};
type play_to_server_packet_use_entity = {
  mouse: number;
  target: number;
  x: /* 2 */ number | never;
  z: /* 2 */ number | never;
  hand: /* 0 */ number | /* 2 */ number | never;
  sneaking: boolean;
  y: /* 2 */ number | never;
};
type configuration_to_client_packet_common_custom_report_details =
  packet_common_custom_report_details;
type login_to_client_packet_disconnect = {
  reason: string;
};
type configuration_to_client_packet_common_transfer = packet_common_transfer;
type configuration_to_client_packet_finish_configuration = Record<
  never,
  never
> & { __type: "empty_object" };
type play_to_client_Particle = Particle;
type play_to_client_packet_entity_sound_effect = {
  soundId: number;
  soundCategory: play_to_client_soundSource;
  seed: [number, number];
  entityId: number;
  pitch: number;
  volume: number;
  soundEvent: /* 0 */
  | {
        resource: string;
        range: number | undefined;
      }
    | never;
};
type play_to_client_packet_world_border_warning_reach = {
  warningBlocks: number;
};
type play_to_server_packet_steer_vehicle = {
  forward: number;
  jump: number;
  sideways: number;
};
type play_to_server_vec2f = vec2f;
type play_to_client_packet_world_particles = {
  offsetX: number;
  particle: play_to_client_Particle;
  x: number;
  offsetZ: number;
  amount: number;
  offsetY: number;
  y: number;
  longDistance: boolean;
  z: number;
  velocityOffset: number;
};
type play_to_client_packet_open_book = {
  hand: number;
};
type play_to_client_packet_scoreboard_objective = {
  name: string;
  number_format: /* 0 */
  (number | undefined) | /* 2 */ (number | undefined) | never;
  styling: /* 0 */ /* 1 */
  | never
    | /* 2 */ never
    | never
    | /* 2 */ /* 1 */ never
    | /* 2 */ never
    | never
    | never;
  action: number;
  displayText: /* 0 */ never | /* 2 */ never | never;
  type: /* 0 */ number | /* 2 */ number | never;
};
type play_to_server_packet_resource_pack_receive = {
  result: number;
  uuid: string;
};
type play_to_client_packet_simulation_distance = {
  distance: number;
};
type play_to_client_packet_system_chat = {
  isActionBar: boolean;
  content: never;
};
type play_to_client_packet_set_passengers = {
  passengers: number[];
  entityId: number;
};

interface PacketWithDir {
  status: {
    to_client: {
      ping: status_to_client_packet_ping;
      server_info: status_to_client_packet_server_info;
    };
    to_server: {
      ping: status_to_server_packet_ping;
      ping_start: status_to_server_packet_ping_start;
    };
  };
  login: {
    to_server: {
      login_acknowledged: login_to_server_packet_login_acknowledged;
      login_plugin_response: login_to_server_packet_login_plugin_response;
      login_start: login_to_server_packet_login_start;
      encryption_begin: login_to_server_packet_encryption_begin;
    };
    to_client: {
      success: login_to_client_packet_success;
      compress: login_to_client_packet_compress;
      encryption_begin: login_to_client_packet_encryption_begin;
      disconnect: login_to_client_packet_disconnect;
      login_plugin_request: login_to_client_packet_login_plugin_request;
    };
  };
  handshaking: {
    to_server: {
      legacy_server_list_ping: handshaking_to_server_packet_legacy_server_list_ping;
      set_protocol: handshaking_to_server_packet_set_protocol;
    };
  };
  play: {
    to_client: {
      player_remove: play_to_client_packet_player_remove;
      chunk_batch_finished: play_to_client_packet_chunk_batch_finished;
      tags: play_to_client_packet_tags;
      block_change: play_to_client_packet_block_change;
      boss_bar: play_to_client_packet_boss_bar;
      advancements: play_to_client_packet_advancements;
      set_title_subtitle: play_to_client_packet_set_title_subtitle;
      declare_commands: play_to_client_packet_declare_commands;
      position: play_to_client_packet_position;
      ping: play_to_client_packet_ping;
      game_state_change: play_to_client_packet_game_state_change;
      ping_response: play_to_client_packet_ping_response;
      entity_metadata: play_to_client_packet_entity_metadata;
      entity_equipment: play_to_client_packet_entity_equipment;
      action_bar: play_to_client_packet_action_bar;
      set_title_time: play_to_client_packet_set_title_time;
      spawn_entity: play_to_client_packet_spawn_entity;
      tab_complete: play_to_client_packet_tab_complete;
      world_particles: play_to_client_packet_world_particles;
      difficulty: play_to_client_packet_difficulty;
      select_advancement_tab: play_to_client_packet_select_advancement_tab;
      held_item_slot: play_to_client_packet_held_item_slot;
      hurt_animation: play_to_client_packet_hurt_animation;
      set_title_text: play_to_client_packet_set_title_text;
      attach_entity: play_to_client_packet_attach_entity;
      unload_chunk: play_to_client_packet_unload_chunk;
      multi_block_change: play_to_client_packet_multi_block_change;
      start_configuration: play_to_client_packet_start_configuration;
      entity_effect: play_to_client_packet_entity_effect;
      respawn: play_to_client_packet_respawn;
      update_health: play_to_client_packet_update_health;
      world_border_lerp_size: play_to_client_packet_world_border_lerp_size;
      server_data: play_to_client_packet_server_data;
      entity_destroy: play_to_client_packet_entity_destroy;
      entity_sound_effect: play_to_client_packet_entity_sound_effect;
      player_info: play_to_client_packet_player_info;
      set_slot: play_to_client_packet_set_slot;
      world_border_center: play_to_client_packet_world_border_center;
      open_horse_window: play_to_client_packet_open_horse_window;
      update_view_distance: play_to_client_packet_update_view_distance;
      entity_update_attributes: play_to_client_packet_entity_update_attributes;
      tile_entity_data: play_to_client_packet_tile_entity_data;
      login: play_to_client_packet_login;
      simulation_distance: play_to_client_packet_simulation_distance;
      entity_velocity: play_to_client_packet_entity_velocity;
      spawn_position: play_to_client_packet_spawn_position;
      update_time: play_to_client_packet_update_time;
      scoreboard_score: play_to_client_packet_scoreboard_score;
      world_border_size: play_to_client_packet_world_border_size;
      set_passengers: play_to_client_packet_set_passengers;
      damage_event: play_to_client_packet_damage_event;
      set_ticking_state: play_to_client_packet_set_ticking_state;
      statistics: play_to_client_packet_statistics;
      chat_suggestions: play_to_client_packet_chat_suggestions;
      experience: play_to_client_packet_experience;
      world_border_warning_reach: play_to_client_packet_world_border_warning_reach;
      end_combat_event: play_to_client_packet_end_combat_event;
      map_chunk: play_to_client_packet_map_chunk;
      clear_titles: play_to_client_packet_clear_titles;
      entity_status: play_to_client_packet_entity_status;
      trade_list: play_to_client_packet_trade_list;
      rel_entity_move: play_to_client_packet_rel_entity_move;
      reset_score: play_to_client_packet_reset_score;
      world_border_warning_delay: play_to_client_packet_world_border_warning_delay;
      sound_effect: play_to_client_packet_sound_effect;
      declare_recipes: play_to_client_packet_declare_recipes;
      world_event: play_to_client_packet_world_event;
      craft_progress_bar: play_to_client_packet_craft_progress_bar;
      custom_payload: play_to_client_packet_custom_payload;
      update_light: play_to_client_packet_update_light;
      scoreboard_display_objective: play_to_client_packet_scoreboard_display_objective;
      craft_recipe_response: play_to_client_packet_craft_recipe_response;
      playerlist_header: play_to_client_packet_playerlist_header;
      debug_sample: play_to_client_packet_debug_sample;
      death_combat_event: play_to_client_packet_death_combat_event;
      hide_message: play_to_client_packet_hide_message;
      remove_entity_effect: play_to_client_packet_remove_entity_effect;
      step_tick: play_to_client_packet_step_tick;
      teams: play_to_client_packet_teams;
      window_items: play_to_client_packet_window_items;
      close_window: play_to_client_packet_close_window;
      map: play_to_client_packet_map;
      open_sign_entity: play_to_client_packet_open_sign_entity;
      block_break_animation: play_to_client_packet_block_break_animation;
      profileless_chat: play_to_client_packet_profileless_chat;
      entity_move_look: play_to_client_packet_entity_move_look;
      remove_resource_pack: play_to_client_packet_remove_resource_pack;
      abilities: play_to_client_packet_abilities;
      animation: play_to_client_packet_animation;
      entity_teleport: play_to_client_packet_entity_teleport;
      unlock_recipes: play_to_client_packet_unlock_recipes;
      face_player: play_to_client_packet_face_player;
      set_projectile_power: play_to_client_packet_set_projectile_power;
      keep_alive: play_to_client_packet_keep_alive;
      system_chat: play_to_client_packet_system_chat;
      chunk_biomes: play_to_client_packet_chunk_biomes;
      entity_look: play_to_client_packet_entity_look;
      vehicle_move: play_to_client_packet_vehicle_move;
      player_chat: play_to_client_packet_player_chat;
      add_resource_pack: play_to_client_packet_add_resource_pack;
      enter_combat_event: play_to_client_packet_enter_combat_event;
      open_book: play_to_client_packet_open_book;
      open_window: play_to_client_packet_open_window;
      acknowledge_player_digging: play_to_client_packet_acknowledge_player_digging;
      initialize_world_border: play_to_client_packet_initialize_world_border;
      entity_head_rotation: play_to_client_packet_entity_head_rotation;
      collect: play_to_client_packet_collect;
      scoreboard_objective: play_to_client_packet_scoreboard_objective;
      explosion: play_to_client_packet_explosion;
      chunk_batch_start: play_to_client_packet_chunk_batch_start;
      block_action: play_to_client_packet_block_action;
      kick_disconnect: play_to_client_packet_kick_disconnect;
      camera: play_to_client_packet_camera;
      update_view_position: play_to_client_packet_update_view_position;
      stop_sound: play_to_client_packet_stop_sound;
      nbt_query_response: play_to_client_packet_nbt_query_response;
      spawn_entity_experience_orb: play_to_client_packet_spawn_entity_experience_orb;
      set_cooldown: play_to_client_packet_set_cooldown;
    };
    to_server: {
      steer_boat: play_to_server_packet_steer_boat;
      displayed_recipe: play_to_server_packet_displayed_recipe;
      set_beacon_effect: play_to_server_packet_set_beacon_effect;
      pick_item: play_to_server_packet_pick_item;
      block_place: play_to_server_packet_block_place;
      set_difficulty: play_to_server_packet_set_difficulty;
      update_jigsaw_block: play_to_server_packet_update_jigsaw_block;
      recipe_book: play_to_server_packet_recipe_book;
      entity_action: play_to_server_packet_entity_action;
      message_acknowledgement: play_to_server_packet_message_acknowledgement;
      configuration_acknowledged: play_to_server_packet_configuration_acknowledged;
      vehicle_move: play_to_server_packet_vehicle_move;
      chunk_batch_received: play_to_server_packet_chunk_batch_received;
      position_look: play_to_server_packet_position_look;
      custom_payload: play_to_server_packet_custom_payload;
      tab_complete: play_to_server_packet_tab_complete;
      craft_recipe_request: play_to_server_packet_craft_recipe_request;
      chat_command_signed: play_to_server_packet_chat_command_signed;
      held_item_slot: play_to_server_packet_held_item_slot;
      set_creative_slot: play_to_server_packet_set_creative_slot;
      use_entity: play_to_server_packet_use_entity;
      query_block_nbt: play_to_server_packet_query_block_nbt;
      set_slot_state: play_to_server_packet_set_slot_state;
      update_command_block: play_to_server_packet_update_command_block;
      lock_difficulty: play_to_server_packet_lock_difficulty;
      debug_sample_subscription: play_to_server_packet_debug_sample_subscription;
      look: play_to_server_packet_look;
      flying: play_to_server_packet_flying;
      update_command_block_minecart: play_to_server_packet_update_command_block_minecart;
      pong: play_to_server_packet_pong;
      update_structure_block: play_to_server_packet_update_structure_block;
      update_sign: play_to_server_packet_update_sign;
      advancement_tab: play_to_server_packet_advancement_tab;
      generate_structure: play_to_server_packet_generate_structure;
      teleport_confirm: play_to_server_packet_teleport_confirm;
      spectate: play_to_server_packet_spectate;
      use_item: play_to_server_packet_use_item;
      edit_book: play_to_server_packet_edit_book;
      settings: play_to_server_packet_settings;
      block_dig: play_to_server_packet_block_dig;
      window_click: play_to_server_packet_window_click;
      steer_vehicle: play_to_server_packet_steer_vehicle;
      chat_session_update: play_to_server_packet_chat_session_update;
      close_window: play_to_server_packet_close_window;
      name_item: play_to_server_packet_name_item;
      client_command: play_to_server_packet_client_command;
      enchant_item: play_to_server_packet_enchant_item;
      ping_request: play_to_server_packet_ping_request;
      query_entity_nbt: play_to_server_packet_query_entity_nbt;
      keep_alive: play_to_server_packet_keep_alive;
      resource_pack_receive: play_to_server_packet_resource_pack_receive;
      select_trade: play_to_server_packet_select_trade;
      chat_command: play_to_server_packet_chat_command;
      arm_animation: play_to_server_packet_arm_animation;
      position: play_to_server_packet_position;
      abilities: play_to_server_packet_abilities;
      chat_message: play_to_server_packet_chat_message;
    };
  };
  configuration: {
    to_client: {
      add_resource_pack: configuration_to_client_packet_add_resource_pack;
      feature_flags: configuration_to_client_packet_feature_flags;
      tags: configuration_to_client_packet_tags;
      remove_resource_pack: configuration_to_client_packet_remove_resource_pack;
      reset_chat: configuration_to_client_packet_reset_chat;
      custom_payload: configuration_to_client_packet_custom_payload;
      disconnect: configuration_to_client_packet_disconnect;
      finish_configuration: configuration_to_client_packet_finish_configuration;
      registry_data: configuration_to_client_packet_registry_data;
      keep_alive: configuration_to_client_packet_keep_alive;
      ping: configuration_to_client_packet_ping;
    };
    to_server: {
      custom_payload: configuration_to_server_packet_custom_payload;
      finish_configuration: configuration_to_server_packet_finish_configuration;
      pong: configuration_to_server_packet_pong;
      keep_alive: configuration_to_server_packet_keep_alive;
      settings: configuration_to_server_packet_settings;
      resource_pack_receive: configuration_to_server_packet_resource_pack_receive;
    };
  };
}

declare function write(name: Packet["name"], params: Packet["params"]);

write("ping", {
  time: [0, 0],
});

write("ping", { time: 19 });

write("chat", { message: msg });

declare function typedWrite<
  State extends keyof PacketWithDir,
  Side extends keyof PacketWithDir[State],
  Name extends keyof PacketWithDir[State][Side]
>(name: Name, params: PacketWithDir[State][Side][Name]): void;

typedWrite<"play", "to_client", "stop_sound">("stop_sound", {
  flags: 9,
  sound: "",
  source: 92,
});
