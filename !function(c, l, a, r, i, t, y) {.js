!function(c, l, a, r, i, t, y) {
    a[c]("metadata", (function(e) {
        function n() {
            var n = ga.getAll();
            for (var o in n) {
                var s = n[o];
                if ("UA-52394643-1" === s.get("trackingId")) {
                    s.set("dimension1", ["https://clarity.microsoft.com/ga", e.projectId, e.userId, e.sessionId].join("/")),
                    s.send("event", {
                        eventCategory: "Clarity",
                        nonInteraction: !0,
                        eventAction: e.sessionId
                    });
                    break
                }
            }
        }
        try {
            ga && ga(n)
        } catch (e) {
            try {
                n()
            } catch (e) {}
        }
    }
    ));
    if (a[c].v || a[c].t)
        return a[c]("event", c, "dup." + i.projectId);
    a[c].t = !0,
    (t = l.createElement(r)).async = !0,
    t.src = "https://www.clarity.ms/s/0.7.66/clarity.js",
    (y = l.getElementsByTagName(r)[0]).parentNode.insertBefore(t, y),
    a[c]("start", i),
    a[c].q.unshift(a[c].q.pop()),
    a[c]("set", "C_IS", "0"),
    a[c]("set", "C_V", "v_throttleControl")
}("clarity", document, window, "script", {
    "projectId": "9twm8m8r4i",
    "upload": "https://i.clarity.ms/collect",
    "expire": 365,
    "cookies": ["_uetmsclkid", "_uetvid"],
    "track": true,
    "content": true,
    "unmask": ["body"],
    "dob": 1860
});
