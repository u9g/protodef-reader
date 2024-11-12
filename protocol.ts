
type VarInt = never;
// type f64 = never;
// type i16 = never;
// type i8 = never;
// type i32 = never;
// type UUID = never;
// type EntityMetadata = never;
// type Position = never;
// type u8 = never;
// type bool = never;
// type Slot = never;
// type f32 = never;
type Void = never;
// type i64 = never;
// type OptionalNbt = never;
type RestBuffer = never;
// type Nbt = never;
// type VarLong = never;
// type u16 = never;
type Arr<T> = never;
type BitField<T> = never;
type Buffer<T> = never;
type Record_<K, V, Size = varint> = never;
type topBitSetTerminatedArray<T> = never;
type pstring<T> = never;
type entityMetadataLoop<T> = never;
type option<T> = never;
type String_ = never;
type ParticleData<T> = never;


type varint = never /* native */


type varlong = never /* native */


type optvarint = VarInt


type buffer = never /* native */


type u8 = never /* native */


type u16 = never /* native */


type u32 = never /* native */


type u64 = never /* native */


type i8 = never /* native */


type i16 = never /* native */


type i32 = never /* native */


type i64 = never /* native */


type bool = never /* native */


type f32 = never /* native */


type f64 = never /* native */


type UUID = never /* native */


type bitfield = never /* native */


type container = never /* native */


type array = never /* native */


type restBuffer = never /* native */


type anonymousNbt = never /* native */


type anonOptionalNbt = never /* native */


type arrayWithLengthOffset = never /* native */


type ByteArray = Buffer<{ countType: VarInt }>


type vec2f = {
                x: f32, y: f32 }


type vec3f = {
                x: f32, y: f32, z: f32 }


type vec4f = {
                x: f32, y: f32, z: f32, w: f32 }


type vec3f64 = {
                x: f64, y: f64, z: f64 }


type SlotComponentType = {
                    0: "custom_data"; 1: "max_stack_size"; 2: "max_damage"; 3: "damage"; 4: "unbreakable"; 5: "custom_name"; 6: "item_name"; 7: "lore"; 8: "rarity"; 9: "enchantments"; 10: "can_place_on"; 11: "can_break"; 12: "attribute_modifiers"; 13: "custom_model_data"; 14: "hide_additional_tooltip"; 15: "hide_tooltip"; 16: "repair_cost"; 17: "creative_slot_lock"; 18: "enchantment_glint_override"; 19: "intangible_projectile"; 20: "food"; 21: "fire_resistant"; 22: "tool"; 23: "stored_enchantments"; 24: "dyed_color"; 25: "map_color"; 26: "map_id"; 27: "map_decorations"; 28: "map_post_processing"; 29: "charged_projectiles"; 30: "bundle_contents"; 31: "potion_contents"; 32: "suspicious_stew_effects"; 33: "writable_book_content"; 34: "written_book_content"; 35: "trim"; 36: "debug_stick_state"; 37: "entity_data"; 38: "bucket_entity_data"; 39: "block_entity_data"; 40: "instrument"; 41: "ominous_bottle_amplifier"; 42: "jukebox_playable"; 43: "recipes"; 44: "lodestone_tracker"; 45: "firework_explosion"; 46: "fireworks"; 47: "profile"; 48: "note_block_sound"; 49: "banner_patterns"; 50: "base_color"; 51: "pot_decorations"; 52: "container"; 53: "block_state"; 54: "bees"; 55: "lock"; 56: "container_loot"; _ : Void; }[] /* mapper */


type SlotComponent = {
                type: SlotComponentType, data: {
                    "custom_data": anonymousNbt ;"max_stack_size": VarInt ;"max_damage": VarInt ;"damage": VarInt ;"unbreakable": bool ;"custom_name": anonymousNbt ;"item_name": anonymousNbt ;"lore": anonOptionalNbt[] ;"rarity": VarInt ;"enchantments": {
                enchantments: {
                id: VarInt, level: VarInt }[], showTooltip: bool } ;"can_place_on": {
                predicates: BlockPredicate[], showTooltip: bool } ;"can_break": {
                predicates: BlockPredicate[], showTooltip: bool } ;"attribute_modifiers": {
                attributes: {
                typeId: VarInt, uniqueId: UUID, name: String_, value: f64, operation: {
                    0: "add"; 1: "multiply_base"; 2: "multiply_total"; _ : Void; }[] /* mapper */, slot: {
                    0: "any"; 1: "main_hand"; 2: "off_hand"; 3: "hand"; 4: "feet"; 5: "legs"; 6: "chest"; 7: "head"; 8: "armor"; 9: "body"; _ : Void; }[] /* mapper */ }[], showTooltip: bool } ;"custom_model_data": VarInt ;"hide_additional_tooltip": Void ;"hide_tooltip": Void ;"repair_cost": VarInt ;"creative_slot_lock": Void ;"enchantment_glint_override": bool ;"intangible_projectile": Void ;"food": {
                nutrition: VarInt, saturationModifier: f32, canAlwaysEat: bool, secondsToEat: f32, usingConvertsTo: Slot, effects: {
                effect: VarInt, probability: f32 }[] } ;"fire_resistant": Void ;"tool": {
                rules: {
                blocks: BlockSet[], hasSpeed: bool, speed: f32, hasCorrectDropForBlocks: bool, correctDropForBlocks: bool }[], defaultMiningSpeed: f32, damagePerBlock: VarInt } ;"stored_enchantments": {
                enchantments: {
                id: VarInt, level: VarInt }[], showInTooltip: bool } ;"dyed_color": {
                color: VarInt, showTooltip: bool } ;"map_color": VarInt ;"map_id": VarInt ;"map_decorations": anonOptionalNbt ;"map_post_processing": VarInt ;"charged_projectiles": {
                projectiles: Slot[] } ;"bundle_contents": {
                contents: Slot[] } ;"potion_contents": {
                hasPotionId: bool, potionId: optvarint, hasCustomColor: bool, customColor: optvarint, customEffects: {
                effect: VarInt, details: EffectDetail }[] } ;"suspicious_stew_effects": {
                effects: {
                effect: VarInt, duration: VarInt }[] } ;"writable_book_content": {
                pages: BookPage[] } ;"written_book_content": {
                rawTitle: String_, filteredTitle: option<String_>, author: String_, generation: VarInt, pages: BookPage[], resolved: bool } ;"trim": {
                materialType: VarInt, _anon_0: {
                    "0": {
                assetName: String_, ingredientId: VarInt, itemModelIndex: f32, numberOfOverrides: optvarint, override: {
                armorMaterialType: VarInt, overridenAssetName: String_ }[], description: String_ }; _: Void } /* .get(materialType) */, trimPatternType: VarInt, _anon_1: {
                    "0": {
                assetName: String_, templateItem: VarInt, description: String_, decal: bool }; _: Void } /* .get(trimPatternType) */, showInTooltip: bool } ;"debug_stick_state": anonymousNbt ;"entity_data": anonymousNbt ;"bucket_entity_data": anonymousNbt ;"block_entity_data": anonymousNbt ;"instrument": {
                instrumentType: VarInt, _anon_2: {
                    "0": {
                soundEvent: String_, useDuration: f32, range: f32 }; _: Void } /* .get(instrumentType) */ } ;"ominous_bottle_amplifier": VarInt ;"jukebox_playable": {
                directMode: bool, _anon_3: {
                    "true": {
                jukeboxSongName: String_, jukeboxSongType: VarInt, _anon_4: {
                    "0": {
                soundEvent: {
                soundEventType: VarInt, _anon_5: {
                    "0": {
                soundName: String_, fixedRange: option<f32> }; _: Void } /* .get(soundEventType) */ } }; _: Void } /* .get(jukeboxSongType) */, description: anonymousNbt, duration: f32, output: VarInt } ;"false": {
                songLocation: String_ }; _: Void } /* .get(directMode) */, showInTooltip: bool } ;"recipes": anonymousNbt ;"lodestone_tracker": {
                globalPosition: option<{
                dimension: String_, position: vec3f }>, tracked: bool } ;"firework_explosion": FireworkExplosion ;"fireworks": {
                flightDuration: VarInt, explosions: FireworkExplosion[] } ;"profile": {
                hasName: bool, name: String_, hasUniqueId: bool, uniqueId: UUID, properties: {
                property: String_, value: String_, hasSignature: bool, signature: String_ }[] } ;"note_block_sound": String_ ;"banner_patterns": {
                layers: {
                patternType: VarInt, _anon_6: {
                    "0": {
                assetId: String_, translationKey: String_ }; _: Void } /* .get(patternType) */, color: VarInt }[] } ;"base_color": VarInt ;"pot_decorations": {
                decorations: VarInt[] } ;"container": {
                contents: Slot[] } ;"block_state": {
                properties: {
                property: String_, value: String_ }[] } ;"bees": {
                bees: {
                nbtData: anonymousNbt, ticksInHive: VarInt, minTicksInHive: VarInt }[] } ;"lock": anonymousNbt ;"container_loot": anonymousNbt; _: Void } /* .get(type) */ }


type Slot = {
                itemCount: i8, _anon_7: {
                    "0": Void; _: {
                itemId: VarInt, addedComponentCount: VarInt, removedComponentCount: VarInt, components: Arr<{ referencedLength: "addedComponentCount", elementType: SlotComponent }>, removeComponents: Arr<{ referencedLength: "removedComponentCount", elementType: {
                type: SlotComponentType } }> } } /* .get(itemCount) */ }


type FireworkExplosion = {
                shape: {
                    0: "small_ball"; 1: "large_ball"; 2: "star"; 3: "creeper"; 4: "burst"; _ : Void; }[] /* mapper */, colors: i32[], fadeColors: i32[], hasTrail: bool, hasTwinkle: bool }


type BookPage = {
                content: String_, filteredContent: option<String_> }


type EffectDetail = {
                amplifier: VarInt, duration: VarInt, ambient: bool, showParticles: bool, showIcon: bool, hiddenEffect: option<EffectDetail> }


type BlockSet = {
                type: VarInt, name: {
                    "0": String_; _: Void } /* .get(type) */, blockIds: {
                    "0": Void; _: arrayWithLengthOffset } /* .get(type) */ }


type BlockProperty = {
                name: String_, isExactMatch: bool, exactValue: option<String_>, minValue: option<String_>, maxValue: option<String_> }


