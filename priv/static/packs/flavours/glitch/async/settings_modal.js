(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{741:function(e,t,a){"use strict";a.r(t);var s,i,n=a(0),o=a(2),d=a(7),l=a(1),c=a(3),g=a.n(c),r=a(12),b=a(6),u=function(e){function t(){for(var t,a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return t=e.call.apply(e,[this].concat(s))||this,Object(l.a)(Object(o.a)(t),"handleChange",function(e){var a=e.target,s=t.props,i=s.item,n=s.onChange,o=s.options,d=s.placeholder;o&&o.length>0?n(i,a.value):n(i,d?a.value:a.checked)}),t}return Object(d.a)(t,e),t.prototype.render=function(){var e=this.handleChange,t=this.props,a=t.settings,s=t.item,i=t.id,o=t.options,d=t.children,l=t.dependsOn,c=t.dependsOnNot,g=t.placeholder,r=!0;if(l)for(var b=0;b<l.length;b++)r=r&&a.getIn(l[b]);if(c)for(var u=0;u<c.length;u++)r=r&&!a.getIn(c[u]);if(o&&o.length>0){var m=a.getIn(s),p=o&&o.length>0&&o.map(function(t){var a=i+"--"+t.value;return Object(n.a)("label",{htmlFor:a},void 0,Object(n.a)("input",{type:"radio",name:i,id:a,value:t.value,onBlur:e,onChange:e,checked:m===t.value,disabled:!r}),t.message,t.hint&&Object(n.a)("span",{className:"hint"},void 0,t.hint))});return Object(n.a)("div",{className:"glitch local-settings__page__item radio_buttons"},void 0,Object(n.a)("fieldset",{},void 0,Object(n.a)("legend",{},void 0,d),p))}return g?Object(n.a)("div",{className:"glitch local-settings__page__item string"},void 0,Object(n.a)("label",{htmlFor:i},void 0,Object(n.a)("p",{},void 0,d),Object(n.a)("p",{},void 0,Object(n.a)("input",{id:i,type:"text",value:a.getIn(s),placeholder:g,onChange:e,disabled:!r})))):Object(n.a)("div",{className:"glitch local-settings__page__item boolean"},void 0,Object(n.a)("label",{htmlFor:i},void 0,Object(n.a)("input",{id:i,type:"checkbox",checked:a.getIn(s),onChange:e,disabled:!r}),d))},t}(g.a.PureComponent),m=Object(b.f)({layout_auto:{id:"layout.auto",defaultMessage:"Auto"},layout_auto_hint:{id:"layout.hint.auto",defaultMessage:"Automatically chose layout based on “Enable advanced web interface” setting and screen size."},layout_desktop:{id:"layout.desktop",defaultMessage:"Desktop"},layout_desktop_hint:{id:"layout.hint.desktop",defaultMessage:"Use multiple-column layout regardless of the “Enable advanced web interface” setting or screen size."},layout_mobile:{id:"layout.single",defaultMessage:"Mobile"},layout_mobile_hint:{id:"layout.hint.single",defaultMessage:"Use single-column layout regardless of the “Enable advanced web interface” setting or screen size."},side_arm_none:{id:"settings.side_arm.none",defaultMessage:"None"},side_arm_keep:{id:"settings.side_arm_reply_mode.keep",defaultMessage:"Keep secondary toot button to set privacy"},side_arm_copy:{id:"settings.side_arm_reply_mode.copy",defaultMessage:"Copy privacy setting of the toot being replied to"},side_arm_restrict:{id:"settings.side_arm_reply_mode.restrict",defaultMessage:"Restrict privacy setting to that of the toot being replied to"},regexp:{id:"settings.content_warnings.regexp",defaultMessage:"Regular expression"},filters_drop:{id:"settings.filtering_behavior.drop",defaultMessage:"Hide filtered toots completely"},filters_upstream:{id:"settings.filtering_behavior.upstream",defaultMessage:'Show "filtered" like vanilla Mastodon'},filters_hide:{id:"settings.filtering_behavior.hide",defaultMessage:'Show "filtered" and add a button to display why'},filters_cw:{id:"settings.filtering_behavior.cw",defaultMessage:"Still display the post, and add filtered words to content warning"},rewrite_mentions_no:{id:"settings.rewrite_mentions_no",defaultMessage:"Do not rewrite mentions"},rewrite_mentions_acct:{id:"settings.rewrite_mentions_acct",defaultMessage:"Rewrite with username and domain (when the account is remote)"},rewrite_mentions_username:{id:"settings.rewrite_mentions_username",defaultMessage:"Rewrite with username"}}),p=Object(b.g)(s=function(e){function t(){for(var t,a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return t=e.call.apply(e,[this].concat(s))||this,Object(l.a)(Object(o.a)(t),"pages",[function(e){var t=e.intl,a=e.onChange,s=e.settings;return Object(n.a)("div",{className:"glitch local-settings__page general"},void 0,Object(n.a)("h1",{},void 0,Object(n.a)(b.b,{id:"settings.general",defaultMessage:"General"})),Object(n.a)(u,{settings:s,item:["show_reply_count"],id:"mastodon-settings--reply-count",onChange:a},void 0,Object(n.a)(b.b,{id:"settings.show_reply_counter",defaultMessage:"Display an estimate of the reply count"})),Object(n.a)(u,{settings:s,item:["hicolor_privacy_icons"],id:"mastodon-settings--hicolor_privacy_icons",onChange:a},void 0,Object(n.a)(b.b,{id:"settings.hicolor_privacy_icons",defaultMessage:"High color privacy icons"}),Object(n.a)("span",{className:"hint"},void 0,Object(n.a)(b.b,{id:"settings.hicolor_privacy_icons.hint",defaultMessage:"Display privacy icons in bright and easily distinguishable colors"}))),Object(n.a)(u,{settings:s,item:["confirm_boost_missing_media_description"],id:"mastodon-settings--confirm_boost_missing_media_description",onChange:a},void 0,Object(n.a)(b.b,{id:"settings.confirm_boost_missing_media_description",defaultMessage:"Show confirmation dialog before boosting toots lacking media descriptions"})),Object(n.a)(u,{settings:s,item:["tag_misleading_links"],id:"mastodon-settings--tag_misleading_links",onChange:a},void 0,Object(n.a)(b.b,{id:"settings.tag_misleading_links",defaultMessage:"Tag misleading links"}),Object(n.a)("span",{className:"hint"},void 0,Object(n.a)(b.b,{id:"settings.tag_misleading_links.hint",defaultMessage:"Add a visual indication with the link target host to every link not mentioning it explicitly"}))),Object(n.a)(u,{settings:s,item:["rewrite_mentions"],id:"mastodon-settings--rewrite_mentions",options:[{value:"no",message:t.formatMessage(m.rewrite_mentions_no)},{value:"acct",message:t.formatMessage(m.rewrite_mentions_acct)},{value:"username",message:t.formatMessage(m.rewrite_mentions_username)}],onChange:a},void 0,Object(n.a)(b.b,{id:"settings.rewrite_mentions",defaultMessage:"Rewrite mentions in displayed statuses"})),Object(n.a)("section",{},void 0,Object(n.a)("h2",{},void 0,Object(n.a)(b.b,{id:"settings.notifications_opts",defaultMessage:"Notifications options"})),Object(n.a)(u,{settings:s,item:["notifications","tab_badge"],id:"mastodon-settings--notifications-tab_badge",onChange:a},void 0,Object(n.a)(b.b,{id:"settings.notifications.tab_badge",defaultMessage:"Unread notifications badge"}),Object(n.a)("span",{className:"hint"},void 0,Object(n.a)(b.b,{id:"settings.notifications.tab_badge.hint",defaultMessage:"Display a badge for unread notifications in the column icons when the notifications column isn't open"}))),Object(n.a)(u,{settings:s,item:["notifications","favicon_badge"],id:"mastodon-settings--notifications-favicon_badge",onChange:a},void 0,Object(n.a)(b.b,{id:"settings.notifications.favicon_badge",defaultMessage:"Unread notifications favicon badge"}),Object(n.a)("span",{className:"hint"},void 0,Object(n.a)(b.b,{id:"settings.notifications.favicon_badge.hint",defaultMessage:"Add a badge for unread notifications to the favicon"})))),Object(n.a)("section",{},void 0,Object(n.a)("h2",{},void 0,Object(n.a)(b.b,{id:"settings.layout_opts",defaultMessage:"Layout options"})),Object(n.a)(u,{settings:s,item:["layout"],id:"mastodon-settings--layout",options:[{value:"auto",message:t.formatMessage(m.layout_auto),hint:t.formatMessage(m.layout_auto_hint)},{value:"multiple",message:t.formatMessage(m.layout_desktop),hint:t.formatMessage(m.layout_desktop_hint)},{value:"single",message:t.formatMessage(m.layout_mobile),hint:t.formatMessage(m.layout_mobile_hint)}],onChange:a},void 0,Object(n.a)(b.b,{id:"settings.layout",defaultMessage:"Layout:"})),Object(n.a)(u,{settings:s,item:["stretch"],id:"mastodon-settings--stretch",onChange:a},void 0,Object(n.a)(b.b,{id:"settings.wide_view",defaultMessage:"Wide view (Desktop mode only)"}),Object(n.a)("span",{className:"hint"},void 0,Object(n.a)(b.b,{id:"settings.wide_view_hint",defaultMessage:"Stretches columns to better fill the available space."}))),Object(n.a)(u,{settings:s,item:["navbar_under"],id:"mastodon-settings--navbar_under",onChange:a},void 0,Object(n.a)(b.b,{id:"settings.navbar_under",defaultMessage:"Navbar at the bottom (Mobile only)"})),Object(n.a)(u,{settings:s,item:["swipe_to_change_columns"],id:"mastodon-settings--swipe_to_change_columns",onChange:a},void 0,Object(n.a)(b.b,{id:"settings.swipe_to_change_columns",defaultMessage:"Allow swiping to change columns (Mobile only)"}))))},function(e){var t=e.intl,a=e.onChange,s=e.settings;return Object(n.a)("div",{className:"glitch local-settings__page compose_box_opts"},void 0,Object(n.a)("h1",{},void 0,Object(n.a)(b.b,{id:"settings.compose_box_opts",defaultMessage:"Compose box"})),Object(n.a)(u,{settings:s,item:["always_show_spoilers_field"],id:"mastodon-settings--always_show_spoilers_field",onChange:a},void 0,Object(n.a)(b.b,{id:"settings.always_show_spoilers_field",defaultMessage:"Always enable the Content Warning field"})),Object(n.a)(u,{settings:s,item:["preselect_on_reply"],id:"mastodon-settings--preselect_on_reply",onChange:a},void 0,Object(n.a)(b.b,{id:"settings.preselect_on_reply",defaultMessage:"Pre-select usernames on reply"}),Object(n.a)("span",{className:"hint"},void 0,Object(n.a)(b.b,{id:"settings.preselect_on_reply_hint",defaultMessage:"When replying to a conversation with multiple participants, pre-select usernames past the first"}))),Object(n.a)(u,{settings:s,item:["confirm_missing_media_description"],id:"mastodon-settings--confirm_missing_media_description",onChange:a},void 0,Object(n.a)(b.b,{id:"settings.confirm_missing_media_description",defaultMessage:"Show confirmation dialog before sending toots lacking media descriptions"})),Object(n.a)(u,{settings:s,item:["confirm_before_clearing_draft"],id:"mastodon-settings--confirm_before_clearing_draft",onChange:a},void 0,Object(n.a)(b.b,{id:"settings.confirm_before_clearing_draft",defaultMessage:"Show confirmation dialog before overwriting the message being composed"})),Object(n.a)(u,{settings:s,item:["show_content_type_choice"],id:"mastodon-settings--show_content_type_choice",onChange:a},void 0,Object(n.a)(b.b,{id:"settings.show_content_type_choice",defaultMessage:"Show content-type choice when authoring toots"})),Object(n.a)(u,{settings:s,item:["side_arm"],id:"mastodon-settings--side_arm",options:[{value:"none",message:t.formatMessage(m.side_arm_none)},{value:"direct",message:t.formatMessage({id:"privacy.direct.short"})},{value:"private",message:t.formatMessage({id:"privacy.private.short"})},{value:"unlisted",message:t.formatMessage({id:"privacy.unlisted.short"})},{value:"public",message:t.formatMessage({id:"privacy.public.short"})}],onChange:a},void 0,Object(n.a)(b.b,{id:"settings.side_arm",defaultMessage:"Secondary toot button:"})),Object(n.a)(u,{settings:s,item:["side_arm_reply_mode"],id:"mastodon-settings--side_arm_reply_mode",options:[{value:"keep",message:t.formatMessage(m.side_arm_keep)},{value:"copy",message:t.formatMessage(m.side_arm_copy)},{value:"restrict",message:t.formatMessage(m.side_arm_restrict)}],onChange:a},void 0,Object(n.a)(b.b,{id:"settings.side_arm_reply_mode",defaultMessage:"When replying to a toot:"})))},function(e){var t=e.intl,a=e.onChange,s=e.settings;return Object(n.a)("div",{className:"glitch local-settings__page content_warnings"},void 0,Object(n.a)("h1",{},void 0,Object(n.a)(b.b,{id:"settings.content_warnings",defaultMessage:"Content warnings"})),Object(n.a)(u,{settings:s,item:["content_warnings","auto_unfold"],id:"mastodon-settings--content_warnings-auto_unfold",onChange:a},void 0,Object(n.a)(b.b,{id:"settings.enable_content_warnings_auto_unfold",defaultMessage:"Automatically unfold content-warnings"})),Object(n.a)(u,{settings:s,item:["content_warnings","filter"],id:"mastodon-settings--content_warnings-auto_unfold",onChange:a,dependsOn:[["content_warnings","auto_unfold"]],placeholder:t.formatMessage(m.regexp)},void 0,Object(n.a)(b.b,{id:"settings.content_warnings_filter",defaultMessage:"Content warnings to not automatically unfold:"})))},function(e){var t=e.intl,a=e.onChange,s=e.settings;return Object(n.a)("div",{className:"glitch local-settings__page filters"},void 0,Object(n.a)("h1",{},void 0,Object(n.a)(b.b,{id:"settings.filters",defaultMessage:"Filters"})),Object(n.a)(u,{settings:s,item:["filtering_behavior"],id:"mastodon-settings--filters-behavior",onChange:a,options:[{value:"drop",message:t.formatMessage(m.filters_drop)},{value:"upstream",message:t.formatMessage(m.filters_upstream)},{value:"hide",message:t.formatMessage(m.filters_hide)},{value:"content_warning",message:t.formatMessage(m.filters_cw)}]},void 0,Object(n.a)(b.b,{id:"settings.filtering_behavior",defaultMessage:"Filtering behavior"})))},function(e){var t=e.onChange,a=e.settings;return Object(n.a)("div",{className:"glitch local-settings__page collapsed"},void 0,Object(n.a)("h1",{},void 0,Object(n.a)(b.b,{id:"settings.collapsed_statuses",defaultMessage:"Collapsed toots"})),Object(n.a)(u,{settings:a,item:["collapsed","enabled"],id:"mastodon-settings--collapsed-enabled",onChange:t},void 0,Object(n.a)(b.b,{id:"settings.enable_collapsed",defaultMessage:"Enable collapsed toots"})),Object(n.a)(u,{settings:a,item:["collapsed","show_action_bar"],id:"mastodon-settings--collapsed-show-action-bar",onChange:t,dependsOn:[["collapsed","enabled"]]},void 0,Object(n.a)(b.b,{id:"settings.show_action_bar",defaultMessage:"Show action buttons in collapsed toots"})),Object(n.a)("section",{},void 0,Object(n.a)("h2",{},void 0,Object(n.a)(b.b,{id:"settings.auto_collapse",defaultMessage:"Automatic collapsing"})),Object(n.a)(u,{settings:a,item:["collapsed","auto","all"],id:"mastodon-settings--collapsed-auto-all",onChange:t,dependsOn:[["collapsed","enabled"]]},void 0,Object(n.a)(b.b,{id:"settings.auto_collapse_all",defaultMessage:"Everything"})),Object(n.a)(u,{settings:a,item:["collapsed","auto","notifications"],id:"mastodon-settings--collapsed-auto-notifications",onChange:t,dependsOn:[["collapsed","enabled"]],dependsOnNot:[["collapsed","auto","all"]]},void 0,Object(n.a)(b.b,{id:"settings.auto_collapse_notifications",defaultMessage:"Notifications"})),Object(n.a)(u,{settings:a,item:["collapsed","auto","lengthy"],id:"mastodon-settings--collapsed-auto-lengthy",onChange:t,dependsOn:[["collapsed","enabled"]],dependsOnNot:[["collapsed","auto","all"]]},void 0,Object(n.a)(b.b,{id:"settings.auto_collapse_lengthy",defaultMessage:"Lengthy toots"})),Object(n.a)(u,{settings:a,item:["collapsed","auto","reblogs"],id:"mastodon-settings--collapsed-auto-reblogs",onChange:t,dependsOn:[["collapsed","enabled"]],dependsOnNot:[["collapsed","auto","all"]]},void 0,Object(n.a)(b.b,{id:"settings.auto_collapse_reblogs",defaultMessage:"Boosts"})),Object(n.a)(u,{settings:a,item:["collapsed","auto","replies"],id:"mastodon-settings--collapsed-auto-replies",onChange:t,dependsOn:[["collapsed","enabled"]],dependsOnNot:[["collapsed","auto","all"]]},void 0,Object(n.a)(b.b,{id:"settings.auto_collapse_replies",defaultMessage:"Replies"})),Object(n.a)(u,{settings:a,item:["collapsed","auto","media"],id:"mastodon-settings--collapsed-auto-media",onChange:t,dependsOn:[["collapsed","enabled"]],dependsOnNot:[["collapsed","auto","all"]]},void 0,Object(n.a)(b.b,{id:"settings.auto_collapse_media",defaultMessage:"Toots with media"}))),Object(n.a)("section",{},void 0,Object(n.a)("h2",{},void 0,Object(n.a)(b.b,{id:"settings.image_backgrounds",defaultMessage:"Image backgrounds"})),Object(n.a)(u,{settings:a,item:["collapsed","backgrounds","user_backgrounds"],id:"mastodon-settings--collapsed-user-backgrouns",onChange:t,dependsOn:[["collapsed","enabled"]]},void 0,Object(n.a)(b.b,{id:"settings.image_backgrounds_users",defaultMessage:"Give collapsed toots an image background"})),Object(n.a)(u,{settings:a,item:["collapsed","backgrounds","preview_images"],id:"mastodon-settings--collapsed-preview-images",onChange:t,dependsOn:[["collapsed","enabled"]]},void 0,Object(n.a)(b.b,{id:"settings.image_backgrounds_media",defaultMessage:"Preview collapsed toot media"}))))},function(e){var t=e.onChange,a=e.settings;return Object(n.a)("div",{className:"glitch local-settings__page media"},void 0,Object(n.a)("h1",{},void 0,Object(n.a)(b.b,{id:"settings.media",defaultMessage:"Media"})),Object(n.a)(u,{settings:a,item:["media","letterbox"],id:"mastodon-settings--media-letterbox",onChange:t},void 0,Object(n.a)(b.b,{id:"settings.media_letterbox",defaultMessage:"Letterbox media"}),Object(n.a)("span",{className:"hint"},void 0,Object(n.a)(b.b,{id:"settings.media_letterbox_hint",defaultMessage:"Scale down and letterbox media to fill the image containers instead of stretching and cropping them"}))),Object(n.a)(u,{settings:a,item:["media","fullwidth"],id:"mastodon-settings--media-fullwidth",onChange:t},void 0,Object(n.a)(b.b,{id:"settings.media_fullwidth",defaultMessage:"Full-width media previews"})),Object(n.a)(u,{settings:a,item:["inline_preview_cards"],id:"mastodon-settings--inline-preview-cards",onChange:t},void 0,Object(n.a)(b.b,{id:"settings.inline_preview_cards",defaultMessage:"Inline preview cards for external links"})),Object(n.a)(u,{settings:a,item:["media","reveal_behind_cw"],id:"mastodon-settings--reveal-behind-cw",onChange:t},void 0,Object(n.a)(b.b,{id:"settings.media_reveal_behind_cw",defaultMessage:"Reveal sensitive media behind a CW by default"})))}]),t}return Object(d.a)(t,e),t.prototype.render=function(){var e=this.pages,t=this.props,a=t.index,s=t.intl,i=t.onChange,o=t.settings,d=e[a]||e[0];return Object(n.a)(d,{intl:s,onChange:i,settings:o})},t}(g.a.PureComponent))||s,_=a(10),f=a.n(_),h=a(25),v=function(e){function t(){for(var t,a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return t=e.call.apply(e,[this].concat(s))||this,Object(l.a)(Object(o.a)(t),"handleClick",function(e){var a=t.props,s=a.index,i=a.onNavigate;i&&(i(s),e.preventDefault())}),t}return Object(d.a)(t,e),t.prototype.render=function(){var e=this.handleClick,t=this.props,a=t.active,s=t.className,i=t.href,o=t.icon,d=t.textIcon,l=t.onNavigate,c=t.title,g=f()("glitch","local-settings__navigation__item",{active:a},s),r=o?Object(n.a)(h.a,{fixedWidth:!0,id:o}):d?Object(n.a)("span",{className:"text-icon-button"},void 0,d):null;return i?Object(n.a)("a",{href:i,className:g},void 0,r," ",Object(n.a)("span",{},void 0,c)):l?Object(n.a)("a",{onClick:e,role:"button",tabIndex:"0",className:g},void 0,r," ",Object(n.a)("span",{},void 0,c)):null},t}(g.a.PureComponent),O=a(144),j=Object(b.f)({general:{id:"settings.general",defaultMessage:"General"},compose:{id:"settings.compose_box_opts",defaultMessage:"Compose box"},content_warnings:{id:"settings.content_warnings",defaultMessage:"Content Warnings"},filters:{id:"settings.filters",defaultMessage:"Filters"},collapsed:{id:"settings.collapsed_statuses",defaultMessage:"Collapsed toots"},media:{id:"settings.media",defaultMessage:"Media"},preferences:{id:"settings.preferences",defaultMessage:"Preferences"},close:{id:"settings.close",defaultMessage:"Close"}}),M=Object(b.g)(i=function(e){function t(){return e.apply(this,arguments)||this}return Object(d.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.index,a=e.intl,s=e.onClose,i=e.onNavigate;return Object(n.a)("nav",{className:"glitch local-settings__navigation"},void 0,Object(n.a)(v,{active:0===t,index:0,onNavigate:i,icon:"cogs",title:a.formatMessage(j.general)}),Object(n.a)(v,{active:1===t,index:1,onNavigate:i,icon:"pencil",title:a.formatMessage(j.compose)}),Object(n.a)(v,{active:2===t,index:2,onNavigate:i,textIcon:"CW",title:a.formatMessage(j.content_warnings)}),Object(n.a)(v,{active:3===t,index:3,onNavigate:i,icon:"filter",title:a.formatMessage(j.filters)}),Object(n.a)(v,{active:4===t,index:4,onNavigate:i,icon:"angle-double-up",title:a.formatMessage(j.collapsed)}),Object(n.a)(v,{active:5===t,index:5,onNavigate:i,icon:"image",title:a.formatMessage(j.media)}),Object(n.a)(v,{active:6===t,href:O.c,index:6,icon:"cog",title:a.formatMessage(j.preferences)}),Object(n.a)(v,{active:7===t,className:"close",index:7,onNavigate:s,icon:"times",title:a.formatMessage(j.close)}))},t}(g.a.PureComponent))||i,y=a(42),w=a(297),C=function(e){function t(){for(var t,a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return t=e.call.apply(e,[this].concat(s))||this,Object(l.a)(Object(o.a)(t),"state",{currentIndex:0}),Object(l.a)(Object(o.a)(t),"navigateTo",function(e){return t.setState({currentIndex:+e})}),t}return Object(d.a)(t,e),t.prototype.render=function(){var e=this.navigateTo,t=this.props,a=t.onChange,s=t.onClose,i=t.settings,o=this.state.currentIndex;return Object(n.a)("div",{className:"glitch modal-root__modal local-settings"},void 0,Object(n.a)(M,{index:o,onClose:s,onNavigate:e}),Object(n.a)(p,{index:o,onChange:a,settings:i}))},t}(g.a.PureComponent);t.default=Object(r.connect)(function(e){return{settings:e.get("local_settings")}},function(e){return{onChange:function(t,a){e(Object(w.b)(t,a))},onClose:function(){e(Object(y.c)())}}})(C)}}]);
//# sourceMappingURL=settings_modal.js.map