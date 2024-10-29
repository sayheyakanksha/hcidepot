---
title: Metadata Profile
layout: about
permalink: /metadata-profile.html
# include CollectionBuilder info at bottom
credits: true
# Edit the markdown on in this file to describe your collection
# Look in _includes/feature for options to easily add features to the page
---

{% include feature/jumbotron.html objectid="https://informatics.indiana.edu/images/programs/programs-informatics-hci-sm.jpg" %} 

<!-- {% include feature/nav-menu.html sections="About HCI /depot;About the About Page" %} -->

## About Metadata Profile

<div>
    <h2>
        Metadata Application Profile for <cite>HCI /depot</cite>
    </h2>
    <div class="table-responsive-md">
        <table id="item-table" class="table table-striped">
            <thead>
                <tr>
                    <th><strong>Element Name</strong></th>
                    <th><strong>Dublin Core Mapping</strong></th>
                    <th><strong>Obligation</strong></th>
                    <th><strong>Cardinality</strong></th>
                    <th><strong>Input Guidelines</strong></th>
                    <th><strong>Value/Syntax Schema</strong></th>
                    <th>Examples</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>objectid</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: capstone_YYYY_NNN, where YYYY is project completion year and NNN is a sequential 4-digit zero-padded number.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>parentid</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/relation/" target="_blank">Relation</a></td>
                    <td>Optional</td>
                    <td>0..1</td>
                    <td>Include for objects w/in a compound object. Should appear as the objectid of the compound object in which it is contained.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>filename</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: capstone_YYYY_NNN, where YYYY is project completion year and NNN is a sequential 4-digit zero-padded number.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>format</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: capstone_YYYY_NNN, where YYYY is project completion year and NNN is a sequential 4-digit zero-padded number.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>title</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: capstone_YYYY_NNN, where YYYY is project completion year and NNN is a sequential 4-digit zero-padded number.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>creator</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: capstone_YYYY_NNN, where YYYY is project completion year and NNN is a sequential 4-digit zero-padded number.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>description</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: capstone_YYYY_NNN, where YYYY is project completion year and NNN is a sequential 4-digit zero-padded number.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>course</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: capstone_YYYY_NNN, where YYYY is project completion year and NNN is a sequential 4-digit zero-padded number.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>date</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: capstone_YYYY_NNN, where YYYY is project completion year and NNN is a sequential 4-digit zero-padded number.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>term</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: capstone_YYYY_NNN, where YYYY is project completion year and NNN is a sequential 4-digit zero-padded number.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>capstone_advisors</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: capstone_YYYY_NNN, where YYYY is project completion year and NNN is a sequential 4-digit zero-padded number.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>associate_instructors</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: capstone_YYYY_NNN, where YYYY is project completion year and NNN is a sequential 4-digit zero-padded number.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>documentation</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: capstone_YYYY_NNN, where YYYY is project completion year and NNN is a sequential 4-digit zero-padded number.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>prototype_link</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: capstone_YYYY_NNN, where YYYY is project completion year and NNN is a sequential 4-digit zero-padded number.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>project_type</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: capstone_YYYY_NNN, where YYYY is project completion year and NNN is a sequential 4-digit zero-padded number.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>project_theme</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: capstone_YYYY_NNN, where YYYY is project completion year and NNN is a sequential 4-digit zero-padded number.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>industry_application</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: capstone_YYYY_NNN, where YYYY is project completion year and NNN is a sequential 4-digit zero-padded number.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>user_groups</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: capstone_YYYY_NNN, where YYYY is project completion year and NNN is a sequential 4-digit zero-padded number.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>source</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: capstone_YYYY_NNN, where YYYY is project completion year and NNN is a sequential 4-digit zero-padded number.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                            <li><code>capstone_2024_001</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>language</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/language/" target="_blank">Language</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Specify the language of the project materials in format xxx. Follow 3-letter codes for ISO language names.</td>
                    <td><a href="https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes" target="_blank">ISO 639-1 3-letter Language Codes</a></td>
                    <td>
                        <ul>
                            <li><code>eng</code></li>
                            <li><code>kor</code></li>
                            <li><code>hin</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>rights</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/rights/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Provide a free-text description of the rights, typically “student retains copyright.” You may start it with the copyright symbol (©).</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>© student retains copyright</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>rightsstatement</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/rights/" target="_blank">Rights</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Provide a URI-based rights statement. Usually, students will hold the copyright over their work unless otherwise specified.</td>
                    <td>https://rightsstatements.org/en/</td>
                    <td>
                        <ul>
                            <li></li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div> 