type BlockPredicate = {
                blockSet: option<BlockSet[]>, properties: option<BlockProperty[]>, nbt: anonOptionalNbt }


type Particle = {
                type: {
                    0: "angry_villager"; 1: "block"; 2: "block_marker"; 3: "bubble"; 4: "cloud"; 5: "crit"; 6: "damage_indicator"; 7: "dragon_breath"; 8: "dripping_lava"; 9: "falling_lava"; 10: "landing_lava"; 11: "dripping_water"; 12: "falling_water"; 13: "dust"; 14: "dust_color_transition"; 15: "effect"; 16: "elder_guardian"; 17: "enchanted_hit"; 18: "enchant"; 19: "end_rod"; 20: "entity_effect"; 21: "explosion_emitter"; 22: "explosion"; 23: "gust"; 24: "small_gust"; 25: "gust_emitter_large"; 26: "gust_emitter_small"; 27: "sonic_boom"; 28: "falling_dust"; 29: "firework"; 30: "fishing"; 31: "flame"; 32: "infested"; 33: "cherry_leaves"; 34: "sculk_soul"; 35: "sculk_charge"; 36: "sculk_charge_pop"; 37: "soul_fire_flame"; 38: "soul"; 39: "flash"; 40: "happy_villager"; 41: "composter"; 42: "heart"; 43: "instant_effect"; 44: "item"; 45: "vibration"; 46: "item_slime"; 47: "item_cobweb"; 48: "item_snowball"; 49: "large_smoke"; 50: "lava"; 51: "mycelium"; 52: "note"; 53: "poof"; 54: "portal"; 55: "rain"; 56: "smoke"; 57: "white_smoke"; 58: "sneeze"; 59: "spit"; 60: "squid_ink"; 61: "sweep_attack"; 62: "totem_of_undying"; 63: "underwater"; 64: "splash"; 65: "witch"; 66: "bubble_pop"; 67: "current_down"; 68: "bubble_column_up"; 69: "nautilus"; 70: "dolphin"; 71: "campfire_cosy_smoke"; 72: "campfire_signal_smoke"; 73: "dripping_honey"; 74: "falling_honey"; 75: "landing_honey"; 76: "falling_nectar"; 77: "falling_spore_blossom"; 78: "ash"; 79: "crimson_spore"; 80: "warped_spore"; 81: "spore_blossom_air"; 82: "dripping_obsidian_tear"; 83: "falling_obsidian_tear"; 84: "landing_obsidian_tear"; 85: "reverse_portal"; 86: "white_ash"; 87: "small_flame"; 88: "snowflake"; 89: "dripping_dripstone_lava"; 90: "falling_dripstone_lava"; 91: "dripping_dripstone_water"; 92: "falling_dripstone_water"; 93: "glow_squid_ink"; 94: "glow"; 95: "wax_on"; 96: "wax_off"; 97: "electric_spark"; 98: "scrape"; 99: "shriek"; 100: "egg_crack"; 101: "dust_plume"; 102: "trial_spawner_detected_player"; 103: "trial_spawner_detected_player_ominous"; 104: "vault_connection"; 105: "dust_pillar"; 106: "ominous_spawning"; 107: "raid_omen"; 108: "trial_omen"; _ : Void; }[] /* mapper */, data: {
                    "block": VarInt ;"block_marker": VarInt ;"falling_dust": VarInt ;"dust_pillar": VarInt ;"dust": {
                red: f32, green: f32, blue: f32, scale: f32 } ;"dust_color_transition": {
                fromRed: f32, fromGreen: f32, fromBlue: f32, scale: f32, toRed: f32, toGreen: f32, toBlue: f32 } ;"entity_effect": i32 ;"item": Slot ;"sculk_charge": f32 ;"shriek": VarInt ;"vibration": {
                position_type: {
                    0: "block"; 1: "entity"; _ : Void; }[] /* mapper */, position: {
                    "block": position ;"entity": {
                entityId: VarInt, entity_eye_height: f32 }; _: Void } /* .get(position_type) */, ticks: VarInt }; _: Void } /* .get(type) */ }


type ingredient = Slot[]


type position = BitField<{ fields: [{
                        name: "x", size: 26, signed: true }, {
                        name: "z", size: 26, signed: true }, {
                        name: "y", size: 12, signed: true }] }>


type soundSource = {
                    0: "master"; 1: "music"; 2: "record"; 3: "weather"; 4: "block"; 5: "hostile"; 6: "neutral"; 7: "player"; 8: "ambient"; 9: "voice"; _ : Void; }[] /* mapper */


type packedChunkPos = {
                z: i32, x: i32 }


type previousMessages = {
                id: VarInt, signature: {
                    "0": Buffer<{ count: 256 }>; _: Void } /* .get(id) */ }[]


type entityMetadataEntry = {
                key: u8, type: {
                    0: "byte"; 1: "int"; 2: "long"; 3: "float"; 4: "string"; 5: "component"; 6: "optional_component"; 7: "item_stack"; 8: "boolean"; 9: "rotations"; 10: "block_pos"; 11: "optional_block_pos"; 12: "direction"; 13: "optional_uuid"; 14: "block_state"; 15: "optional_block_state"; 16: "compound_tag"; 17: "particle"; 18: "particles"; 19: "villager_data"; 20: "optional_unsigned_int"; 21: "pose"; 22: "cat_variant"; 23: "wolf_variant"; 24: "frog_variant"; 25: "optional_global_pos"; 26: "painting_variant"; 27: "sniffer_state"; 28: "armadillo_state"; 29: "vector3"; 30: "quaternion"; _ : Void; }[] /* mapper */, value: {
                    "byte": i8 ;"int": VarInt ;"long": varlong ;"float": f32 ;"string": String_ ;"component": anonymousNbt ;"optional_component": option<anonymousNbt> ;"item_stack": Slot ;"boolean": bool ;"rotations": {
                pitch: f32, yaw: f32, roll: f32 } ;"block_pos": position ;"optional_block_pos": option<position> ;"direction": VarInt ;"optional_uuid": option<UUID> ;"block_state": VarInt ;"optional_block_state": optvarint ;"compound_tag": anonymousNbt ;"particle": Particle ;"particles": Particle[] ;"villager_data": {
                villagerType: VarInt, villagerProfession: VarInt, level: VarInt } ;"optional_unsigned_int": optvarint ;"pose": VarInt ;"cat_variant": VarInt ;"wolf_variant": {
                wildTexture: String_, tameTexture: String_, angryTexture: String_, maybeInputLength: VarInt, biomeLocation: {
                    "0": String_; _: Void } /* .get(maybeInputLength) */, biomeHolders: {
                    "0": Void; _: arrayWithLengthOffset } /* .get(maybeInputLength) */ } ;"frog_variant": VarInt ;"optional_global_pos": option<String_> ;"painting_variant": {
                width: VarInt, height: VarInt, assetId: String_ } ;"sniffer_state": VarInt ;"armadillo_state": VarInt ;"vector3": vec3f ;"quaternion": vec4f; _: Void } /* .get(type) */ }


type entityMetadata = entityMetadataLoop<{ ty: entityMetadataEntry, endVal: 255 }>


type minecraft_simple_recipe_format = {
                category: VarInt }


type minecraft_smelting_format = {
                group: String_, category: VarInt, ingredient: ingredient, result: Slot, experience: f32, cookTime: VarInt }


type tags = {
                tagName: String_, entries: VarInt[] }[]


type chunkBlockEntity = {
                _anon_8: BitField<{ fields: [{
                        name: "x", size: 4, signed: false }, {
                        name: "z", size: 4, signed: false }] }>, y: i16, type: VarInt, nbtData: anonOptionalNbt }


type chat_session = option<{
                uuid: UUID, publicKey: {
                expireTime: i64, keyBytes: Buffer<{ countType: VarInt }>, keySignature: Buffer<{ countType: VarInt }> } }>


type game_profile = {
                name: String_, properties: {
                key: String_, value: String_, signature: option<String_> }[] }


