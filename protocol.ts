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
  x: number;
  y: number;
};
type vec3f = {
  y: number;
  z: number;
  x: number;
};
type vec4f = {
  z: number;
  w: number;
  x: number;
  y: number;
};
type vec3f64 = {
  y: number;
  z: number;
  x: number;
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
        showTooltip: boolean;
        enchantments: {
          id: number;
          level: number;
        }[];
      }
    | /* can_place_on */ {
        predicates: BlockPredicate[];
        showTooltip: boolean;
      }
    | /* can_break */ {
        predicates: BlockPredicate[];
        showTooltip: boolean;
      }
    | /* attribute_modifiers */ {
        attributes: {
          typeId: number;
          name: string;
          operation: "add" | "multiply_base" | "multiply_total";
          value: number;
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
          uniqueId: string;
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
        canAlwaysEat: boolean;
        nutrition: number;
        secondsToEat: number;
        usingConvertsTo: Slot;
        saturationModifier: number;
        effects: {
          probability: number;
          effect: number;
        }[];
      }
    | /* fire_resistant */ never
    | /* tool */ {
        rules: {
          hasCorrectDropForBlocks: boolean;
          correctDropForBlocks: boolean;
          blocks: BlockSet[];
          speed: number;
          hasSpeed: boolean;
        }[];
        damagePerBlock: number;
        defaultMiningSpeed: number;
      }
    | /* stored_enchantments */ {
        enchantments: {
          id: number;
          level: number;
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
        hasPotionId: boolean;
        potionId: optvarint;
        customEffects: {
          effect: number;
          details: EffectDetail;
        }[];
        hasCustomColor: boolean;
        customColor: optvarint;
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
        resolved: boolean;
        author: string;
        generation: number;
        rawTitle: string;
        filteredTitle: string | undefined;
        pages: BookPage[];
      }
    | /* trim */ {
        trimPatternType: number;
        showInTooltip: boolean;
        materialType: number;
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
        globalPosition:
          | {
              dimension: string;
              position: vec3f;
            }
          | undefined;
        tracked: boolean;
      }
    | /* firework_explosion */ FireworkExplosion
    | /* fireworks */ {
        explosions: FireworkExplosion[];
        flightDuration: number;
      }
    | /* profile */ {
        name: string;
        properties: {
          value: string;
          property: string;
          hasSignature: boolean;
          signature: string;
        }[];
        uniqueId: string;
        hasUniqueId: boolean;
        hasName: boolean;
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
          nbtData: never;
          minTicksInHive: number;
          ticksInHive: number;
        }[];
      }
    | /* lock */ never
    | /* container_loot */ never;
};
type Slot = {
  itemCount: number;
};
type FireworkExplosion = {
  shape: "small_ball" | "large_ball" | "star" | "creeper" | "burst";
  hasTwinkle: boolean;
  hasTrail: boolean;
  colors: number[];
  fadeColors: number[];
};
type BookPage = {
  content: string;
  filteredContent: string | undefined;
};
type EffectDetail = {
  amplifier: number;
  ambient: boolean;
  showParticles: boolean;
  showIcon: boolean;
  duration: number;
  hiddenEffect: EffectDetail | undefined;
};
type BlockSet = {
  name: /* 0 */ string | never;
  type: number;
  blockIds: /* 0 */ never | never;
};
type BlockProperty = {
  isExactMatch: boolean;
  maxValue: string | undefined;
  exactValue: string | undefined;
  name: string;
  minValue: string | undefined;
};
type BlockPredicate = {
  properties: BlockProperty[] | undefined;
  blockSet: BlockSet[] | undefined;
  nbt: anonOptionalNbt;
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
        scale: number;
        green: number;
        blue: number;
        red: number;
      }
    | /* dust_color_transition */ {
        fromRed: number;
        scale: number;
        toGreen: number;
        toRed: number;
        fromGreen: number;
        toBlue: number;
        fromBlue: number;
      }
    | /* entity_effect */ number
    | /* item */ Slot
    | /* sculk_charge */ number
    | /* shriek */ number
    | /* vibration */ {
        position_type: "block" | "entity";
        position: /* block */
          | never
          | /* entity */ {
              entity_eye_height: number;
              entityId: number;
            };
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
        pitch: number;
        roll: number;
        yaw: number;
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
        level: number;
        villagerType: number;
        villagerProfession: number;
      }
    | /* optional_unsigned_int */ optvarint
    | /* pose */ number
    | /* cat_variant */ number
    | /* wolf_variant */ {
        tameTexture: string;
        biomeLocation: /* 0 */ string;
        angryTexture: string;
        biomeHolders: /* 0 */ never | never;
        maybeInputLength: number;
        wildTexture: string;
      }
    | /* frog_variant */ number
    | /* optional_global_pos */ (string | undefined)
    | /* painting_variant */ {
        width: number;
        assetId: string;
        height: number;
      }
    | /* sniffer_state */ number
    | /* armadillo_state */ number
    | /* vector3 */ vec3f
    | /* quaternion */ vec4f;
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
};
type entityMetadata = never;
type minecraft_simple_recipe_format = {
  category: number;
};
type minecraft_smelting_format = {
  experience: number;
  group: string;
  category: number;
  result: Slot;
  ingredient: ingredient;
  cookTime: number;
};
type tags = {
  tagName: string;
  entries: number[];
}[];
type chunkBlockEntity = {
  x: number;
  y: number;
  z: number;
  type: number;
  nbtData: anonOptionalNbt;
};
type chat_session =
  | {
      uuid: string;
      publicKey: {
        expireTime: number;
        keySignature: never;
        keyBytes: never;
      };
    }
  | undefined;
