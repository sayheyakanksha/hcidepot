---
title: Metadata Profile
layout: page
permalink: /metadata-profile.html
custom-foot: js/table-js.html 
---


## Metadata Profile for HCI /depot

The table below shows the metadata application profile (MAP) for the *HCI /depot* collection, which will help you understand how to structure and categorize data in this collection for future additions.

For more details about this MAP, see the project’s [documentation](documentation.html).

<div class="table-responsive">
    <table id="item-table11" class="table table-striped">
        <thead>
            <tr>
                <th>Element Name</th>
                <th>Dublin Core Mapping</th>
                <th>Obligation</th>
                <th>Cardinality</th>
                <th>Input Guidelines</th>
                <th>Value/Syntax Schema</th>
                <th>Examples</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>objectid</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: <span class="fw-bold">capstone_[YYYY]_[XXXX]</span> , where YYYY is capstone project completion year and XXXX is the student’s full name. Make sure to separate the names (first, middle and last) using underscores.
                    </td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_2021_mike_wazowski</code></li>
                            <li><code>capstone_2024_james_p_sullivan</code></li>
                            <li><code>capstone_2025_akanksha</code></li>
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
                            <li><code>capstone_2021_mike_wazowski</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>filename</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>This is the poster's file name. Must exactly match the actual filename of the file in the “objects” directory, including the case of the filename and file extension. (Quick tip: When adding new files, it’s a good idea to rename the file and follow the format: <span class="fw-bold">capstone_poster_[YYYY]_[XXXX].[FILE EXTENSION]</span>. This will help keep the data consistent and organized on the backend).
                    </td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>capstone_poster_2021_mike_wazowski.pdf</code></li>
                            <li><code>capstone_poster_2025_akanksha.jpg</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>format</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/format/" target="_blank">Format</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>se media types format on IANA to describe the capstone poster’s file type:
                        <ul>
                            <li>For image: image/jpeg, image/png, image/svg+xml</li>
                            <li> For document: application/pdf</li>
                            <li>For video: video/mp4</li>
                        </ul>
                        </td>
                    <td> <a href="https://www.iana.org/assignments/media-types/media-types.xhtml">IANA Media Types</a></td>
                    <td>
                        <ul>
                            <li><code>image/jpeg</code></li>
                            <li><code>image/png</code></li>
                            <li><code>image/svg+xml</code></li>
                            <li><code>application/pdf</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>title</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/title/" target="_blank">Title</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Enter the capstone project’s title exactly as it appears on the poster, using the title case (capitalize the first letter of each major word).
                        <br>
                        If the title includes special symbols (e.g., + or “” or ?), include them as they appear.
                        <br>
                        If there are multiple projects with same name, differentiate the new one by adding the year in brackets. </td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>What Makes the Elden Ring Great?</code></li>
                            <li><code>Give-a-crit</code></li>
                            <li><code>Enhancing Music Producers</code></li>
                            <li><code>Scribble Pet</code></li>
                            <li><code>Scribble Pet (2024)</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>creator</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/creator/" target="_blank">Creator</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use this format to add student’s name: <span class="fw-bold">[FIRSTNAME] {[MIDDLE NAME]}] [LAST NAME]</span>. Make sure write it in title case. If multiple student creators, separate by comma (,). If a student has a single name, just write that name.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>Hayao Miyazaki</code></li>
                            <li><code>Robert M. Smith</code></li>
                            <li><code>Joe Duplantier, Mario Duplantier</code></li>
                            <li><code>Akanksha</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>description</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/description/" target="_blank">Description</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Briefly describe what the project is about in 1-3 sentences. Use clear, complete sentences. This can usually be found next to the project title on the poster.
                    </td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>A platform for artists to share work and receive peer feedback.</code></li>
                            <li><code>An analysis of design and game elements that contribute to the success of Elden Ring.
                            </code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>course</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/coverage/" target="_blank">Course</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: <span class="fw-bold">XXXX [Course Name]</span>, where XXXX is the course number. Make sure that the course name is written in title case (capitalize the first letter of each major word).
                    </td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>I695 HCI/d Capstone Thesis</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>date</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/date/" target="_blank">Date</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: <span class="fw-bold">YYYY</span>,  where YYYY is four-digit project completion year. Don’t add any months or dates.
                    </td>
                    <td><a href="https://www.w3.org/TR/NOTE-datetime">W3 Date and Time Formats</a></td>
                    <td>
                        <ul>
                            <li><code>2020</code></li>
                            <li><code>2024</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>term</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/coverage/" target="_blank">Coverage</a></td>
                    <td>Required (if available)
                    </td>
                    <td>0..1</td>
                    <td>Add the duration of the capstone course. If it was only one semester course, just mention one semester with year. Make sure to write in title case - capitalize the first letter (Fall, Spring).
                    </td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>Fall 2023 - Spring 2024</code></li>
                            <li><code>Spring 2025</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>thesis</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/relation/" target="_blank">Relation</a></td>
                    <td>Required (if available)</td>
                    <td>0..1</td>
                    <td>Include the file path to the digital documentation, available in pdf format. Make sure to enter the correct file path. Use format: <span class="fw-bold">/hcidepot/objects/thesis/capstone_thesis_[YYYY]_[STUDENT’S NAME].pdf</span> (Note: This file needs to be stored under thesis folder in objects).
                    </td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>/hcidepot/objects/thesis/capstone_2021_mike_wazowski.pdf
                            </code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>capstone_advisors</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/contributor/" target="_blank">Contributor</a></td>
                    <td>Mandatory</td>
                    <td>1..n</td>
                    <td>Use format: <span class="fw-bold">[FIRSTNAME] [{MIDDLE NAME}] [LAST NAME]</span>. Make sure to write it in title case. If multiple capstone advisors involved, separate by comma (,).</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>Colin M. Gray, Kayce Reed-Buechlein, Michael Stallings</code></li>
                            <li><code>Sai Shruthi Chivukula</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>associate_instructors</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/contributor/" target="_blank">Contributor</a></td>
                    <td>Required (if available)</td>
                    <td>0..n</td>
                    <td>Use format: <span class="fw-bold">[FIRSTNAME] [{MIDDLE NAME}] [LAST NAME]</span>. Make sure to write it in title case. If multiple associate instructors involved, separate by comma (,).
                    </td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>Fereshtehossadat Shojaei, Patrycja Zdziarska</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>prototype_link</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/relation/" target="_blank">Relation</a></td>
                    <td>Optional</td>
                    <td>0..1</td>
                    <td>Include a link to any digital prototype, demo, or related external media. Make sure to enter the full URL starting with http:// or https://.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>https://youtu.be/6TKMlFbmdgA?feature=shared</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>project_type</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/subject/" target="_blank">Subject</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>This information should be derived from the project’s context. This will usually be mentioned in their documentation.
                    </td>
                    <td>See <a href="metadata-profile-controlled-vocab.html#project-types" target="_blank"><span class="fw-bold">§ Project Types</span></a> in <a href="metadata-profile-controlled-vocab.html">Project-Specific Controlled Vocabularies</a>.</td>
                    <td>
                        <ul>
                            <li><code>User Research for Design</code></li>
                            <li><code>Academic Research</code></li>
                            <li><code>Interaction Design</code></li>
                            <li><code>Service Design</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>project_theme</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/subject/" target="_blank">Subject</a></td>
                    <td>Optional</td>
                    <td>0..n</td>
                    <td>This information should be derived from the project’s context. This will usually be mentioned in their documentation.
                    </td>
                    <td>See <a href="metadata-profile-controlled-vocab.html#project-themes" target="_blank"><span class="fw-bold">§ Project Themes</span></a> in <a href="metadata-profile-controlled-vocab.html">Project-Specific Controlled Vocabularies</a>.</td>
                    <td>
                        <ul>
                            <li><code>Artificial Intelligence (AI)</code></li>
                            <li><code>Accessibility; Social Computing</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>industry_application</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/subject/" target="_blank">Subject</a></td>
                    <td>Optional</td>
                    <td>0..n</td>
                    <td>This information should be derived from the project’s context. This will usually be mentioned in their documentation.
                    </td>
                    <td>See <a href="metadata-profile-controlled-vocab.html#industry-application" target="_blank"><span class="fw-bold">§ Industry Application</span></a> in <a href="metadata-profile-controlled-vocab.html">Project-Specific Controlled Vocabularies</a>.</td>
                    <td>
                        <ul>
                            <li><code>Education</code></li>
                            <li><code>Retail; E-commerce</code></li>
                            <li><code>Gaming</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>user_groups</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/subject/" target="_blank">Subject</a></td>
                    <td>Optional</td>
                    <td>0..n</td>
                    <td>This information should be derived from the project’s context. If multiple, separate by semicolon (;).</td>
                    <td>See <a href="metadata-profile-controlled-vocab.html#user-groups" target="_blank"><span class="fw-bold">§ User Groups</span></a> in <a href="metadata-profile-controlled-vocab.html">Project-Specific Controlled Vocabularies</a>.</td>
                    <td>
                        <ul>
                            <li><code>People with Disabilities</code></li>
                            <li><code>Students; Employees</code></li>
                            <li><code>Children</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>degree_book</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/relation/" target="_blank">Relation</a></td>
                    <td>Optional</td>
                    <td>0..1</td>
                    <td>TInclude the file path to the graduate degree book, available in pdf format. Make sure to enter the correct file path. Use format: <span class="fw-bold">/hcidepot/objects/books/capstone_grad_book_[YYYY].pdf</span> (Note: This file needs to be stored under books folder in objects).
                    </td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>/hcidepot/objects/books/capstone_grad_book_2024.pdf</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>source</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/source/" target="_blank">Source</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Enter the school associated with the capstone project. This can typically be found at the bottom of the project poster. Make sure to write in title case.
                    </td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>Luddy School of Informatics, Computing, and Engineering</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>subject</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/subject/" target="_blank">Subject</a></td>
                    <td>Mandatory</td>
                    <td>1..n</td>
                    <td>Provide keywords for the project, separated by a semicolon (;). Make sure that keywords are relevant and concise. These can include technology names, specific tools, methodologies, or other terms that help describe the project’s content.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>accessibility; interface design; virtual reality</code></li>
                            <li><code>unity</code></li>
                            <li><code>figma; arduino</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>language</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/language/" target="_blank">Language</a></td>
                    <td>Optional</td>
                    <td>0..n</td>
                    <td>Specify the language of the project materials in format xxx. Follow 3-letter codes for ISO language names.
                    </td>
                    <td>See <a href="https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes" target="_blank">ISO 639-1 3-letter Language Codes</a></td>
                    <td>
                        <ul>
                            <li><code>eng</code></li>
                            <li><code>hin</code></li>
                            <li><code>kor</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>rights</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/rights/" target="_blank">Rights</a></td>
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
                    <td><a href="https://rightsstatements.org/en/">Rightsstatements.org</a></td>
                    <td>
                        <ul>
                            <li><code>https://rightsstatements.org/page/InC/1.0/?language=en</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>display_template</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/format/" target="_blank">Format</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Specify pdf or jpg depending on the capstone poster’s file type.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>jpg</code></li>
                            <li><code>pdf</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>object_location</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: <span class="fw-bold">/objects/[poster filename].pdf</span> (Note: This file needs to be stored under objects folder and should match the exact file name).</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>/objects/capstone_poster_2024_mike_wazowski.pdf</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>identifier</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/identifier/" target="_blank">Identifier</a></td>
                    <td>Optional</td>
                    <td>1</td>
                    <td>To be added</td>
                    <td></td>
                    <td>
                        <!-- <ul>
                            <li><code></code></li>
                        </ul> -->
                    </td>
                </tr>
                <tr>
                    <td>image_small</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/relation/" target="_blank">Relation</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: <span class="fw-bold">/objects/small/[poster filename]_sm.jpg</span> (Note: You need to add this file path here so that these images can be generated using rake derivatives command later on.) </td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>/objects/small/capstone_poster_2024_mike_wazowski_sm.jpg</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>image_thumb</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/elements11/relation/" target="_blank">Relation</a></td>
                    <td>Mandatory</td>
                    <td>1</td>
                    <td>Use format: <span class="fw-bold">/objects/thumbs/[poster filename]_th.jpg</span> (Note: You need to add this file path here so that these images can be generated using rake derivatives command later on.) </td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>/objects/thumbs/capstone_poster_2024_mike_wazowski_th.jpg</code></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>image_alt_text</td>
                    <td><a href="https://www.dublincore.org/specifications/dublin-core/dcmi-terms/terms/description/" target="_blank">Description</a></td>
                    <td>Optional</td>
                    <td>1</td>
                    <td>Briefly describe the contents of the capstone posters for better accessibility. This is marked as optional but it will be good to add this information whenever you can.</td>
                    <td></td>
                    <td>
                        <ul>
                            <li><code>Capstone poster of Mike Wazowski which describes how awesome monster inc movie was. It shows pictures from the movie from the factory.</code></li>
                        </ul>
                    </td>
                </tr>
        </tbody>
    </table>
</div>
<br>
<div>  
    <h3>Legend</h3>
    <ul>
        <li><code>1</code> : Only one value is permitted.</li>
        <li><code>0..1</code> :  Zero or one value allowed (optional).</li>
        <li><code>1..n</code> : At least one value is required, with no upper limit.</li>
        <li><code>0..n</code> : Any number of values, including none.</li>
    </ul>
</div>