type command_node = {
                flags: BitField<{ fields: [{
                        name: "unused", size: 3, signed: false }, {
                        name: "has_custom_suggestions", size: 1, signed: false }, {
                        name: "has_redirect_node", size: 1, signed: false }, {
                        name: "has_command", size: 1, signed: false }, {
                        name: "command_node_type", size: 2, signed: false }] }>, children: VarInt[], redirectNode: {
                    "1": VarInt; _: Void } /* .get(flags/has_redirect_node) */, extraNodeData: {
                    "0": Void ;"1": {
                name: String_ } ;"2": {
                name: String_, parser: {
                    0: "brigadier:bool"; 1: "brigadier:float"; 2: "brigadier:double"; 3: "brigadier:integer"; 4: "brigadier:long"; 5: "brigadier:string"; 6: "minecraft:entity"; 7: "minecraft:game_profile"; 8: "minecraft:block_pos"; 9: "minecraft:column_pos"; 10: "minecraft:vec3"; 11: "minecraft:vec2"; 12: "minecraft:block_state"; 13: "minecraft:block_predicate"; 14: "minecraft:item_stack"; 15: "minecraft:item_predicate"; 16: "minecraft:color"; 17: "minecraft:component"; 18: "minecraft:style"; 19: "minecraft:message"; 20: "minecraft:nbt"; 21: "minecraft:nbt_tag"; 22: "minecraft:nbt_path"; 23: "minecraft:objective"; 24: "minecraft:objective_criteria"; 25: "minecraft:operation"; 26: "minecraft:particle"; 27: "minecraft:angle"; 28: "minecraft:rotation"; 29: "minecraft:scoreboard_slot"; 30: "minecraft:score_holder"; 31: "minecraft:swizzle"; 32: "minecraft:team"; 33: "minecraft:item_slot"; 34: "minecraft:item_slots"; 35: "minecraft:resource_location"; 36: "minecraft:function"; 37: "minecraft:entity_anchor"; 38: "minecraft:int_range"; 39: "minecraft:float_range"; 40: "minecraft:dimension"; 41: "minecraft:gamemode"; 42: "minecraft:time"; 43: "minecraft:resource_or_tag"; 44: "minecraft:resource_or_tag_key"; 45: "minecraft:resource"; 46: "minecraft:resource_key"; 47: "minecraft:template_mirror"; 48: "minecraft:template_rotation"; 49: "minecraft:heightmap"; 50: "minecraft:loot_table"; 51: "minecraft:loot_predicate"; 52: "minecraft:loot_modifier"; 53: "minecraft:uuid"; _ : Void; }[] /* mapper */, properties: {
                    "brigadier:bool": Void ;"brigadier:float": {
                flags: BitField<{ fields: [{
                        name: "unused", size: 6, signed: false }, {
                        name: "max_present", size: 1, signed: false }, {
                        name: "min_present", size: 1, signed: false }] }>, min: {
                    "1": f32; _: Void } /* .get(flags/min_present) */, max: {
                    "1": f32; _: Void } /* .get(flags/max_present) */ } ;"brigadier:double": {
                flags: BitField<{ fields: [{
                        name: "unused", size: 6, signed: false }, {
                        name: "max_present", size: 1, signed: false }, {
                        name: "min_present", size: 1, signed: false }] }>, min: {
                    "1": f64; _: Void } /* .get(flags/min_present) */, max: {
                    "1": f64; _: Void } /* .get(flags/max_present) */ } ;"brigadier:integer": {
                flags: BitField<{ fields: [{
                        name: "unused", size: 6, signed: false }, {
                        name: "max_present", size: 1, signed: false }, {
                        name: "min_present", size: 1, signed: false }] }>, min: {
                    "1": i32; _: Void } /* .get(flags/min_present) */, max: {
                    "1": i32; _: Void } /* .get(flags/max_present) */ } ;"brigadier:long": {
                flags: BitField<{ fields: [{
                        name: "unused", size: 6, signed: false }, {
                        name: "max_present", size: 1, signed: false }, {
                        name: "min_present", size: 1, signed: false }] }>, min: {
                    "1": i64; _: Void } /* .get(flags/min_present) */, max: {
                    "1": i64; _: Void } /* .get(flags/max_present) */ } ;"brigadier:string": {
                    0: "SINGLE_WORD"; 1: "QUOTABLE_PHRASE"; 2: "GREEDY_PHRASE"; _ : Void; }[] /* mapper */ ;"minecraft:entity": BitField<{ fields: [{
                        name: "unused", size: 6, signed: false }, {
                        name: "onlyAllowPlayers", size: 1, signed: false }, {
                        name: "onlyAllowEntities", size: 1, signed: false }] }> ;"minecraft:game_profile": Void ;"minecraft:block_pos": Void ;"minecraft:column_pos": Void ;"minecraft:vec3": Void ;"minecraft:vec2": Void ;"minecraft:block_state": Void ;"minecraft:block_predicate": Void ;"minecraft:item_stack": Void ;"minecraft:item_predicate": Void ;"minecraft:color": Void ;"minecraft:component": Void ;"minecraft:message": Void ;"minecraft:nbt": Void ;"minecraft:nbt_path": Void ;"minecraft:objective": Void ;"minecraft:objective_criteria": Void ;"minecraft:operation": Void ;"minecraft:particle": Void ;"minecraft:angle": Void ;"minecraft:rotation": Void ;"minecraft:scoreboard_slot": Void ;"minecraft:score_holder": BitField<{ fields: [{
                        name: "unused", size: 7, signed: false }, {
                        name: "allowMultiple", size: 1, signed: false }] }> ;"minecraft:swizzle": Void ;"minecraft:team": Void ;"minecraft:item_slot": Void ;"minecraft:resource_location": Void ;"minecraft:function": Void ;"minecraft:entity_anchor": Void ;"minecraft:int_range": Void ;"minecraft:float_range": Void ;"minecraft:dimension": Void ;"minecraft:gamemode": Void ;"minecraft:time": {
                min: i32 } ;"minecraft:resource_or_tag": {
                registry: String_ } ;"minecraft:resource_or_tag_key": {
                registry: String_ } ;"minecraft:resource": {
                registry: String_ } ;"minecraft:resource_key": {
                registry: String_ } ;"minecraft:template_mirror": Void ;"minecraft:template_rotation": Void ;"minecraft:heightmap": Void ;"minecraft:uuid": Void; _: Void } /* .get(parser) */, suggestionType: {
                    "1": String_; _: Void } /* .get(../flags/has_custom_suggestions) */ }; _: Void } /* .get(flags/command_node_type) */ }


type packet_common_cookie_request = {
                cookie: String_ }


type packet_common_store_cookie = {
                key: String_, value: ByteArray }


type packet_common_transfer = {
                host: String_, port: VarInt }


type packet_common_cookie_response = {
                key: String_, value: ByteArray }


type packet_common_select_known_packs = {
                packs: {
                namespace: String_, id: String_, version: String_ }[] }


type packet_common_custom_report_details = {
                details: Record_<String_, String_> }


type ServerLinkType = {
                    0: "bug_report"; 1: "community_guidelines"; 2: "support"; 3: "status"; 4: "feedback"; 5: "community"; 6: "website"; 7: "forums"; 8: "news"; 9: "announcements"; _ : Void; }[] /* mapper */


type packet_common_server_links = {
                links: {
                hasKnownType: bool, knownType: {
                    "true": ServerLinkType; _: Void } /* .get(hasKnownType) */, unknownType: {
                    "false": anonymousNbt; _: Void } /* .get(hasKnownType) */, link: String_ }[] }