type game_profile = {
  name: string;
  properties: {
    key: string;
    signature: string | undefined;
    value: string;
  }[];
};
type command_node = {
  flags: {
    unused: number | boolean;
    has_custom_suggestions: number | boolean;
    has_redirect_node: number | boolean;
    has_command: number | boolean;
    command_node_type: number | boolean;
  };
  children: number[];
  redirectNode: /* 1 */ number | never;
  extraNodeData: /* 0 */
    | never
    | /* 1 */ {
        name: string;
      }
    | /* 2 */ {
        suggestionType: /* 1 */ string | never;
        properties: /* brigadier:bool */
          | never
          | /* brigadier:float */ {
              max: /* 1 */ number | never;
              min: /* 1 */ number | never;
              flags: {
                unused: number | boolean;
                max_present: number | boolean;
                min_present: number | boolean;
              };
            }
          | /* brigadier:double */ {
              max: /* 1 */ number | never;
              flags: {
                unused: number | boolean;
                max_present: number | boolean;
                min_present: number | boolean;
              };
              min: /* 1 */ number | never;
            }
          | /* brigadier:integer */ {
              max: /* 1 */ number | never;
              min: /* 1 */ number | never;
              flags: {
                unused: number | boolean;
                max_present: number | boolean;
                min_present: number | boolean;
              };
            }
          | /* brigadier:long */ {
              max: /* 1 */ number | never;
              flags: {
                unused: number | boolean;
                max_present: number | boolean;
                min_present: number | boolean;
              };
              min: /* 1 */ number | never;
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
      };
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
  key: string;
  value: ByteArray;
};
type packet_common_select_known_packs = {
  packs: {
    id: string;
    version: string;
    namespace: string;
  }[];
};
type packet_common_custom_report_details = {
  details: {
    value: string;
    key: string;
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
    link: string;
    unknownType: /* false */ never;
    hasKnownType: boolean;
    knownType: /* true */ ServerLinkType;
  }[];
};

type Packet =
  | handshaking_toclient_packet
  | handshaking_toserver_packet
  | status_toclient_packet
  | status_toserver_packet
  | login_toclient_packet
  | login_toserver_packet
  | configuration_toclient_packet
  | configuration_toserver_packet
  | play_toclient_packet
  | play_toserver_packet;

type play_toclient_SlotComponent = SlotComponent;
type play_toserver_packet_recipe_book = {
  bookId: number;
  filterActive: boolean;
  bookOpen: boolean;
};
type play_toserver_packet_position_look = {
  onGround: boolean;
  pitch: number;
  y: number;
  yaw: number;
  z: number;
  x: number;
};
type configuration_toclient_tags = tags;
type status_toserver_packet_ping = {
  time: number;
};
type play_toclient_packet_ping = {
  id: number;
};
type play_toserver_packet_abilities = {
  flags: number;
};
type play_toclient_packet_explosion = {
  playerMotionZ: number;
  playerMotionX: number;
  z: number;
  x: number;
  y: number;
  radius: number;
  block_interaction_type: number;
  large_explosion_particle: play_toclient_Particle;
  playerMotionY: number;
  affectedBlockOffsets: {
    y: number;
    z: number;
    x: number;
  }[];
  small_explosion_particle: play_toclient_Particle;
  soundId: number;
};
type play_toclient_packet_teams = {
  name: /* 0 */ never | /* 2 */ never | never;
  collisionRule: /* 0 */ string | /* 2 */ string | never;
  formatting: /* 0 */ number | /* 2 */ number | never;
  suffix: /* 0 */ never | /* 2 */ never | never;
  friendlyFire: /* 0 */ number | /* 2 */ number | never;
  mode: number;
  nameTagVisibility: /* 0 */ string | /* 2 */ string | never;
  prefix: /* 0 */ never | /* 2 */ never | never;
  team: string;
  players: /* 0 */ string[] | /* 3 */ string[] | /* 4 */ string[] | never;
};
type play_toclient_packet_custom_payload = {
  channel: string;
  data: buffer;
};
type play_toclient_packet_entity_equipment = {
  equipments: never;
  entityId: number;
};
type play_toclient_ByteArray = ByteArray;
type play_toclient_packet_abilities = {
  flags: number;
  walkingSpeed: number;
  flyingSpeed: number;
};
type configuration_toclient_packet = {
  params: /* cookie_request */
    | configuration_toclient_packet_common_cookie_request
    | /* custom_payload */ configuration_toclient_packet_custom_payload
    | /* disconnect */ configuration_toclient_packet_disconnect
    | /* finish_configuration */ configuration_toclient_packet_finish_configuration
    | /* keep_alive */ configuration_toclient_packet_keep_alive
    | /* ping */ configuration_toclient_packet_ping
    | /* reset_chat */ configuration_toclient_packet_reset_chat
    | /* registry_data */ configuration_toclient_packet_registry_data
    | /* remove_resource_pack */ configuration_toclient_packet_remove_resource_pack
    | /* add_resource_pack */ configuration_toclient_packet_add_resource_pack
    | /* store_cookie */ configuration_toclient_packet_common_store_cookie
    | /* transfer */ configuration_toclient_packet_common_transfer
    | /* feature_flags */ configuration_toclient_packet_feature_flags
    | /* tags */ configuration_toclient_packet_tags
    | /* select_known_packs */ configuration_toclient_packet_common_select_known_packs
    | /* custom_report_details */ configuration_toclient_packet_common_custom_report_details
    | /* server_links */ configuration_toclient_packet_common_server_links;
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
};
type play_toclient_packet_entity_status = {
  entityStatus: number;
  entityId: number;
};
type play_toclient_packet_player_info = {
  data: {
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
    chatSession: /* 2 */
      | play_toclient_chat_session
      | /* 3 */ play_toclient_chat_session
      | /* 6 */ play_toclient_chat_session
      | /* 7 */ play_toclient_chat_session
      | /* 10 */ play_toclient_chat_session
      | /* 11 */ play_toclient_chat_session
      | /* 14 */ play_toclient_chat_session
      | /* 15 */ play_toclient_chat_session
      | /* 18 */ play_toclient_chat_session
      | /* 19 */ play_toclient_chat_session
      | /* 22 */ play_toclient_chat_session
      | /* 23 */ play_toclient_chat_session
      | /* 26 */ play_toclient_chat_session
      | /* 27 */ play_toclient_chat_session
      | /* 30 */ play_toclient_chat_session
      | /* 31 */ play_toclient_chat_session
      | /* 34 */ play_toclient_chat_session
      | /* 35 */ play_toclient_chat_session
      | /* 38 */ play_toclient_chat_session
      | /* 39 */ play_toclient_chat_session
      | /* 42 */ play_toclient_chat_session
      | /* 43 */ play_toclient_chat_session
      | /* 46 */ play_toclient_chat_session
      | /* 47 */ play_toclient_chat_session
      | /* 50 */ play_toclient_chat_session
      | /* 51 */ play_toclient_chat_session
      | /* 54 */ play_toclient_chat_session
      | /* 55 */ play_toclient_chat_session
      | /* 58 */ play_toclient_chat_session
      | /* 59 */ play_toclient_chat_session
      | /* 62 */ play_toclient_chat_session
      | /* 63 */ play_toclient_chat_session
      | never;
    player: /* 1 */
      | play_toclient_game_profile
      | /* 3 */ play_toclient_game_profile
      | /* 5 */ play_toclient_game_profile
      | /* 7 */ play_toclient_game_profile
      | /* 9 */ play_toclient_game_profile
      | /* 11 */ play_toclient_game_profile
      | /* 13 */ play_toclient_game_profile
      | /* 15 */ play_toclient_game_profile
      | /* 17 */ play_toclient_game_profile
      | /* 19 */ play_toclient_game_profile
      | /* 21 */ play_toclient_game_profile
      | /* 23 */ play_toclient_game_profile
      | /* 25 */ play_toclient_game_profile
      | /* 27 */ play_toclient_game_profile
      | /* 29 */ play_toclient_game_profile
      | /* 31 */ play_toclient_game_profile
      | /* 33 */ play_toclient_game_profile
      | /* 35 */ play_toclient_game_profile
      | /* 37 */ play_toclient_game_profile
      | /* 39 */ play_toclient_game_profile
      | /* 41 */ play_toclient_game_profile
      | /* 43 */ play_toclient_game_profile
      | /* 45 */ play_toclient_game_profile
      | /* 47 */ play_toclient_game_profile
      | /* 49 */ play_toclient_game_profile
      | /* 51 */ play_toclient_game_profile
      | /* 53 */ play_toclient_game_profile
      | /* 55 */ play_toclient_game_profile
      | /* 57 */ play_toclient_game_profile
      | /* 59 */ play_toclient_game_profile
      | /* 61 */ play_toclient_game_profile
      | /* 63 */ play_toclient_game_profile
      | never;
  }[];
  action: number;
};
type play_toserver_packet_query_block_nbt = {
  location: never;
  transactionId: number;
};
type play_toclient_packet_entity_sound_effect = {
  entityId: number;
  soundCategory: play_toclient_soundSource;
  soundEvent: /* 0 */
    | {
        range: number | undefined;
        resource: string;
      }
    | never;
  soundId: number;
  volume: number;
  seed: number;
  pitch: number;
};
type configuration_toserver_packet_common_cookie_response =
  packet_common_cookie_response;
type play_toclient_chat_session = chat_session;
type play_toclient_packet_keep_alive = {
  keepAliveId: number;
};
type play_toclient_packet_camera = {
  cameraId: number;
};
type play_toclient_soundSource = soundSource;
type login_toclient_packet_compress = {
  threshold: number;
};
type play_toserver_packet_pong = {
  id: number;
};
type login_toserver_packet_login_plugin_response = {
  data: buffer | undefined;
  messageId: number;
};
type play_toserver_packet_use_item = {
  sequence: number;
  rotation: play_toserver_vec2f;
  hand: number;
};
type play_toclient_packet_debug_sample = {
  sample: number[];
  type: number;
};
type play_toclient_packet_map_chunk = {
  blockEntities: play_toclient_chunkBlockEntity[];
  blockLightMask: number[];
  emptySkyLightMask: number[];
  skyLight: number[][];
  chunkData: never;
  emptyBlockLightMask: number[];
  blockLight: number[][];
  x: number;
  heightmaps: never;
  skyLightMask: number[];
  z: number;
};
type play_toclient_packet_world_border_warning_delay = {
  warningTime: number;
};
type play_toclient_packet_animation = {
  animation: number;
  entityId: number;
};
type play_toclient_packet_difficulty = {
  difficultyLocked: boolean;
  difficulty: number;
};
type play_toclient_packet_set_passengers = {
  passengers: number[];
  entityId: number;
};
type play_toserver_packet_chunk_batch_received = {
  chunksPerTick: number;
};
type play_toserver_packet_position = {
  z: number;
  onGround: boolean;
  y: number;
  x: number;
};
type play_toclient_packet_system_chat = {
  isActionBar: boolean;
  content: never;
};
type play_toclient_packet_world_border_warning_reach = {
  warningBlocks: number;
};
type play_toserver_packet_resource_pack_receive = {
  result: number;
  uuid: string;
};
type play_toclient_packet_game_state_change = {
  gameMode: number;
  reason: number;
};
type play_toserver_packet_edit_book = {
  title: string | undefined;
  hand: number;
  pages: string[];
};
type login_toclient_packet_common_cookie_request = packet_common_cookie_request;
type play_toserver_packet_debug_sample_subscription = {
  type: number;
};
type configuration_toclient_packet_reset_chat = Record<never, never> & {
  __type: "empty_object";
};
type play_toserver_ByteArray = ByteArray;
type play_toclient_packet_world_border_lerp_size = {
  newDiameter: number;
  speed: number;
  oldDiameter: number;
};
type play_toclient_packet_hide_message = {
  id: number;
  signature: /* 0 */ never | never;
};
type play_toclient_packet_action_bar = {
  text: never;
};
type play_toclient_chunkBlockEntity = chunkBlockEntity;
type play_toserver_packet_flying = {
  onGround: boolean;
};
type status_toclient_packet_server_info = {
  response: string;
};
type play_toclient_packet_block_action = {
  location: never;
  byte1: number;
  byte2: number;
  blockId: number;
};
type play_toclient_packet_update_time = {
  age: number;
  time: number;
};
type play_toclient_packet_craft_progress_bar = {
  property: number;
  value: number;
  windowId: number;
};
type play_toclient_packet_damage_event = {
  sourceCauseId: number;
  entityId: number;
  sourcePosition: play_toclient_vec3f64 | undefined;
  sourceDirectId: number;
  sourceTypeId: number;
};
type play_toclient_packet_add_resource_pack = {
  uuid: string;
  hash: string;
  url: string;
  forced: boolean;
  promptMessage: never | undefined;
};
type play_toclient_minecraft_smelting_format = minecraft_smelting_format;
type play_toserver_packet_set_creative_slot = {
  item: play_toserver_Slot;
  slot: number;
};
type configuration_toserver_packet_finish_configuration = Record<
  never,
  never
> & { __type: "empty_object" };
type play_toclient_packet_scoreboard_objective = {
  name: string;
  styling: /* 0 */ /* 1 */
    | never
    | /* 2 */ never
    | never
    | /* 2 */ /* 1 */ never
    | /* 2 */ never
    | never
    | never;
  number_format: /* 0 */
    | (number | undefined)
    | /* 2 */ (number | undefined)
    | never;
  displayText: /* 0 */ never | /* 2 */ never | never;
  action: number;
  type: /* 0 */ number | /* 2 */ number | never;
};
type play_toserver_packet_chat_session_update = {
  sessionUUID: string;
  expireTime: number;
  signature: play_toserver_ByteArray;
  publicKey: play_toserver_ByteArray;
};
type play_toclient_packet_update_view_distance = {
  viewDistance: number;
};
type login_toserver_packet_login_start = {
  username: string;
  playerUUID: string;
};
type configuration_toclient_packet_keep_alive = {
  keepAliveId: number;
};
type play_toserver_packet_close_window = {
  windowId: number;
};
type play_toserver_packet_lock_difficulty = {
  locked: boolean;
};
type configuration_toclient_packet_remove_resource_pack = {
  uuid: string | undefined;
};
type play_toclient_packet_position = {
  pitch: number;
  y: number;
  flags: number;
  yaw: number;
  z: number;
  x: number;
  teleportId: number;
};
type play_toclient_packet_set_projectile_power = {
  accelerationPower: number;
  id: number;
};
type play_toclient_packet_ping_response = {
  id: number;
};
type play_toserver_packet_message_acknowledgement = {
  count: number;
};
type play_toclient_packet_playerlist_header = {
  header: never;
  footer: never;
};
type play_toclient_packet_entity_update_attributes = {
  entityId: number;
  properties: {
    value: number;
    modifiers: {
      amount: number;
      operation: number;
      uuid: string;
    }[];
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
  }[];
};
type play_toserver_packet_set_beacon_effect = {
  secondary_effect: number | undefined;
  primary_effect: number | undefined;
};
type play_toclient_packet_spawn_position = {
  angle: number;
  location: never;
};
type play_toserver_packet_steer_boat = {
  rightPaddle: boolean;
  leftPaddle: boolean;
};
type play_toclient_packet_start_configuration = Record<never, never> & {
  __type: "empty_object";
};
type play_toserver_packet_enchant_item = {
  enchantment: number;
  windowId: number;
};
type play_toclient_packet_end_combat_event = {
  duration: number;
};
type play_toclient_packet_spawn_entity_experience_orb = {
  entityId: number;
  z: number;
  count: number;
  x: number;
  y: number;
};
type play_toclient_Slot = Slot;
type play_toclient_packet_chunk_batch_finished = {
  batchSize: number;
};
type play_toserver_packet_update_structure_block = {
  name: string;
  integrity: number;
  offset_x: number;
  flags: number;
  size_y: number;
  location: never;
  rotation: number;
  seed: number;
  size_x: number;
  offset_z: number;
  action: number;
  size_z: number;
  mirror: number;
  mode: number;
  offset_y: number;
  metadata: string;
};
type login_toclient_packet = {
  name:
    | "disconnect"
    | "encryption_begin"
    | "success"
    | "compress"
    | "login_plugin_request"
    | "cookie_request";
  params: /* disconnect */
    | login_toclient_packet_disconnect
    | /* encryption_begin */ login_toclient_packet_encryption_begin
    | /* success */ login_toclient_packet_success
    | /* compress */ login_toclient_packet_compress
    | /* login_plugin_request */ login_toclient_packet_login_plugin_request
    | /* cookie_request */ login_toclient_packet_common_cookie_request;
};
type login_toclient_packet_encryption_begin = {
  verifyToken: never;
  shouldAuthenticate: boolean;
  serverId: string;
  publicKey: never;
};
type configuration_toclient_packet_common_server_links =
  packet_common_server_links;
type play_toclient_previousMessages = previousMessages;
type play_toclient_packet_chat_suggestions = {
  entries: string[];
  action: number;
};
type play_toclient_packet_common_store_cookie = packet_common_store_cookie;
type play_toclient_packet_held_item_slot = {
  slot: number;
};
type login_toclient_packet_login_plugin_request = {
  messageId: number;
  channel: string;
  data: buffer;
};
type configuration_toserver_packet_common_select_known_packs =
  packet_common_select_known_packs;
type play_toclient_packet_simulation_distance = {
  distance: number;
};
type play_toserver_Slot = Slot;
type play_toserver_packet_select_trade = {
  slot: number;
};
type status_toclient_packet_ping = {
  time: number;
};
type configuration_toclient_packet_common_custom_report_details =
  packet_common_custom_report_details;
type play_toclient_packet_update_light = {
  skyLight: number[][];
  blockLight: number[][];
  chunkZ: number;
  chunkX: number;
  skyLightMask: number[];
  emptyBlockLightMask: number[];
  blockLightMask: number[];
  emptySkyLightMask: number[];
};
type configuration_toclient_packet_common_cookie_request =
  packet_common_cookie_request;
type play_toclient_packet_update_view_position = {
  chunkX: number;
  chunkZ: number;
};
type play_toclient_minecraft_simple_recipe_format =
  minecraft_simple_recipe_format;
type play_toserver_packet_chat_command = {
  command: string;
};
type play_toserver_packet_teleport_confirm = {
  teleportId: number;
};
type play_toserver_packet_advancement_tab = {
  action: number;
  tabId: /* 0 */ string | /* 1 */ never;
};
type login_toserver_packet_encryption_begin = {
  verifyToken: never;
  sharedSecret: never;
};
type play_toserver_packet_tab_complete = {
  transactionId: number;
  text: string;
};
type play_toclient_packet_chunk_batch_start = Record<never, never> & {
  __type: "empty_object";
};
type play_toclient_packet_enter_combat_event = Record<never, never> & {
  __type: "empty_object";
};
type play_toserver_packet_displayed_recipe = {
  recipeId: string;
};
type configuration_toclient_packet_disconnect = {
  reason: never;
};
type play_toclient_packet_acknowledge_player_digging = {
  sequenceId: number;
};
type play_toclient_ChatTypes = {
  registryIndex: number;
};
type play_toclient_packet_open_sign_entity = {
  location: never;
  isFrontText: boolean;
};
type play_toclient_ingredient = ingredient;
type play_toserver_packet_set_slot_state = {
  window_id: number;
  slot_id: number;
  state: boolean;
};
type play_toclient_game_profile = game_profile;
type play_toclient_packet_spawn_entity = {
  entityId: number;
  pitch: number;
  objectData: number;
  x: number;
  objectUUID: string;
  yaw: number;
  velocityY: number;
  type: number;
  y: number;
  velocityX: number;
  velocityZ: number;
  headPitch: number;
  z: number;
};
type play_toclient_packet_block_change = {
  location: never;
  type: number;
};
type play_toclient_packet_collect = {
  pickupItemCount: number;
  collectorEntityId: number;
  collectedEntityId: number;
};
type configuration_toserver_packet_common_custom_report_details =
  packet_common_custom_report_details;
type configuration_toclient_packet_common_transfer = packet_common_transfer;
type play_toclient_packet_block_break_animation = {
  entityId: number;
  location: never;
  destroyStage: number;
};
type play_toserver_packet_steer_vehicle = {
  forward: number;
  jump: number;
  sideways: number;
};
type play_toclient_packet_rel_entity_move = {
  onGround: boolean;
  dZ: number;
  entityId: number;
  dY: number;
  dX: number;
};
type configuration_toclient_packet_ping = {
  id: number;
};
type play_toserver_packet_entity_action = {
  jumpBoost: number;
  entityId: number;
  actionId: number;
};
type play_toclient_packet_open_window = {
  inventoryType: number;
  windowTitle: never;
  windowId: number;
};
type play_toclient_packet_entity_teleport = {
  yaw: number;
  pitch: number;
  onGround: boolean;
  x: number;
  y: number;
  entityId: number;
  z: number;
};
type play_toserver_packet_use_entity = {
  z: /* 2 */ number | never;
  hand: /* 0 */ number | /* 2 */ number | never;
  x: /* 2 */ number | never;
  target: number;
  y: /* 2 */ number | never;
  sneaking: boolean;
  mouse: number;
};
type play_toclient_packet_multi_block_change = {
  chunkCoordinates: {
    x: number | boolean;
    z: number | boolean;
    y: number | boolean;
  };
  records: number[];
};
type play_toclient_command_node = command_node;
type configuration_toclient_packet_add_resource_pack = {
  hash: string;
  uuid: string;
  forced: boolean;
  promptMessage: never | undefined;
  url: string;
};
type play_toclient_packet_set_slot = {
  windowId: number;
  slot: number;
  item: play_toclient_Slot;
  stateId: number;
};
type play_toclient_packet_remove_entity_effect = {
  entityId: number;
  effectId: number;
};
type play_toclient_packet_entity_effect = {
  amplifier: number;
  entityId: number;
  effectId: number;
  flags: number;
  duration: number;
};
type configuration_toserver_packet_keep_alive = {
  keepAliveId: number;
};
type play_toserver_packet_update_jigsaw_block = {
  pool: string;
  jointType: string;
  placement_priority: number;
  selection_priority: number;
  finalState: string;
  name: string;
  location: never;
  target: string;
};
type handshaking_toserver_packet_set_protocol = {
  protocolVersion: number;
  serverHost: string;
  serverPort: number;
  nextState: number;
};
type play_toclient_packet = {
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
    | /* spawn_entity */ play_toclient_packet_spawn_entity
    | /* spawn_entity_experience_orb */ play_toclient_packet_spawn_entity_experience_orb
    | /* animation */ play_toclient_packet_animation
    | /* statistics */ play_toclient_packet_statistics
    | /* acknowledge_player_digging */ play_toclient_packet_acknowledge_player_digging
    | /* block_break_animation */ play_toclient_packet_block_break_animation
    | /* tile_entity_data */ play_toclient_packet_tile_entity_data
    | /* block_action */ play_toclient_packet_block_action
    | /* block_change */ play_toclient_packet_block_change
    | /* boss_bar */ play_toclient_packet_boss_bar
    | /* difficulty */ play_toclient_packet_difficulty
    | /* chunk_batch_finished */ play_toclient_packet_chunk_batch_finished
    | /* chunk_batch_start */ play_toclient_packet_chunk_batch_start
    | /* chunk_biomes */ play_toclient_packet_chunk_biomes
    | /* clear_titles */ play_toclient_packet_clear_titles
    | /* tab_complete */ play_toclient_packet_tab_complete
    | /* declare_commands */ play_toclient_packet_declare_commands
    | /* close_window */ play_toclient_packet_close_window
    | /* window_items */ play_toclient_packet_window_items
    | /* craft_progress_bar */ play_toclient_packet_craft_progress_bar
    | /* set_slot */ play_toclient_packet_set_slot
    | /* cookie_request */ play_toclient_packet_common_cookie_request
    | /* set_cooldown */ play_toclient_packet_set_cooldown
    | /* chat_suggestions */ play_toclient_packet_chat_suggestions
    | /* custom_payload */ play_toclient_packet_custom_payload
    | /* damage_event */ play_toclient_packet_damage_event
    | /* debug_sample */ play_toclient_packet_debug_sample
    | /* hide_message */ play_toclient_packet_hide_message
    | /* kick_disconnect */ play_toclient_packet_kick_disconnect
    | /* profileless_chat */ play_toclient_packet_profileless_chat
    | /* entity_status */ play_toclient_packet_entity_status
    | /* explosion */ play_toclient_packet_explosion
    | /* unload_chunk */ play_toclient_packet_unload_chunk
    | /* game_state_change */ play_toclient_packet_game_state_change
    | /* open_horse_window */ play_toclient_packet_open_horse_window
    | /* hurt_animation */ play_toclient_packet_hurt_animation
    | /* initialize_world_border */ play_toclient_packet_initialize_world_border
    | /* keep_alive */ play_toclient_packet_keep_alive
    | /* map_chunk */ play_toclient_packet_map_chunk
    | /* world_event */ play_toclient_packet_world_event
    | /* world_particles */ play_toclient_packet_world_particles
    | /* update_light */ play_toclient_packet_update_light
    | /* login */ play_toclient_packet_login
    | /* map */ play_toclient_packet_map
    | /* trade_list */ play_toclient_packet_trade_list
    | /* rel_entity_move */ play_toclient_packet_rel_entity_move
    | /* entity_move_look */ play_toclient_packet_entity_move_look
    | /* entity_look */ play_toclient_packet_entity_look
    | /* vehicle_move */ play_toclient_packet_vehicle_move
    | /* open_book */ play_toclient_packet_open_book
    | /* open_window */ play_toclient_packet_open_window
    | /* open_sign_entity */ play_toclient_packet_open_sign_entity
    | /* ping */ play_toclient_packet_ping
    | /* ping_response */ play_toclient_packet_ping_response
    | /* craft_recipe_response */ play_toclient_packet_craft_recipe_response
    | /* abilities */ play_toclient_packet_abilities
    | /* player_chat */ play_toclient_packet_player_chat
    | /* end_combat_event */ play_toclient_packet_end_combat_event
    | /* enter_combat_event */ play_toclient_packet_enter_combat_event
    | /* death_combat_event */ play_toclient_packet_death_combat_event
    | /* player_remove */ play_toclient_packet_player_remove
    | /* player_info */ play_toclient_packet_player_info
    | /* face_player */ play_toclient_packet_face_player
    | /* position */ play_toclient_packet_position
    | /* unlock_recipes */ play_toclient_packet_unlock_recipes
    | /* entity_destroy */ play_toclient_packet_entity_destroy
    | /* remove_entity_effect */ play_toclient_packet_remove_entity_effect
    | /* reset_score */ play_toclient_packet_reset_score
    | /* remove_resource_pack */ play_toclient_packet_remove_resource_pack
    | /* add_resource_pack */ play_toclient_packet_add_resource_pack
    | /* respawn */ play_toclient_packet_respawn
    | /* entity_head_rotation */ play_toclient_packet_entity_head_rotation
    | /* multi_block_change */ play_toclient_packet_multi_block_change
    | /* select_advancement_tab */ play_toclient_packet_select_advancement_tab
    | /* server_data */ play_toclient_packet_server_data
    | /* action_bar */ play_toclient_packet_action_bar
    | /* world_border_center */ play_toclient_packet_world_border_center
    | /* world_border_lerp_size */ play_toclient_packet_world_border_lerp_size
    | /* world_border_size */ play_toclient_packet_world_border_size
    | /* world_border_warning_delay */ play_toclient_packet_world_border_warning_delay
    | /* world_border_warning_reach */ play_toclient_packet_world_border_warning_reach
    | /* camera */ play_toclient_packet_camera
    | /* held_item_slot */ play_toclient_packet_held_item_slot
    | /* update_view_position */ play_toclient_packet_update_view_position
    | /* update_view_distance */ play_toclient_packet_update_view_distance
    | /* spawn_position */ play_toclient_packet_spawn_position
    | /* scoreboard_display_objective */ play_toclient_packet_scoreboard_display_objective
    | /* entity_metadata */ play_toclient_packet_entity_metadata
    | /* attach_entity */ play_toclient_packet_attach_entity
    | /* entity_velocity */ play_toclient_packet_entity_velocity
    | /* entity_equipment */ play_toclient_packet_entity_equipment
    | /* experience */ play_toclient_packet_experience
    | /* update_health */ play_toclient_packet_update_health
    | /* scoreboard_objective */ play_toclient_packet_scoreboard_objective
    | /* set_passengers */ play_toclient_packet_set_passengers
    | /* teams */ play_toclient_packet_teams
    | /* scoreboard_score */ play_toclient_packet_scoreboard_score
    | /* simulation_distance */ play_toclient_packet_simulation_distance
    | /* set_title_subtitle */ play_toclient_packet_set_title_subtitle
    | /* update_time */ play_toclient_packet_update_time
    | /* set_title_text */ play_toclient_packet_set_title_text
    | /* set_title_time */ play_toclient_packet_set_title_time
    | /* entity_sound_effect */ play_toclient_packet_entity_sound_effect
    | /* sound_effect */ play_toclient_packet_sound_effect
    | /* start_configuration */ play_toclient_packet_start_configuration
    | /* stop_sound */ play_toclient_packet_stop_sound
    | /* store_cookie */ play_toclient_packet_common_store_cookie
    | /* system_chat */ play_toclient_packet_system_chat
    | /* playerlist_header */ play_toclient_packet_playerlist_header
    | /* nbt_query_response */ play_toclient_packet_nbt_query_response
    | /* collect */ play_toclient_packet_collect
    | /* entity_teleport */ play_toclient_packet_entity_teleport
    | /* set_ticking_state */ play_toclient_packet_set_ticking_state
    | /* step_tick */ play_toclient_packet_step_tick
    | /* transfer */ play_toclient_packet_common_transfer
    | /* advancements */ play_toclient_packet_advancements
    | /* entity_update_attributes */ play_toclient_packet_entity_update_attributes
    | /* entity_effect */ play_toclient_packet_entity_effect
    | /* declare_recipes */ play_toclient_packet_declare_recipes
    | /* tags */ play_toclient_packet_tags;
};
type play_toserver_packet_set_difficulty = {
  newDifficulty: number;
};
type play_toserver_packet_common_cookie_response =
  packet_common_cookie_response;
type configuration_toclient_packet_common_select_known_packs =
  packet_common_select_known_packs;
type configuration_toserver_packet_settings = {
  chatFlags: number;
  enableServerListing: boolean;
  locale: string;
  chatColors: boolean;
  mainHand: number;
  skinParts: number;
  enableTextFiltering: boolean;
  viewDistance: number;
};
type play_toclient_packet_set_cooldown = {
  itemID: number;
  cooldownTicks: number;
};
type handshaking_toclient_packet = {
  params: never;
  name: never;
};
type login_toclient_packet_disconnect = {
  reason: string;
};
type configuration_toclient_packet_feature_flags = {
  features: string[];
};
type play_toclient_packet_tab_complete = {
  matches: {
    tooltip: never | undefined;
    match: string;
  }[];
  length: number;
  transactionId: number;
  start: number;
};
type play_toclient_packet_experience = {
  level: number;
  experienceBar: number;
  totalExperience: number;
};
type play_toclient_packet_step_tick = {
  tick_steps: number;
};
type play_toclient_packet_boss_bar = {
  flags: /* 0 */ number | /* 5 */ number | never;
  title: /* 0 */ never | /* 3 */ never | never;
  dividers: /* 0 */ number | /* 4 */ number | never;
  entityUUID: string;
  health: /* 0 */ number | /* 2 */ number | never;
  color: /* 0 */ number | /* 4 */ number | never;
  action: number;
};
type play_toserver_packet_client_command = {
  actionId: number;
};
type play_toserver_packet_generate_structure = {
  location: never;
  levels: number;
  keepJigsaws: boolean;
};
type handshaking_toserver_packet_legacy_server_list_ping = {
  payload: number;
};
type configuration_toclient_packet_common_store_cookie =
  packet_common_store_cookie;
type play_toclient_ChatType = {
  parameters: play_toclient_ChatTypeParameterType[];
  style: never;
  translationKey: string;
};
type configuration_toserver_packet_custom_payload = {
  data: buffer;
  channel: string;
};
type play_toclient_anonOptionalNbt = anonOptionalNbt;
type play_toclient_packet_unload_chunk = {
  chunkZ: number;
  chunkX: number;
};
type play_toclient_packet_entity_look = {
  pitch: number;
  onGround: boolean;
  entityId: number;
  yaw: number;
};
type play_toclient_packet_world_border_size = {
  diameter: number;
};
type play_toclient_packet_attach_entity = {
  vehicleId: number;
  entityId: number;
};
type play_toclient_Particle = Particle;
type play_toclient_packet_scoreboard_score = {
  display_name: never | undefined;
  itemName: string;
  scoreName: string;
  styling: /* 1 */ never | /* 2 */ never | never;
  number_format: number | undefined;
  value: number;
};
type play_toserver_packet_pick_item = {
  slot: number;
};
type play_toserver_packet_craft_recipe_request = {
  makeAll: boolean;
  windowId: number;
  recipe: string;
};
type login_toclient_packet_success = {
  uuid: string;
  strictErrorHandling: boolean;
  properties: {
    signature: string | undefined;
    value: string;
    name: string;
  }[];
  username: string;
};
type play_toserver_packet_ping_request = {
  id: number;
};
type play_toclient_packet_server_data = {
  iconBytes: play_toclient_ByteArray | undefined;
  motd: never;
};
type login_toserver_packet_login_acknowledged = Record<never, never> & {
  __type: "empty_object";
};
type play_toserver_packet = {
  params: /* teleport_confirm */
    | play_toserver_packet_teleport_confirm
    | /* query_block_nbt */ play_toserver_packet_query_block_nbt
    | /* set_difficulty */ play_toserver_packet_set_difficulty
    | /* message_acknowledgement */ play_toserver_packet_message_acknowledgement
    | /* chat_command */ play_toserver_packet_chat_command
    | /* chat_command_signed */ play_toserver_packet_chat_command_signed
    | /* chat_message */ play_toserver_packet_chat_message
    | /* chat_session_update */ play_toserver_packet_chat_session_update
    | /* chunk_batch_received */ play_toserver_packet_chunk_batch_received
    | /* client_command */ play_toserver_packet_client_command
    | /* settings */ play_toserver_packet_settings
    | /* tab_complete */ play_toserver_packet_tab_complete
    | /* configuration_acknowledged */ play_toserver_packet_configuration_acknowledged
    | /* enchant_item */ play_toserver_packet_enchant_item
    | /* window_click */ play_toserver_packet_window_click
    | /* close_window */ play_toserver_packet_close_window
    | /* set_slot_state */ play_toserver_packet_set_slot_state
    | /* cookie_response */ play_toserver_packet_common_cookie_response
    | /* custom_payload */ play_toserver_packet_custom_payload
    | /* edit_book */ play_toserver_packet_edit_book
    | /* query_entity_nbt */ play_toserver_packet_query_entity_nbt
    | /* use_entity */ play_toserver_packet_use_entity
    | /* generate_structure */ play_toserver_packet_generate_structure
    | /* keep_alive */ play_toserver_packet_keep_alive
    | /* lock_difficulty */ play_toserver_packet_lock_difficulty
    | /* position */ play_toserver_packet_position
    | /* position_look */ play_toserver_packet_position_look
    | /* look */ play_toserver_packet_look
    | /* flying */ play_toserver_packet_flying
    | /* vehicle_move */ play_toserver_packet_vehicle_move
    | /* steer_boat */ play_toserver_packet_steer_boat
    | /* pick_item */ play_toserver_packet_pick_item
    | /* ping_request */ play_toserver_packet_ping_request
    | /* craft_recipe_request */ play_toserver_packet_craft_recipe_request
    | /* abilities */ play_toserver_packet_abilities
    | /* block_dig */ play_toserver_packet_block_dig
    | /* entity_action */ play_toserver_packet_entity_action
    | /* steer_vehicle */ play_toserver_packet_steer_vehicle
    | /* pong */ play_toserver_packet_pong
    | /* recipe_book */ play_toserver_packet_recipe_book
    | /* displayed_recipe */ play_toserver_packet_displayed_recipe
    | /* name_item */ play_toserver_packet_name_item
    | /* resource_pack_receive */ play_toserver_packet_resource_pack_receive
    | /* advancement_tab */ play_toserver_packet_advancement_tab
    | /* select_trade */ play_toserver_packet_select_trade
    | /* set_beacon_effect */ play_toserver_packet_set_beacon_effect
    | /* held_item_slot */ play_toserver_packet_held_item_slot
    | /* update_command_block */ play_toserver_packet_update_command_block
    | /* update_command_block_minecart */ play_toserver_packet_update_command_block_minecart
    | /* set_creative_slot */ play_toserver_packet_set_creative_slot
    | /* update_jigsaw_block */ play_toserver_packet_update_jigsaw_block
    | /* update_structure_block */ play_toserver_packet_update_structure_block
    | /* update_sign */ play_toserver_packet_update_sign
    | /* arm_animation */ play_toserver_packet_arm_animation
    | /* spectate */ play_toserver_packet_spectate
    | /* block_place */ play_toserver_packet_block_place
    | /* use_item */ play_toserver_packet_use_item;
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
};
type play_toclient_packet_entity_head_rotation = {
  entityId: number;
  headYaw: number;
};
type play_toclient_packet_vehicle_move = {
  yaw: number;
  pitch: number;
  y: number;
  z: number;
  x: number;
};
type play_toserver_packet_arm_animation = {
  hand: number;
};
type play_toclient_packet_chunk_biomes = {
  biomes: {
    data: play_toclient_ByteArray;
    position: play_toclient_packedChunkPos;
  }[];
};
type play_toclient_packet_entity_metadata = {
  metadata: never;
  entityId: number;
};
type status_toserver_packet_ping_start = Record<never, never> & {
  __type: "empty_object";
};
type play_toclient_packet_profileless_chat = {
  type: play_toclient_ChatTypes;
  target: never | undefined;
  message: never;
  name: never;
};
type play_toserver_packet_block_dig = {
  face: number;
  status: number;
  sequence: number;
  location: never;
};
type configuration_toclient_packet_tags = {
  tags: {
    tagType: string;
    tags: configuration_toclient_tags;
  }[];
};
type play_toclient_packet_close_window = {
  windowId: number;
};
type play_toserver_packet_window_click = {
  windowId: number;
  mode: number;
  cursorItem: play_toserver_Slot;
  slot: number;
  mouseButton: number;
  stateId: number;
  changedSlots: {
    location: number;
    item: play_toserver_Slot;
  }[];
};
type play_toclient_packet_common_transfer = packet_common_transfer;
type play_toclient_packet_common_cookie_request = packet_common_cookie_request;
type play_toclient_packet_world_particles = {
  velocityOffset: number;
  offsetY: number;
  particle: play_toclient_Particle;
  offsetZ: number;
  amount: number;
  x: number;
  y: number;
  longDistance: boolean;
  z: number;
  offsetX: number;
};
type play_toclient_packet_login = {
  worldNames: string[];
  maxPlayers: number;
  isHardcore: boolean;
  enforcesSecureChat: boolean;
  simulationDistance: number;
  enableRespawnScreen: boolean;
  worldState: play_toclient_SpawnInfo;
  doLimitedCrafting: boolean;
  entityId: number;
  viewDistance: number;
  reducedDebugInfo: boolean;
};
type play_toclient_packet_hurt_animation = {
  entityId: number;
  yaw: number;
};
type play_toclient_packet_kick_disconnect = {
  reason: never;
};
type play_toclient_packet_reset_score = {
  entity_name: string;
  objective_name: string | undefined;
};
type play_toserver_packet_update_command_block_minecart = {
  command: string;
  entityId: number;
  track_output: boolean;
};
type play_toserver_packet_held_item_slot = {
  slotId: number;
};
type play_toserver_packet_vehicle_move = {
  z: number;
  y: number;
  x: number;
  yaw: number;
  pitch: number;
};
type play_toclient_packet_player_chat = {
  networkTargetName: never | undefined;
  previousMessages: play_toclient_previousMessages;
  signature: never | undefined;
  senderUuid: string;
  timestamp: number;
  filterTypeMask: /* 2 */ number[] | never;
  plainMessage: string;
  unsignedChatContent: never | undefined;
  filterType: number;
  index: number;
  salt: number;
  type: play_toclient_ChatTypes;
  networkName: never;
};
type play_toclient_packet_tile_entity_data = {
  action: number;
  nbtData: play_toclient_anonOptionalNbt;
  location: never;
};
type play_toclient_packet_statistics = {
  entries: {
    value: number;
    statisticId: number;
    categoryId: number;
  }[];
};
type play_toclient_packet_craft_recipe_response = {
  windowId: number;
  recipe: string;
};
type play_toclient_packet_update_health = {
  food: number;
  foodSaturation: number;
  health: number;
};
type play_toclient_packet_declare_recipes = {
  recipes: {
    name: string;
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
    data: /* minecraft:crafting_shapeless */
      | {
          category: number;
          result: play_toclient_Slot;
          group: string;
          ingredients: play_toclient_ingredient[];
        }
      | /* minecraft:crafting_shaped */ {
          width: number;
          category: number;
          ingredients: play_toclient_ingredient[][];
          height: number;
          group: string;
          result: play_toclient_Slot;
          showNotification: boolean;
        }
      | /* minecraft:crafting_special_armordye */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_bookcloning */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_mapcloning */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_mapextending */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_firework_rocket */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_firework_star */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_firework_star_fade */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_repairitem */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_tippedarrow */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_bannerduplicate */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_banneraddpattern */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_shielddecoration */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_shulkerboxcoloring */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:crafting_special_suspiciousstew */ play_toclient_minecraft_simple_recipe_format
      | /* minecraft:smelting */ play_toclient_minecraft_smelting_format
      | /* minecraft:blasting */ play_toclient_minecraft_smelting_format
      | /* minecraft:smoking */ play_toclient_minecraft_smelting_format
      | /* minecraft:campfire_cooking */ play_toclient_minecraft_smelting_format
      | /* minecraft:stonecutting */ {
          ingredient: play_toclient_ingredient;
          result: play_toclient_Slot;
          group: string;
        }
      | /* minecraft:smithing_transform */ {
          base: play_toclient_ingredient;
          addition: play_toclient_ingredient;
          template: play_toclient_ingredient;
          result: play_toclient_Slot;
        }
      | /* minecraft:smithing_trim */ {
          template: play_toclient_ingredient;
          addition: play_toclient_ingredient;
          base: play_toclient_ingredient;
        }
      | /* minecraft:crafting_decorated_pot */ play_toclient_minecraft_simple_recipe_format;
  }[];
};
type play_toclient_tags = tags;
type play_toclient_packet_sound_effect = {
  y: number;
  seed: number;
  soundCategory: play_toclient_soundSource;
  z: number;
  soundEvent: /* 0 */
    | {
        range: number | undefined;
        resource: string;
      }
    | never;
  volume: number;
  pitch: number;
  soundId: number;
  x: number;
};
type play_toserver_packet_spectate = {
  target: string;
};
type play_toclient_packet_death_combat_event = {
  message: never;
  playerId: number;
};
type play_toclient_packet_player_remove = {
  players: string[];
};
type play_toclient_packet_trade_list = {
  windowId: number;
  trades: {
    outputItem: play_toclient_Slot;
    maximumNbTradeUses: number;
    inputItem1: {
      addedComponentCount: number;
      components: play_toclient_SlotComponent[];
      itemId: number;
      itemCount: number;
    };
    specialPrice: number;
    tradeDisabled: boolean;
    priceMultiplier: number;
    demand: number;
    inputItem2:
      | {
          itemCount: number;
          components: play_toclient_SlotComponent[];
          itemId: number;
          addedComponentCount: number;
        }
      | undefined;
    nbTradeUses: number;
    xp: number;
  }[];
  villagerLevel: number;
  experience: number;
  isRegularVillager: boolean;
  canRestock: boolean;
};
type play_toclient_packet_remove_resource_pack = {
  uuid: string | undefined;
};
type play_toserver_packet_configuration_acknowledged = Record<never, never> & {
  __type: "empty_object";
};
type play_toclient_packet_respawn = {
  copyMetadata: number;
  worldState: play_toclient_SpawnInfo;
};
type login_toserver_packet_common_cookie_response =
  packet_common_cookie_response;
type play_toclient_packet_nbt_query_response = {
  nbt: play_toclient_anonOptionalNbt;
  transactionId: number;
};
type play_toclient_packet_entity_velocity = {
  entityId: number;
  velocityZ: number;
  velocityX: number;
  velocityY: number;
};
type play_toserver_packet_settings = {
  enableServerListing: boolean;
  chatFlags: number;
  skinParts: number;
  locale: string;
  chatColors: boolean;
  enableTextFiltering: boolean;
  viewDistance: number;
  mainHand: number;
};
type play_toclient_packet_stop_sound = {
  flags: number;
  source: /* 1 */ number | /* 3 */ number | never;
  sound: /* 2 */ string | /* 3 */ string | never;
};
type play_toclient_packedChunkPos = packedChunkPos;
type play_toclient_packet_map = {
  columns: number;
  icons:
    | {
        z: number;
        type: number;
        x: number;
        displayName: never | undefined;
        direction: number;
      }[]
    | undefined;
  locked: boolean;
  rows: /* 0 */ never | number;
  x: /* 0 */ never | number;
  y: /* 0 */ never | number;
  data: /* 0 */ never | never;
  scale: number;
  itemDamage: number;
};
type play_toclient_packet_advancements = {
  identifiers: string[];
  progressMapping: {
    value: {
      criterionIdentifier: string;
      criterionProgress: number | undefined;
    }[];
    key: string;
  }[];
  reset: boolean;
  advancementMapping: {
    key: string;
    value: {
      parentId: string | undefined;
      requirements: string[][];
      displayData:
        | {
            flags: {
              unused: number | boolean;
              hidden: number | boolean;
              show_toast: number | boolean;
              has_background_texture: number | boolean;
            };
            icon: play_toclient_Slot;
            xCord: number;
            frameType: number;
            title: never;
            yCord: number;
            description: never;
            backgroundTexture: /* 1 */ string | never;
          }
        | undefined;
      sendsTelemtryData: boolean;
    };
  }[];
};
type configuration_toclient_packet_finish_configuration = Record<
  never,
  never
> & { __type: "empty_object" };
type play_toserver_packet_update_command_block = {
  mode: number;
  location: never;
  command: string;
  flags: number;
};
type configuration_toserver_packet = {
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
    | configuration_toserver_packet_settings
    | /* cookie_response */ configuration_toserver_packet_common_cookie_response
    | /* custom_payload */ configuration_toserver_packet_custom_payload
    | /* finish_configuration */ configuration_toserver_packet_finish_configuration
    | /* keep_alive */ configuration_toserver_packet_keep_alive
    | /* pong */ configuration_toserver_packet_pong
    | /* resource_pack_receive */ configuration_toserver_packet_resource_pack_receive
    | /* select_known_packs */ configuration_toserver_packet_common_select_known_packs
    | /* custom_report_details */ configuration_toserver_packet_common_custom_report_details
    | /* server_links */ configuration_toserver_packet_common_server_links;
};
type play_toclient_packet_world_event = {
  data: number;
  location: never;
  effectId: number;
  global: boolean;
};
type play_toclient_packet_set_ticking_state = {
  tick_rate: number;
  is_frozen: boolean;
};
type play_toserver_packet_block_place = {
  cursorX: number;
  cursorY: number;
  insideBlock: boolean;
  hand: number;
  direction: number;
  location: never;
  sequence: number;
  cursorZ: number;
};
type play_toclient_packet_clear_titles = {
  reset: boolean;
};
type login_toserver_packet = {
  params: /* login_start */
    | login_toserver_packet_login_start
    | /* encryption_begin */ login_toserver_packet_encryption_begin
    | /* login_plugin_response */ login_toserver_packet_login_plugin_response
    | /* login_acknowledged */ login_toserver_packet_login_acknowledged
    | /* cookie_response */ login_toserver_packet_common_cookie_response;
  name:
    | "login_start"
    | "encryption_begin"
    | "login_plugin_response"
    | "login_acknowledged"
    | "cookie_response";
};
type configuration_toserver_packet_pong = {
  id: number;
};
type play_toclient_packet_face_player = {
  entityId: /* true */ number | never;
  entity_feet_eyes: /* true */ number | never;
  z: number;
  y: number;
  feet_eyes: number;
  isEntity: boolean;
  x: number;
};
type play_toserver_packet_look = {
  onGround: boolean;
  yaw: number;
  pitch: number;
};
type play_toclient_packet_declare_commands = {
  nodes: play_toclient_command_node[];
  rootIndex: number;
};
type play_toclient_packet_set_title_text = {
  text: never;
};
type configuration_toserver_packet_resource_pack_receive = {
  uuid: string;
  result: number;
};
type play_toclient_packet_world_border_center = {
  z: number;
  x: number;
};
type play_toserver_packet_chat_message = {
  salt: number;
  acknowledged: never;
  message: string;
  timestamp: number;
  signature: never | undefined;
  offset: number;
};
type play_toclient_packet_entity_move_look = {
  dZ: number;
  yaw: number;
  dY: number;
  dX: number;
  pitch: number;
  onGround: boolean;
  entityId: number;
};
type play_toclient_packet_open_book = {
  hand: number;
};
type configuration_toclient_packet_custom_payload = {
  data: buffer;
  channel: string;
};
type play_toclient_packet_select_advancement_tab = {
  id: string | undefined;
};
type play_toclient_vec3f64 = vec3f64;
type play_toclient_ChatTypeParameterType = "content" | "sender" | "target";
type play_toclient_packet_open_horse_window = {
  windowId: number;
  entityId: number;
  nbSlots: number;
};
type play_toclient_packet_scoreboard_display_objective = {
  name: string;
  position: number;
};
type status_toclient_packet = {
  name: "server_info" | "ping";
  params: /* server_info */
    | status_toclient_packet_server_info
    | /* ping */ status_toclient_packet_ping;
};
type play_toserver_packet_custom_payload = {
  data: buffer;
  channel: string;
};
type play_toserver_packet_chat_command_signed = {
  argumentSignatures: {
    argumentName: string;
    signature: never;
  }[];
  messageCount: number;
  acknowledged: never;
  command: string;
  salt: number;
  timestamp: number;
};
type play_toclient_SpawnInfo = {
  portalCooldown: number;
  isFlat: boolean;
  previousGamemode: number;
  dimension: number;
  death:
    | {
        dimensionName: string;
        location: never;
      }
    | undefined;
  hashedSeed: number;
  name: string;
  isDebug: boolean;
  gamemode: "survival" | "creative" | "adventure" | "spectator";
};
type play_toclient_packet_set_title_time = {
  fadeIn: number;
  stay: number;
  fadeOut: number;
};
type play_toserver_vec2f = vec2f;
type status_toserver_packet = {
  name: "ping_start" | "ping";
  params: /* ping_start */
    | status_toserver_packet_ping_start
    | /* ping */ status_toserver_packet_ping;
};
type play_toserver_packet_name_item = {
  name: string;
};
type configuration_toclient_packet_registry_data = {
  entries: {
    key: string;
    value: never | undefined;
  }[];
  id: string;
};
type configuration_toserver_packet_common_server_links =
  packet_common_server_links;
type play_toclient_packet_initialize_world_border = {
  z: number;
  portalTeleportBoundary: number;
  speed: number;
  warningTime: number;
  warningBlocks: number;
  x: number;
  oldDiameter: number;
  newDiameter: number;
};
type play_toclient_packet_entity_destroy = {
  entityIds: number[];
};
type play_toclient_packet_set_title_subtitle = {
  text: never;
};
type play_toserver_packet_keep_alive = {
  keepAliveId: number;
};
type handshaking_toserver_packet = {
  name: "set_protocol" | "legacy_server_list_ping";
  params: /* set_protocol */
    | handshaking_toserver_packet_set_protocol
    | /* legacy_server_list_ping */ handshaking_toserver_packet_legacy_server_list_ping;
};
type play_toclient_packet_window_items = {
  windowId: number;
  carriedItem: play_toclient_Slot;
  items: play_toclient_Slot[];
  stateId: number;
};
type play_toclient_packet_unlock_recipes = {
  filteringCraftable: boolean;
  blastFurnaceOpen: boolean;
  action: number;
  recipes1: string[];
  smeltingBookOpen: boolean;
  filteringBlastFurnace: boolean;
  filteringSmoker: boolean;
  craftingBookOpen: boolean;
  recipes2: /* 0 */ string[] | never;
  smokerBookOpen: boolean;
  filteringSmeltable: boolean;
};
type play_toclient_packet_tags = {
  tags: {
    tags: play_toclient_tags;
    tagType: string;
  }[];
};
type play_toserver_packet_update_sign = {
  text2: string;
  text3: string;
  location: never;
  text1: string;
  text4: string;
  isFrontText: boolean;
};
type play_toserver_packet_query_entity_nbt = {
  transactionId: number;
  entityId: number;
};
