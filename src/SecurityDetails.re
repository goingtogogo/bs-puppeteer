/** Security information about a response received by a [Page]. */
type t;

/** A string with the name of issuer of the certificate. */
[@bs.send]
external issuer: t => string = "";

/** String with the security protocol, eg. "TLS 1.2". */
[@bs.send]
external protocol: t => string = "";

/** Name of the subject to which the certificate was issued to. */
[@bs.send]
external subjectName: t => string = "";

/** UnixTime stating the start of validity of the certificate. */
[@bs.send]
external validFrom: t => float = "";

/** UnixTime stating the end of validity of the certificate. */
[@bs.send]
external validTo: t => float = "";