namespace handshaking.to_client {

interface packet {
	name: /* empty mapper */ any,
	params: /* empty switch */ any,
}

}
namespace handshaking.to_server {

interface packet_set_protocol {
	protocolVersion: VarInt,
	serverHost: String_,
	serverPort: u16,
	nextState: VarInt,
}


interface packet_legacy_server_list_ping {
	payload: u8,
}


interface packet {
	name: {
                    0x00: "set_protocol"; 0xfe: "legacy_server_list_ping"; _ : Void; }[] /* mapper */,
	params: {
                    "set_protocol": packet_set_protocol ;"legacy_server_list_ping": packet_legacy_server_list_ping; _: Void } /* .get(name) */,
}

}
namespace status.to_client {

interface packet_server_info {
	response: String_,
}


interface packet_ping {
	time: i64,
}


interface packet {
	name: {
                    0x00: "server_info"; 0x01: "ping"; _ : Void; }[] /* mapper */,
	params: {
                    "server_info": packet_server_info ;"ping": packet_ping; _: Void } /* .get(name) */,
}

}
namespace status.to_server {

interface packet_ping_start {

}


interface packet_ping {
	time: i64,
}


interface packet {
	name: {
                    0x00: "ping_start"; 0x01: "ping"; _ : Void; }[] /* mapper */,
	params: {
                    "ping_start": packet_ping_start ;"ping": packet_ping; _: Void } /* .get(name) */,
}

}
namespace login.to_client {

interface packet_disconnect {
	reason: String_,
}


interface packet_encryption_begin {
	serverId: String_,
	publicKey: Buffer<{ countType: VarInt }>,
	verifyToken: Buffer<{ countType: VarInt }>,
	shouldAuthenticate: bool,
}


interface packet_success {
	uuid: UUID,
	username: String_,
	properties: {
                name: String_, value: String_, signature: option<String_> }[],
	strictErrorHandling: bool,
}


interface packet_compress {
	threshold: VarInt,
}


interface packet_login_plugin_request {
	messageId: VarInt,
	channel: String_,
	data: RestBuffer,
}


interface packet {
	name: {
                    0x00: "disconnect"; 0x01: "encryption_begin"; 0x02: "success"; 0x03: "compress"; 0x04: "login_plugin_request"; 0x05: "cookie_request"; _ : Void; }[] /* mapper */,
	params: {
                    "disconnect": packet_disconnect ;"encryption_begin": packet_encryption_begin ;"success": packet_success ;"compress": packet_compress ;"login_plugin_request": packet_login_plugin_request ;"cookie_request": packet_common_cookie_request; _: Void } /* .get(name) */,
}

}
namespace login.to_server {

interface packet_login_start {
	username: String_,
	playerUUID: UUID,
}


interface packet_encryption_begin {
	sharedSecret: Buffer<{ countType: VarInt }>,
	verifyToken: Buffer<{ countType: VarInt }>,
}


interface packet_login_plugin_response {
	messageId: VarInt,
	data: option<RestBuffer>,
}


interface packet_login_acknowledged {

}


interface packet {
	name: {
                    0x00: "login_start"; 0x01: "encryption_begin"; 0x02: "login_plugin_response"; 0x03: "login_acknowledged"; 0x04: "cookie_response"; _ : Void; }[] /* mapper */,
	params: {
                    "login_start": packet_login_start ;"encryption_begin": packet_encryption_begin ;"login_plugin_response": packet_login_plugin_response ;"login_acknowledged": packet_login_acknowledged ;"cookie_response": packet_common_cookie_response; _: Void } /* .get(name) */,
}

}
namespace configuration.to_client {

interface packet_custom_payload {
	channel: String_,
	data: RestBuffer,
}


interface packet_disconnect {
	reason: anonymousNbt,
}


interface packet_finish_configuration {

}


interface packet_keep_alive {
	keepAliveId: i64,
}


interface packet_ping {
	id: i32,
}


interface packet_reset_chat {

}


interface packet_registry_data {
	id: String_,
	entries: Record_<String_, option<anonymousNbt>>,
}


interface packet_remove_resource_pack {
	uuid: option<UUID>,
}


interface packet_add_resource_pack {
	uuid: UUID,
	url: String_,
	hash: String_,
	forced: bool,
	promptMessage: option<anonymousNbt>,
}


interface packet_feature_flags {
	features: String_[],
}


interface packet_tags {
	tags: {
                tagType: String_, tags: tags }[],
}


interface packet {
	name: {
                    0x00: "cookie_request"; 0x01: "custom_payload"; 0x02: "disconnect"; 0x03: "finish_configuration"; 0x04: "keep_alive"; 0x05: "ping"; 0x06: "reset_chat"; 0x07: "registry_data"; 0x08: "remove_resource_pack"; 0x09: "add_resource_pack"; 0x0a: "store_cookie"; 0x0b: "transfer"; 0x0c: "feature_flags"; 0x0d: "tags"; 0x0e: "select_known_packs"; 0x0f: "custom_report_details"; 0x10: "server_links"; _ : Void; }[] /* mapper */,
	params: {
                    "cookie_request": packet_common_cookie_request ;"custom_payload": packet_custom_payload ;"disconnect": packet_disconnect ;"finish_configuration": packet_finish_configuration ;"keep_alive": packet_keep_alive ;"ping": packet_ping ;"reset_chat": packet_reset_chat ;"registry_data": packet_registry_data ;"remove_resource_pack": packet_remove_resource_pack ;"add_resource_pack": packet_add_resource_pack ;"store_cookie": packet_common_store_cookie ;"transfer": packet_common_transfer ;"feature_flags": packet_feature_flags ;"tags": packet_tags ;"select_known_packs": packet_common_select_known_packs ;"custom_report_details": packet_common_custom_report_details ;"server_links": packet_common_server_links; _: Void } /* .get(name) */,
}

}
namespace configuration.to_server {

interface packet_settings {
	locale: String_,
	viewDistance: i8,
	chatFlags: VarInt,
	chatColors: bool,
	skinParts: u8,
	mainHand: VarInt,
	enableTextFiltering: bool,
	enableServerListing: bool,
}


interface packet_custom_payload {
	channel: String_,
	data: RestBuffer,
}


interface packet_finish_configuration {

}


interface packet_keep_alive {
	keepAliveId: i64,
}


interface packet_pong {
	id: i32,
}


interface packet_resource_pack_receive {
	uuid: UUID,
	result: VarInt,
}


interface packet {
	name: {
                    0x00: "settings"; 0x01: "cookie_response"; 0x02: "custom_payload"; 0x03: "finish_configuration"; 0x04: "keep_alive"; 0x05: "pong"; 0x06: "resource_pack_receive"; 0x07: "select_known_packs"; 0x08: "custom_report_details"; 0x09: "server_links"; _ : Void; }[] /* mapper */,
	params: {
                    "settings": packet_settings ;"cookie_response": packet_common_cookie_response ;"custom_payload": packet_custom_payload ;"finish_configuration": packet_finish_configuration ;"keep_alive": packet_keep_alive ;"pong": packet_pong ;"resource_pack_receive": packet_resource_pack_receive ;"select_known_packs": packet_common_select_known_packs ;"custom_report_details": packet_common_custom_report_details ;"server_links": packet_common_server_links; _: Void } /* .get(name) */,
}

}
namespace play.to_client {

interface SpawnInfo {
	dimension: VarInt,
	name: String_,
	hashedSeed: i64,
	gamemode: {
                    0: "survival"; 1: "creative"; 2: "adventure"; 3: "spectator"; _ : Void; }[i8] /* mapper */,
	previousGamemode: u8,
	isDebug: bool,
	isFlat: bool,
	death: option<{
                dimensionName: String_, location: position }>,
	portalCooldown: VarInt,
}


interface packet_spawn_entity {
	entityId: VarInt,
	objectUUID: UUID,
	type: VarInt,
	x: f64,
	y: f64,
	z: f64,
	pitch: i8,
	yaw: i8,
	headPitch: i8,
	objectData: VarInt,
	velocityX: i16,
	velocityY: i16,
	velocityZ: i16,
}


interface packet_spawn_entity_experience_orb {
	entityId: VarInt,
	x: f64,
	y: f64,
	z: f64,
	count: i16,
}


interface packet_animation {
	entityId: VarInt,
	animation: u8,
}


interface packet_statistics {
	entries: {
                categoryId: VarInt, statisticId: VarInt, value: VarInt }[],
}


interface packet_acknowledge_player_digging {
	sequenceId: VarInt,
}


interface packet_block_break_animation {
	entityId: VarInt,
	location: position,
	destroyStage: i8,
}


interface packet_tile_entity_data {
	location: position,
	action: VarInt,
	nbtData: anonOptionalNbt,
}


interface packet_block_action {
	location: position,
	byte1: u8,
	byte2: u8,
	blockId: VarInt,
}


interface packet_block_change {
	location: position,
	type: VarInt,
}


interface packet_boss_bar {
	entityUUID: UUID,
	action: VarInt,
	title: {
                    "0": anonymousNbt ;"3": anonymousNbt; _: Void } /* .get(action) */,
	health: {
                    "0": f32 ;"2": f32; _: Void } /* .get(action) */,
	color: {
                    "0": VarInt ;"4": VarInt; _: Void } /* .get(action) */,
	dividers: {
                    "0": VarInt ;"4": VarInt; _: Void } /* .get(action) */,
	flags: {
                    "0": u8 ;"5": u8; _: Void } /* .get(action) */,
}


interface packet_difficulty {
	difficulty: u8,
	difficultyLocked: bool,
}


interface packet_chunk_batch_finished {
	batchSize: VarInt,
}


interface packet_chunk_batch_start {

}


interface packet_chunk_biomes {
	biomes: {
                position: packedChunkPos, data: ByteArray }[],
}


interface packet_clear_titles {
	reset: bool,
}


interface packet_tab_complete {
	transactionId: VarInt,
	start: VarInt,
	length: VarInt,
	matches: {
                match: String_, tooltip: option<anonymousNbt> }[],
}


interface packet_declare_commands {
	nodes: command_node[],
	rootIndex: VarInt,
}


interface packet_close_window {
	windowId: u8,
}


interface packet_window_items {
	windowId: u8,
	stateId: VarInt,
	items: Slot[],
	carriedItem: Slot,
}


interface packet_craft_progress_bar {
	windowId: u8,
	property: i16,
	value: i16,
}


interface packet_set_slot {
	windowId: i8,
	stateId: VarInt,
	slot: i16,
	item: Slot,
}


interface packet_set_cooldown {
	itemID: VarInt,
	cooldownTicks: VarInt,
}


interface packet_chat_suggestions {
	action: VarInt,
	entries: String_[],
}


interface packet_custom_payload {
	channel: String_,
	data: RestBuffer,
}


interface packet_damage_event {
	entityId: VarInt,
	sourceTypeId: VarInt,
	sourceCauseId: VarInt,
	sourceDirectId: VarInt,
	sourcePosition: option<vec3f64>,
}


interface packet_debug_sample {
	sample: i64[],
	type: VarInt,
}


interface packet_hide_message {
	id: VarInt,
	signature: {
                    "0": Buffer<{ count: 256 }>; _: Void } /* .get(id) */,
}


interface packet_kick_disconnect {
	reason: anonymousNbt,
}

type ChatTypeParameterType = {
                    0: "content"; 1: "sender"; 2: "target"; _ : Void; }[] /* mapper */;

interface ChatType {
	translationKey: String_,
	parameters: ChatTypeParameterType[],
	style: anonymousNbt,
}


interface ChatTypes {
	registryIndex: VarInt,
	_anon_9: {
                    "0": {
                chat: ChatType, narration: ChatType }; _: Void } /* .get(registryIndex) */
}


interface packet_profileless_chat {
	message: anonymousNbt,
	type: ChatTypes,
	name: anonymousNbt,
	target: option<anonymousNbt>,
}


interface packet_entity_status {
	entityId: i32,
	entityStatus: i8,
}


interface packet_explosion {
	x: f64,
	y: f64,
	z: f64,
	radius: f32,
	affectedBlockOffsets: {
                x: i8, y: i8, z: i8 }[],
	playerMotionX: f32,
	playerMotionY: f32,
	playerMotionZ: f32,
	block_interaction_type: VarInt,
	small_explosion_particle: Particle,
	large_explosion_particle: Particle,
	soundId: VarInt,
	_anon_10: {
                    "0": {
                soundName: String_, range: option<f32> }; _: {
                 } } /* .get(soundId) */
}


interface packet_unload_chunk {
	chunkZ: i32,
	chunkX: i32,
}


interface packet_game_state_change {
	reason: u8,
	gameMode: f32,
}


interface packet_open_horse_window {
	windowId: u8,
	nbSlots: VarInt,
	entityId: i32,
}


interface packet_hurt_animation {
	entityId: VarInt,
	yaw: f32,
}


interface packet_initialize_world_border {
	x: f64,
	z: f64,
	oldDiameter: f64,
	newDiameter: f64,
	speed: VarInt,
	portalTeleportBoundary: VarInt,
	warningBlocks: VarInt,
	warningTime: VarInt,
}


interface packet_keep_alive {
	keepAliveId: i64,
}


interface packet_map_chunk {
	x: i32,
	z: i32,
	heightmaps: anonymousNbt,
	chunkData: Buffer<{ countType: VarInt }>,
	blockEntities: chunkBlockEntity[],
	skyLightMask: i64[],
	blockLightMask: i64[],
	emptySkyLightMask: i64[],
	emptyBlockLightMask: i64[],
	skyLight: u8[][],
	blockLight: u8[][],
}


interface packet_world_event {
	effectId: i32,
	location: position,
	data: i32,
	global: bool,
}


interface packet_world_particles {
	longDistance: bool,
	x: f64,
	y: f64,
	z: f64,
	offsetX: f32,
	offsetY: f32,
	offsetZ: f32,
	velocityOffset: f32,
	amount: i32,
	particle: Particle,
}


interface packet_update_light {
	chunkX: VarInt,
	chunkZ: VarInt,
	skyLightMask: i64[],
	blockLightMask: i64[],
	emptySkyLightMask: i64[],
	emptyBlockLightMask: i64[],
	skyLight: u8[][],
	blockLight: u8[][],
}


interface packet_login {
	entityId: i32,
	isHardcore: bool,
	worldNames: String_[],
	maxPlayers: VarInt,
	viewDistance: VarInt,
	simulationDistance: VarInt,
	reducedDebugInfo: bool,
	enableRespawnScreen: bool,
	doLimitedCrafting: bool,
	worldState: SpawnInfo,
	enforcesSecureChat: bool,
}


interface packet_map {
	itemDamage: VarInt,
	scale: i8,
	locked: bool,
	icons: option<{
                type: VarInt, x: i8, z: i8, direction: u8, displayName: option<anonymousNbt> }[]>,
	columns: u8,
	rows: {
                    "0": Void; _: u8 } /* .get(columns) */,
	x: {
                    "0": Void; _: u8 } /* .get(columns) */,
	y: {
                    "0": Void; _: u8 } /* .get(columns) */,
	data: {
                    "0": Void; _: Buffer<{ countType: VarInt }> } /* .get(columns) */,
}


interface packet_trade_list {
	windowId: VarInt,
	trades: {
                inputItem1: {
                itemId: VarInt, itemCount: VarInt, addedComponentCount: VarInt, components: Arr<{ referencedLength: "addedComponentCount", elementType: SlotComponent }> }, outputItem: Slot, inputItem2: option<{
                itemId: VarInt, itemCount: VarInt, addedComponentCount: VarInt, components: Arr<{ referencedLength: "addedComponentCount", elementType: SlotComponent }> }>, tradeDisabled: bool, nbTradeUses: i32, maximumNbTradeUses: i32, xp: i32, specialPrice: i32, priceMultiplier: f32, demand: i32 }[],
	villagerLevel: VarInt,
	experience: VarInt,
	isRegularVillager: bool,
	canRestock: bool,
}


interface packet_rel_entity_move {
	entityId: VarInt,
	dX: i16,
	dY: i16,
	dZ: i16,
	onGround: bool,
}


interface packet_entity_move_look {
	entityId: VarInt,
	dX: i16,
	dY: i16,
	dZ: i16,
	yaw: i8,
	pitch: i8,
	onGround: bool,
}


interface packet_entity_look {
	entityId: VarInt,
	yaw: i8,
	pitch: i8,
	onGround: bool,
}


interface packet_vehicle_move {
	x: f64,
	y: f64,
	z: f64,
	yaw: f32,
	pitch: f32,
}


interface packet_open_book {
	hand: VarInt,
}


interface packet_open_window {
	windowId: VarInt,
	inventoryType: VarInt,
	windowTitle: anonymousNbt,
}


interface packet_open_sign_entity {
	location: position,
	isFrontText: bool,
}


interface packet_ping {
	id: i32,
}


interface packet_ping_response {
	id: i64,
}


interface packet_craft_recipe_response {
	windowId: i8,
	recipe: String_,
}


interface packet_abilities {
	flags: i8,
	flyingSpeed: f32,
	walkingSpeed: f32,
}


interface packet_player_chat {
	senderUuid: UUID,
	index: VarInt,
	signature: option<Buffer<{ count: 256 }>>,
	plainMessage: String_,
	timestamp: i64,
	salt: i64,
	previousMessages: previousMessages,
	unsignedChatContent: option<anonymousNbt>,
	filterType: VarInt,
	filterTypeMask: {
                    "2": i64[]; _: Void } /* .get(filterType) */,
	type: ChatTypes,
	networkName: anonymousNbt,
	networkTargetName: option<anonymousNbt>,
}


interface packet_end_combat_event {
	duration: VarInt,
}


interface packet_enter_combat_event {

}


interface packet_death_combat_event {
	playerId: VarInt,
	message: anonymousNbt,
}


interface packet_player_remove {
	players: UUID[],
}


interface packet_player_info {
	action: i8,
	data: {
                uuid: UUID, player: {
                    "1": game_profile ;"3": game_profile ;"5": game_profile ;"7": game_profile ;"9": game_profile ;"11": game_profile ;"13": game_profile ;"15": game_profile ;"17": game_profile ;"19": game_profile ;"21": game_profile ;"23": game_profile ;"25": game_profile ;"27": game_profile ;"29": game_profile ;"31": game_profile ;"33": game_profile ;"35": game_profile ;"37": game_profile ;"39": game_profile ;"41": game_profile ;"43": game_profile ;"45": game_profile ;"47": game_profile ;"49": game_profile ;"51": game_profile ;"53": game_profile ;"55": game_profile ;"57": game_profile ;"59": game_profile ;"61": game_profile ;"63": game_profile; _: Void } /* .get(../action) */, chatSession: {
                    "2": chat_session ;"3": chat_session ;"6": chat_session ;"7": chat_session ;"10": chat_session ;"11": chat_session ;"14": chat_session ;"15": chat_session ;"18": chat_session ;"19": chat_session ;"22": chat_session ;"23": chat_session ;"26": chat_session ;"27": chat_session ;"30": chat_session ;"31": chat_session ;"34": chat_session ;"35": chat_session ;"38": chat_session ;"39": chat_session ;"42": chat_session ;"43": chat_session ;"46": chat_session ;"47": chat_session ;"50": chat_session ;"51": chat_session ;"54": chat_session ;"55": chat_session ;"58": chat_session ;"59": chat_session ;"62": chat_session ;"63": chat_session; _: Void } /* .get(../action) */, gamemode: {
                    "4": VarInt ;"5": VarInt ;"6": VarInt ;"7": VarInt ;"12": VarInt ;"13": VarInt ;"14": VarInt ;"15": VarInt ;"20": VarInt ;"21": VarInt ;"22": VarInt ;"23": VarInt ;"28": VarInt ;"29": VarInt ;"30": VarInt ;"31": VarInt ;"36": VarInt ;"37": VarInt ;"38": VarInt ;"39": VarInt ;"44": VarInt ;"45": VarInt ;"46": VarInt ;"47": VarInt ;"52": VarInt ;"53": VarInt ;"54": VarInt ;"55": VarInt ;"60": VarInt ;"61": VarInt ;"62": VarInt ;"63": VarInt; _: Void } /* .get(../action) */, listed: {
                    "8": bool ;"9": bool ;"10": bool ;"11": bool ;"12": bool ;"13": bool ;"14": bool ;"15": bool ;"24": bool ;"25": bool ;"26": bool ;"27": bool ;"28": bool ;"29": bool ;"30": bool ;"31": bool ;"40": bool ;"41": bool ;"42": bool ;"43": bool ;"44": bool ;"45": bool ;"46": bool ;"47": bool ;"56": bool ;"57": bool ;"58": bool ;"59": bool ;"60": bool ;"61": bool ;"62": bool ;"63": bool; _: Void } /* .get(../action) */, latency: {
                    "16": VarInt ;"17": VarInt ;"18": VarInt ;"19": VarInt ;"20": VarInt ;"21": VarInt ;"22": VarInt ;"23": VarInt ;"24": VarInt ;"25": VarInt ;"26": VarInt ;"27": VarInt ;"28": VarInt ;"29": VarInt ;"30": VarInt ;"31": VarInt ;"48": VarInt ;"49": VarInt ;"50": VarInt ;"51": VarInt ;"52": VarInt ;"53": VarInt ;"54": VarInt ;"55": VarInt ;"56": VarInt ;"57": VarInt ;"58": VarInt ;"59": VarInt ;"60": VarInt ;"61": VarInt ;"62": VarInt ;"63": VarInt; _: Void } /* .get(../action) */, displayName: {
                    "32": option<anonymousNbt> ;"33": option<anonymousNbt> ;"34": option<anonymousNbt> ;"35": option<anonymousNbt> ;"36": option<anonymousNbt> ;"37": option<anonymousNbt> ;"38": option<anonymousNbt> ;"39": option<anonymousNbt> ;"40": option<anonymousNbt> ;"41": option<anonymousNbt> ;"42": option<anonymousNbt> ;"43": option<anonymousNbt> ;"44": option<anonymousNbt> ;"45": option<anonymousNbt> ;"46": option<anonymousNbt> ;"47": option<anonymousNbt> ;"48": option<anonymousNbt> ;"49": option<anonymousNbt> ;"50": option<anonymousNbt> ;"51": option<anonymousNbt> ;"52": option<anonymousNbt> ;"53": option<anonymousNbt> ;"54": option<anonymousNbt> ;"55": option<anonymousNbt> ;"56": option<anonymousNbt> ;"57": option<anonymousNbt> ;"58": option<anonymousNbt> ;"59": option<anonymousNbt> ;"60": option<anonymousNbt> ;"61": option<anonymousNbt> ;"62": option<anonymousNbt> ;"63": option<anonymousNbt>; _: Void } /* .get(../action) */ }[],
}


interface packet_face_player {
	feet_eyes: VarInt,
	x: f64,
	y: f64,
	z: f64,
	isEntity: bool,
	entityId: {
                    "true": VarInt; _: Void } /* .get(isEntity) */,
	entity_feet_eyes: {
                    "true": VarInt; _: Void } /* .get(isEntity) */,
}


interface packet_position {
	x: f64,
	y: f64,
	z: f64,
	yaw: f32,
	pitch: f32,
	flags: i8,
	teleportId: VarInt,
}


interface packet_unlock_recipes {
	action: VarInt,
	craftingBookOpen: bool,
	filteringCraftable: bool,
	smeltingBookOpen: bool,
	filteringSmeltable: bool,
	blastFurnaceOpen: bool,
	filteringBlastFurnace: bool,
	smokerBookOpen: bool,
	filteringSmoker: bool,
	recipes1: String_[],
	recipes2: {
                    "0": String_[]; _: Void } /* .get(action) */,
}


interface packet_entity_destroy {
	entityIds: VarInt[],
}


interface packet_remove_entity_effect {
	entityId: VarInt,
	effectId: VarInt,
}


interface packet_reset_score {
	entity_name: String_,
	objective_name: option<String_>,
}


interface packet_remove_resource_pack {
	uuid: option<UUID>,
}


interface packet_add_resource_pack {
	uuid: UUID,
	url: String_,
	hash: String_,
	forced: bool,
	promptMessage: option<anonymousNbt>,
}


interface packet_respawn {
	worldState: SpawnInfo,
	copyMetadata: u8,
}


interface packet_entity_head_rotation {
	entityId: VarInt,
	headYaw: i8,
}


interface packet_multi_block_change {
	chunkCoordinates: BitField<{ fields: [{
                        name: "x", size: 22, signed: true }, {
                        name: "z", size: 22, signed: true }, {
                        name: "y", size: 20, signed: true }] }>,
	records: VarInt[],
}


interface packet_select_advancement_tab {
	id: option<String_>,
}


interface packet_server_data {
	motd: anonymousNbt,
	iconBytes: option<ByteArray>,
}


interface packet_action_bar {
	text: anonymousNbt,
}


interface packet_world_border_center {
	x: f64,
	z: f64,
}


interface packet_world_border_lerp_size {
	oldDiameter: f64,
	newDiameter: f64,
	speed: VarInt,
}


interface packet_world_border_size {
	diameter: f64,
}


interface packet_world_border_warning_delay {
	warningTime: VarInt,
}


interface packet_world_border_warning_reach {
	warningBlocks: VarInt,
}


interface packet_camera {
	cameraId: VarInt,
}


interface packet_held_item_slot {
	slot: i8,
}


interface packet_update_view_position {
	chunkX: VarInt,
	chunkZ: VarInt,
}


interface packet_update_view_distance {
	viewDistance: VarInt,
}


interface packet_spawn_position {
	location: position,
	angle: f32,
}


interface packet_scoreboard_display_objective {
	position: VarInt,
	name: String_,
}


interface packet_entity_metadata {
	entityId: VarInt,
	metadata: entityMetadata,
}


interface packet_attach_entity {
	entityId: i32,
	vehicleId: i32,
}


interface packet_entity_velocity {
	entityId: VarInt,
	velocityX: i16,
	velocityY: i16,
	velocityZ: i16,
}


interface packet_entity_equipment {
	entityId: VarInt,
	equipments: topBitSetTerminatedArray<{ ty: {
                slot: i8, item: Slot } }>,
}


interface packet_experience {
	experienceBar: f32,
	level: VarInt,
	totalExperience: VarInt,
}


interface packet_update_health {
	health: f32,
	food: VarInt,
	foodSaturation: f32,
}


interface packet_scoreboard_objective {
	name: String_,
	action: i8,
	displayText: {
                    "0": anonymousNbt ;"2": anonymousNbt; _: Void } /* .get(action) */,
	type: {
                    "0": VarInt ;"2": VarInt; _: Void } /* .get(action) */,
	number_format: {
                    "0": option<VarInt> ;"2": option<VarInt>; _: Void } /* .get(action) */,
	styling: {
                    "0": {
                    "1": anonymousNbt ;"2": anonymousNbt; _: Void } /* .get(number_format) */ ;"2": {
                    "1": anonymousNbt ;"2": anonymousNbt; _: Void } /* .get(number_format) */; _: Void } /* .get(action) */,
}


interface packet_set_passengers {
	entityId: VarInt,
	passengers: VarInt[],
}


interface packet_teams {
	team: String_,
	mode: i8,
	name: {
                    "0": anonymousNbt ;"2": anonymousNbt; _: Void } /* .get(mode) */,
	friendlyFire: {
                    "0": i8 ;"2": i8; _: Void } /* .get(mode) */,
	nameTagVisibility: {
                    "0": String_ ;"2": String_; _: Void } /* .get(mode) */,
	collisionRule: {
                    "0": String_ ;"2": String_; _: Void } /* .get(mode) */,
	formatting: {
                    "0": VarInt ;"2": VarInt; _: Void } /* .get(mode) */,
	prefix: {
                    "0": anonymousNbt ;"2": anonymousNbt; _: Void } /* .get(mode) */,
	suffix: {
                    "0": anonymousNbt ;"2": anonymousNbt; _: Void } /* .get(mode) */,
	players: {
                    "0": String_[] ;"3": String_[] ;"4": String_[]; _: Void } /* .get(mode) */,
}


interface packet_scoreboard_score {
	itemName: String_,
	scoreName: String_,
	value: VarInt,
	display_name: option<anonymousNbt>,
	number_format: option<VarInt>,
	styling: {
                    "1": anonymousNbt ;"2": anonymousNbt; _: Void } /* .get(number_format) */,
}


interface packet_simulation_distance {
	distance: VarInt,
}


interface packet_set_title_subtitle {
	text: anonymousNbt,
}


interface packet_update_time {
	age: i64,
	time: i64,
}


interface packet_set_title_text {
	text: anonymousNbt,
}


interface packet_set_title_time {
	fadeIn: i32,
	stay: i32,
	fadeOut: i32,
}


interface packet_entity_sound_effect {
	soundId: VarInt,
	soundEvent: {
                    "0": {
                resource: String_, range: option<f32> }; _: Void } /* .get(soundId) */,
	soundCategory: soundSource,
	entityId: VarInt,
	volume: f32,
	pitch: f32,
	seed: i64,
}


interface packet_sound_effect {
	soundId: VarInt,
	soundEvent: {
                    "0": {
                resource: String_, range: option<f32> }; _: Void } /* .get(soundId) */,
	soundCategory: soundSource,
	x: i32,
	y: i32,
	z: i32,
	volume: f32,
	pitch: f32,
	seed: i64,
}


interface packet_start_configuration {

}


interface packet_stop_sound {
	flags: i8,
	source: {
                    "1": VarInt ;"3": VarInt; _: Void } /* .get(flags) */,
	sound: {
                    "2": String_ ;"3": String_; _: Void } /* .get(flags) */,
}


interface packet_system_chat {
	content: anonymousNbt,
	isActionBar: bool,
}


interface packet_playerlist_header {
	header: anonymousNbt,
	footer: anonymousNbt,
}


interface packet_nbt_query_response {
	transactionId: VarInt,
	nbt: anonOptionalNbt,
}


interface packet_collect {
	collectedEntityId: VarInt,
	collectorEntityId: VarInt,
	pickupItemCount: VarInt,
}


interface packet_entity_teleport {
	entityId: VarInt,
	x: f64,
	y: f64,
	z: f64,
	yaw: i8,
	pitch: i8,
	onGround: bool,
}


interface packet_set_ticking_state {
	tick_rate: f32,
	is_frozen: bool,
}


interface packet_step_tick {
	tick_steps: VarInt,
}


interface packet_advancements {
	reset: bool,
	advancementMapping: Record_<String_, {
                parentId: option<String_>, displayData: option<{
                title: anonymousNbt, description: anonymousNbt, icon: Slot, frameType: VarInt, flags: BitField<{ fields: [{
                        name: "unused", size: 29, signed: false }, {
                        name: "hidden", size: 1, signed: false }, {
                        name: "show_toast", size: 1, signed: false }, {
                        name: "has_background_texture", size: 1, signed: false }] }>, backgroundTexture: {
                    "1": String_; _: Void } /* .get(flags/has_background_texture) */, xCord: f32, yCord: f32 }>, requirements: String_[][], sendsTelemtryData: bool }>,
	identifiers: String_[],
	progressMapping: Record_<String_, {
                criterionIdentifier: String_, criterionProgress: option<i64> }[]>,
}


interface packet_entity_update_attributes {
	entityId: VarInt,
	properties: {
                key: {
                    0: "generic.armor"; 1: "generic.armor_toughness"; 2: "generic.attack_damage"; 3: "generic.attack_knockback"; 4: "generic.attack_speed"; 5: "player.block_break_speed"; 6: "player.block_interaction_range"; 7: "player.entity_interaction_range"; 8: "generic.fall_damage_multiplier"; 9: "generic.flying_speed"; 10: "generic.follow_range"; 11: "generic.gravity"; 12: "generic.jump_strength"; 13: "generic.knockback_resistance"; 14: "generic.luck"; 15: "generic.max_absorption"; 16: "generic.max_health"; 17: "generic.movement_speed"; 18: "generic.safe_fall_distance"; 19: "generic.scale"; 20: "zombie.spawn_reinforcements"; 21: "generic.step_height"; _ : Void; }[] /* mapper */, value: f64, modifiers: {
                uuid: String_, amount: f64, operation: i8 }[] }[],
}


interface packet_entity_effect {
	entityId: VarInt,
	effectId: VarInt,
	amplifier: VarInt,
	duration: VarInt,
	flags: u8,
}


interface packet_declare_recipes {
	recipes: {
                name: String_, type: {
                    0: "minecraft:crafting_shaped"; 1: "minecraft:crafting_shapeless"; 2: "minecraft:crafting_special_armordye"; 3: "minecraft:crafting_special_bookcloning"; 4: "minecraft:crafting_special_mapcloning"; 5: "minecraft:crafting_special_mapextending"; 6: "minecraft:crafting_special_firework_rocket"; 7: "minecraft:crafting_special_firework_star"; 8: "minecraft:crafting_special_firework_star_fade"; 9: "minecraft:crafting_special_tippedarrow"; 10: "minecraft:crafting_special_bannerduplicate"; 11: "minecraft:crafting_special_shielddecoration"; 12: "minecraft:crafting_special_shulkerboxcoloring"; 13: "minecraft:crafting_special_suspiciousstew"; 14: "minecraft:crafting_special_repairitem"; 15: "minecraft:smelting"; 16: "minecraft:blasting"; 17: "minecraft:smoking"; 18: "minecraft:campfire_cooking"; 19: "minecraft:stonecutting"; 20: "minecraft:smithing_transform"; 21: "minecraft:smithing_trim"; 22: "minecraft:crafting_decorated_pot"; _ : Void; }[] /* mapper */, data: {
                    "minecraft:crafting_shapeless": {
                group: String_, category: VarInt, ingredients: ingredient[], result: Slot } ;"minecraft:crafting_shaped": {
                group: String_, category: VarInt, width: VarInt, height: VarInt, ingredients: Arr<{ referencedLength: "width", elementType: Arr<{ referencedLength: "height", elementType: ingredient }> }>, result: Slot, showNotification: bool } ;"minecraft:crafting_special_armordye": minecraft_simple_recipe_format ;"minecraft:crafting_special_bookcloning": minecraft_simple_recipe_format ;"minecraft:crafting_special_mapcloning": minecraft_simple_recipe_format ;"minecraft:crafting_special_mapextending": minecraft_simple_recipe_format ;"minecraft:crafting_special_firework_rocket": minecraft_simple_recipe_format ;"minecraft:crafting_special_firework_star": minecraft_simple_recipe_format ;"minecraft:crafting_special_firework_star_fade": minecraft_simple_recipe_format ;"minecraft:crafting_special_repairitem": minecraft_simple_recipe_format ;"minecraft:crafting_special_tippedarrow": minecraft_simple_recipe_format ;"minecraft:crafting_special_bannerduplicate": minecraft_simple_recipe_format ;"minecraft:crafting_special_banneraddpattern": minecraft_simple_recipe_format ;"minecraft:crafting_special_shielddecoration": minecraft_simple_recipe_format ;"minecraft:crafting_special_shulkerboxcoloring": minecraft_simple_recipe_format ;"minecraft:crafting_special_suspiciousstew": minecraft_simple_recipe_format ;"minecraft:smelting": minecraft_smelting_format ;"minecraft:blasting": minecraft_smelting_format ;"minecraft:smoking": minecraft_smelting_format ;"minecraft:campfire_cooking": minecraft_smelting_format ;"minecraft:stonecutting": {
                group: String_, ingredient: ingredient, result: Slot } ;"minecraft:smithing_transform": {
                template: ingredient, base: ingredient, addition: ingredient, result: Slot } ;"minecraft:smithing_trim": {
                template: ingredient, base: ingredient, addition: ingredient } ;"minecraft:crafting_decorated_pot": minecraft_simple_recipe_format; _: Void } /* .get(type) */ }[],
}


interface packet_tags {
	tags: {
                tagType: String_, tags: tags }[],
}


interface packet_set_projectile_power {
	id: VarInt,
	accelerationPower: f64,
}


interface packet {
	name: {
                    0x00: "bundle_delimiter"; 0x01: "spawn_entity"; 0x02: "spawn_entity_experience_orb"; 0x03: "animation"; 0x04: "statistics"; 0x05: "acknowledge_player_digging"; 0x06: "block_break_animation"; 0x07: "tile_entity_data"; 0x08: "block_action"; 0x09: "block_change"; 0x0a: "boss_bar"; 0x0b: "difficulty"; 0x0c: "chunk_batch_finished"; 0x0d: "chunk_batch_start"; 0x0e: "chunk_biomes"; 0x0f: "clear_titles"; 0x10: "tab_complete"; 0x11: "declare_commands"; 0x12: "close_window"; 0x13: "window_items"; 0x14: "craft_progress_bar"; 0x15: "set_slot"; 0x16: "cookie_request"; 0x17: "set_cooldown"; 0x18: "chat_suggestions"; 0x19: "custom_payload"; 0x1a: "damage_event"; 0x1b: "debug_sample"; 0x1c: "hide_message"; 0x1d: "kick_disconnect"; 0x1e: "profileless_chat"; 0x1f: "entity_status"; 0x20: "explosion"; 0x21: "unload_chunk"; 0x22: "game_state_change"; 0x23: "open_horse_window"; 0x24: "hurt_animation"; 0x25: "initialize_world_border"; 0x26: "keep_alive"; 0x27: "map_chunk"; 0x28: "world_event"; 0x29: "world_particles"; 0x2a: "update_light"; 0x2b: "login"; 0x2c: "map"; 0x2d: "trade_list"; 0x2e: "rel_entity_move"; 0x2f: "entity_move_look"; 0x30: "entity_look"; 0x31: "vehicle_move"; 0x32: "open_book"; 0x33: "open_window"; 0x34: "open_sign_entity"; 0x35: "ping"; 0x36: "ping_response"; 0x37: "craft_recipe_response"; 0x38: "abilities"; 0x39: "player_chat"; 0x3a: "end_combat_event"; 0x3b: "enter_combat_event"; 0x3c: "death_combat_event"; 0x3d: "player_remove"; 0x3e: "player_info"; 0x3f: "face_player"; 0x40: "position"; 0x41: "unlock_recipes"; 0x42: "entity_destroy"; 0x43: "remove_entity_effect"; 0x44: "reset_score"; 0x45: "remove_resource_pack"; 0x46: "add_resource_pack"; 0x47: "respawn"; 0x48: "entity_head_rotation"; 0x49: "multi_block_change"; 0x4a: "select_advancement_tab"; 0x4b: "server_data"; 0x4c: "action_bar"; 0x4d: "world_border_center"; 0x4e: "world_border_lerp_size"; 0x4f: "world_border_size"; 0x50: "world_border_warning_delay"; 0x51: "world_border_warning_reach"; 0x52: "camera"; 0x53: "held_item_slot"; 0x54: "update_view_position"; 0x55: "update_view_distance"; 0x56: "spawn_position"; 0x57: "scoreboard_display_objective"; 0x58: "entity_metadata"; 0x59: "attach_entity"; 0x5a: "entity_velocity"; 0x5b: "entity_equipment"; 0x5c: "experience"; 0x5d: "update_health"; 0x5e: "scoreboard_objective"; 0x5f: "set_passengers"; 0x60: "teams"; 0x61: "scoreboard_score"; 0x62: "simulation_distance"; 0x63: "set_title_subtitle"; 0x64: "update_time"; 0x65: "set_title_text"; 0x66: "set_title_time"; 0x67: "entity_sound_effect"; 0x68: "sound_effect"; 0x69: "start_configuration"; 0x6a: "stop_sound"; 0x6b: "store_cookie"; 0x6c: "system_chat"; 0x6d: "playerlist_header"; 0x6e: "nbt_query_response"; 0x6f: "collect"; 0x70: "entity_teleport"; 0x71: "set_ticking_state"; 0x72: "step_tick"; 0x73: "transfer"; 0x74: "advancements"; 0x75: "entity_update_attributes"; 0x76: "entity_effect"; 0x77: "declare_recipes"; 0x78: "tags"; _ : Void; }[] /* mapper */,
	params: {
                    "bundle_delimiter": Void ;"spawn_entity": packet_spawn_entity ;"spawn_entity_experience_orb": packet_spawn_entity_experience_orb ;"animation": packet_animation ;"statistics": packet_statistics ;"acknowledge_player_digging": packet_acknowledge_player_digging ;"block_break_animation": packet_block_break_animation ;"tile_entity_data": packet_tile_entity_data ;"block_action": packet_block_action ;"block_change": packet_block_change ;"boss_bar": packet_boss_bar ;"difficulty": packet_difficulty ;"chunk_batch_finished": packet_chunk_batch_finished ;"chunk_batch_start": packet_chunk_batch_start ;"chunk_biomes": packet_chunk_biomes ;"clear_titles": packet_clear_titles ;"tab_complete": packet_tab_complete ;"declare_commands": packet_declare_commands ;"close_window": packet_close_window ;"window_items": packet_window_items ;"craft_progress_bar": packet_craft_progress_bar ;"set_slot": packet_set_slot ;"cookie_request": packet_common_cookie_request ;"set_cooldown": packet_set_cooldown ;"chat_suggestions": packet_chat_suggestions ;"custom_payload": packet_custom_payload ;"damage_event": packet_damage_event ;"debug_sample": packet_debug_sample ;"hide_message": packet_hide_message ;"kick_disconnect": packet_kick_disconnect ;"profileless_chat": packet_profileless_chat ;"entity_status": packet_entity_status ;"explosion": packet_explosion ;"unload_chunk": packet_unload_chunk ;"game_state_change": packet_game_state_change ;"open_horse_window": packet_open_horse_window ;"hurt_animation": packet_hurt_animation ;"initialize_world_border": packet_initialize_world_border ;"keep_alive": packet_keep_alive ;"map_chunk": packet_map_chunk ;"world_event": packet_world_event ;"world_particles": packet_world_particles ;"update_light": packet_update_light ;"login": packet_login ;"map": packet_map ;"trade_list": packet_trade_list ;"rel_entity_move": packet_rel_entity_move ;"entity_move_look": packet_entity_move_look ;"entity_look": packet_entity_look ;"vehicle_move": packet_vehicle_move ;"open_book": packet_open_book ;"open_window": packet_open_window ;"open_sign_entity": packet_open_sign_entity ;"ping": packet_ping ;"ping_response": packet_ping_response ;"craft_recipe_response": packet_craft_recipe_response ;"abilities": packet_abilities ;"player_chat": packet_player_chat ;"end_combat_event": packet_end_combat_event ;"enter_combat_event": packet_enter_combat_event ;"death_combat_event": packet_death_combat_event ;"player_remove": packet_player_remove ;"player_info": packet_player_info ;"face_player": packet_face_player ;"position": packet_position ;"unlock_recipes": packet_unlock_recipes ;"entity_destroy": packet_entity_destroy ;"remove_entity_effect": packet_remove_entity_effect ;"reset_score": packet_reset_score ;"remove_resource_pack": packet_remove_resource_pack ;"add_resource_pack": packet_add_resource_pack ;"respawn": packet_respawn ;"entity_head_rotation": packet_entity_head_rotation ;"multi_block_change": packet_multi_block_change ;"select_advancement_tab": packet_select_advancement_tab ;"server_data": packet_server_data ;"action_bar": packet_action_bar ;"world_border_center": packet_world_border_center ;"world_border_lerp_size": packet_world_border_lerp_size ;"world_border_size": packet_world_border_size ;"world_border_warning_delay": packet_world_border_warning_delay ;"world_border_warning_reach": packet_world_border_warning_reach ;"camera": packet_camera ;"held_item_slot": packet_held_item_slot ;"update_view_position": packet_update_view_position ;"update_view_distance": packet_update_view_distance ;"spawn_position": packet_spawn_position ;"scoreboard_display_objective": packet_scoreboard_display_objective ;"entity_metadata": packet_entity_metadata ;"attach_entity": packet_attach_entity ;"entity_velocity": packet_entity_velocity ;"entity_equipment": packet_entity_equipment ;"experience": packet_experience ;"update_health": packet_update_health ;"scoreboard_objective": packet_scoreboard_objective ;"set_passengers": packet_set_passengers ;"teams": packet_teams ;"scoreboard_score": packet_scoreboard_score ;"simulation_distance": packet_simulation_distance ;"set_title_subtitle": packet_set_title_subtitle ;"update_time": packet_update_time ;"set_title_text": packet_set_title_text ;"set_title_time": packet_set_title_time ;"entity_sound_effect": packet_entity_sound_effect ;"sound_effect": packet_sound_effect ;"start_configuration": packet_start_configuration ;"stop_sound": packet_stop_sound ;"store_cookie": packet_common_store_cookie ;"system_chat": packet_system_chat ;"playerlist_header": packet_playerlist_header ;"nbt_query_response": packet_nbt_query_response ;"collect": packet_collect ;"entity_teleport": packet_entity_teleport ;"set_ticking_state": packet_set_ticking_state ;"step_tick": packet_step_tick ;"transfer": packet_common_transfer ;"advancements": packet_advancements ;"entity_update_attributes": packet_entity_update_attributes ;"entity_effect": packet_entity_effect ;"declare_recipes": packet_declare_recipes ;"tags": packet_tags; _: Void } /* .get(name) */,
}

}
namespace play.to_server {

interface packet_teleport_confirm {
	teleportId: VarInt,
}


interface packet_query_block_nbt {
	transactionId: VarInt,
	location: position,
}


interface packet_set_difficulty {
	newDifficulty: u8,
}


interface packet_message_acknowledgement {
	count: VarInt,
}


interface packet_chat_command {
	command: String_,
}


interface packet_chat_command_signed {
	command: String_,
	timestamp: i64,
	salt: i64,
	argumentSignatures: {
                argumentName: String_, signature: Buffer<{ count: 256 }> }[],
	messageCount: VarInt,
	acknowledged: Buffer<{ count: 3 }>,
}


interface packet_chat_message {
	message: String_,
	timestamp: i64,
	salt: i64,
	signature: option<Buffer<{ count: 256 }>>,
	offset: VarInt,
	acknowledged: Buffer<{ count: 3 }>,
}


interface packet_chat_session_update {
	sessionUUID: UUID,
	expireTime: i64,
	publicKey: ByteArray,
	signature: ByteArray,
}


interface packet_chunk_batch_received {
	chunksPerTick: f32,
}


interface packet_client_command {
	actionId: VarInt,
}


interface packet_settings {
	locale: String_,
	viewDistance: i8,
	chatFlags: VarInt,
	chatColors: bool,
	skinParts: u8,
	mainHand: VarInt,
	enableTextFiltering: bool,
	enableServerListing: bool,
}


interface packet_tab_complete {
	transactionId: VarInt,
	text: String_,
}


interface packet_configuration_acknowledged {

}


interface packet_enchant_item {
	windowId: i8,
	enchantment: i8,
}


interface packet_window_click {
	windowId: u8,
	stateId: VarInt,
	slot: i16,
	mouseButton: i8,
	mode: VarInt,
	changedSlots: {
                location: i16, item: Slot }[],
	cursorItem: Slot,
}


interface packet_close_window {
	windowId: u8,
}


interface packet_set_slot_state {
	slot_id: VarInt,
	window_id: VarInt,
	state: bool,
}


interface packet_custom_payload {
	channel: String_,
	data: RestBuffer,
}


interface packet_debug_sample_subscription {
	type: VarInt,
}


interface packet_edit_book {
	hand: VarInt,
	pages: String_[],
	title: option<String_>,
}


interface packet_query_entity_nbt {
	transactionId: VarInt,
	entityId: VarInt,
}


interface packet_use_entity {
	target: VarInt,
	mouse: VarInt,
	x: {
                    "2": f32; _: Void } /* .get(mouse) */,
	y: {
                    "2": f32; _: Void } /* .get(mouse) */,
	z: {
                    "2": f32; _: Void } /* .get(mouse) */,
	hand: {
                    "0": VarInt ;"2": VarInt; _: Void } /* .get(mouse) */,
	sneaking: bool,
}


interface packet_generate_structure {
	location: position,
	levels: VarInt,
	keepJigsaws: bool,
}


interface packet_keep_alive {
	keepAliveId: i64,
}


interface packet_lock_difficulty {
	locked: bool,
}


interface packet_position {
	x: f64,
	y: f64,
	z: f64,
	onGround: bool,
}


interface packet_position_look {
	x: f64,
	y: f64,
	z: f64,
	yaw: f32,
	pitch: f32,
	onGround: bool,
}


interface packet_look {
	yaw: f32,
	pitch: f32,
	onGround: bool,
}


interface packet_flying {
	onGround: bool,
}


interface packet_vehicle_move {
	x: f64,
	y: f64,
	z: f64,
	yaw: f32,
	pitch: f32,
}


interface packet_steer_boat {
	leftPaddle: bool,
	rightPaddle: bool,
}


interface packet_pick_item {
	slot: VarInt,
}


interface packet_ping_request {
	id: i64,
}


interface packet_craft_recipe_request {
	windowId: i8,
	recipe: String_,
	makeAll: bool,
}


interface packet_abilities {
	flags: i8,
}


interface packet_block_dig {
	status: VarInt,
	location: position,
	face: i8,
	sequence: VarInt,
}


interface packet_entity_action {
	entityId: VarInt,
	actionId: VarInt,
	jumpBoost: VarInt,
}


interface packet_steer_vehicle {
	sideways: f32,
	forward: f32,
	jump: u8,
}


interface packet_pong {
	id: i32,
}


interface packet_recipe_book {
	bookId: VarInt,
	bookOpen: bool,
	filterActive: bool,
}


interface packet_displayed_recipe {
	recipeId: String_,
}


interface packet_name_item {
	name: String_,
}


interface packet_resource_pack_receive {
	uuid: UUID,
	result: VarInt,
}


interface packet_advancement_tab {
	action: VarInt,
	tabId: {
                    "0": String_ ;"1": Void; _: Void } /* .get(action) */,
}


interface packet_select_trade {
	slot: VarInt,
}


interface packet_set_beacon_effect {
	primary_effect: option<VarInt>,
	secondary_effect: option<VarInt>,
}


interface packet_held_item_slot {
	slotId: i16,
}


interface packet_update_command_block {
	location: position,
	command: String_,
	mode: VarInt,
	flags: u8,
}


interface packet_update_command_block_minecart {
	entityId: VarInt,
	command: String_,
	track_output: bool,
}


interface packet_set_creative_slot {
	slot: i16,
	item: Slot,
}


interface packet_update_jigsaw_block {
	location: position,
	name: String_,
	target: String_,
	pool: String_,
	finalState: String_,
	jointType: String_,
	selection_priority: VarInt,
	placement_priority: VarInt,
}


interface packet_update_structure_block {
	location: position,
	action: VarInt,
	mode: VarInt,
	name: String_,
	offset_x: i8,
	offset_y: i8,
	offset_z: i8,
	size_x: i8,
	size_y: i8,
	size_z: i8,
	mirror: VarInt,
	rotation: VarInt,
	metadata: String_,
	integrity: f32,
	seed: VarInt,
	flags: u8,
}


interface packet_update_sign {
	location: position,
	isFrontText: bool,
	text1: String_,
	text2: String_,
	text3: String_,
	text4: String_,
}


interface packet_arm_animation {
	hand: VarInt,
}


interface packet_spectate {
	target: UUID,
}


interface packet_block_place {
	hand: VarInt,
	location: position,
	direction: VarInt,
	cursorX: f32,
	cursorY: f32,
	cursorZ: f32,
	insideBlock: bool,
	sequence: VarInt,
}


interface packet_use_item {
	hand: VarInt,
	sequence: VarInt,
	rotation: vec2f,
}


interface packet {
	name: {
                    0x00: "teleport_confirm"; 0x01: "query_block_nbt"; 0x02: "set_difficulty"; 0x03: "message_acknowledgement"; 0x04: "chat_command"; 0x05: "chat_command_signed"; 0x06: "chat_message"; 0x07: "chat_session_update"; 0x08: "chunk_batch_received"; 0x09: "client_command"; 0x0a: "settings"; 0x0b: "tab_complete"; 0x0c: "configuration_acknowledged"; 0x0d: "enchant_item"; 0x0e: "window_click"; 0x0f: "close_window"; 0x10: "set_slot_state"; 0x11: "cookie_response"; 0x12: "custom_payload"; 0x13: "debug_sample_subscription"; 0x14: "edit_book"; 0x15: "query_entity_nbt"; 0x16: "use_entity"; 0x17: "generate_structure"; 0x18: "keep_alive"; 0x19: "lock_difficulty"; 0x1a: "position"; 0x1b: "position_look"; 0x1c: "look"; 0x1d: "flying"; 0x1e: "vehicle_move"; 0x1f: "steer_boat"; 0x20: "pick_item"; 0x21: "ping_request"; 0x22: "craft_recipe_request"; 0x23: "abilities"; 0x24: "block_dig"; 0x25: "entity_action"; 0x26: "steer_vehicle"; 0x27: "pong"; 0x28: "recipe_book"; 0x29: "displayed_recipe"; 0x2a: "name_item"; 0x2b: "resource_pack_receive"; 0x2c: "advancement_tab"; 0x2d: "select_trade"; 0x2e: "set_beacon_effect"; 0x2f: "held_item_slot"; 0x30: "update_command_block"; 0x31: "update_command_block_minecart"; 0x32: "set_creative_slot"; 0x33: "update_jigsaw_block"; 0x34: "update_structure_block"; 0x35: "update_sign"; 0x36: "arm_animation"; 0x37: "spectate"; 0x38: "block_place"; 0x39: "use_item"; _ : Void; }[] /* mapper */,
	params: {
                    "teleport_confirm": packet_teleport_confirm ;"query_block_nbt": packet_query_block_nbt ;"set_difficulty": packet_set_difficulty ;"message_acknowledgement": packet_message_acknowledgement ;"chat_command": packet_chat_command ;"chat_command_signed": packet_chat_command_signed ;"chat_message": packet_chat_message ;"chat_session_update": packet_chat_session_update ;"chunk_batch_received": packet_chunk_batch_received ;"client_command": packet_client_command ;"settings": packet_settings ;"tab_complete": packet_tab_complete ;"configuration_acknowledged": packet_configuration_acknowledged ;"enchant_item": packet_enchant_item ;"window_click": packet_window_click ;"close_window": packet_close_window ;"set_slot_state": packet_set_slot_state ;"cookie_response": packet_common_cookie_response ;"custom_payload": packet_custom_payload ;"edit_book": packet_edit_book ;"query_entity_nbt": packet_query_entity_nbt ;"use_entity": packet_use_entity ;"generate_structure": packet_generate_structure ;"keep_alive": packet_keep_alive ;"lock_difficulty": packet_lock_difficulty ;"position": packet_position ;"position_look": packet_position_look ;"look": packet_look ;"flying": packet_flying ;"vehicle_move": packet_vehicle_move ;"steer_boat": packet_steer_boat ;"pick_item": packet_pick_item ;"ping_request": packet_ping_request ;"craft_recipe_request": packet_craft_recipe_request ;"abilities": packet_abilities ;"block_dig": packet_block_dig ;"entity_action": packet_entity_action ;"steer_vehicle": packet_steer_vehicle ;"pong": packet_pong ;"recipe_book": packet_recipe_book ;"displayed_recipe": packet_displayed_recipe ;"name_item": packet_name_item ;"resource_pack_receive": packet_resource_pack_receive ;"advancement_tab": packet_advancement_tab ;"select_trade": packet_select_trade ;"set_beacon_effect": packet_set_beacon_effect ;"held_item_slot": packet_held_item_slot ;"update_command_block": packet_update_command_block ;"update_command_block_minecart": packet_update_command_block_minecart ;"set_creative_slot": packet_set_creative_slot ;"update_jigsaw_block": packet_update_jigsaw_block ;"update_structure_block": packet_update_structure_block ;"update_sign": packet_update_sign ;"arm_animation": packet_arm_animation ;"spectate": packet_spectate ;"block_place": packet_block_place ;"use_item": packet_use_item; _: Void } /* .get(name) */,
}

}
